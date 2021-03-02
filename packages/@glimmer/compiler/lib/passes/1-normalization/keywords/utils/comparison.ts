import { ASTv2, generateSyntaxError } from '@glimmer/syntax';

import { Err, Ok, Result } from '../../../../shared/result';
import * as mir from '../../../2-encoding/mir';
import { NormalizationState } from '../../context';
import { VISIT_EXPRS } from '../../visitors/expressions';
import { GenericKeywordNode, KeywordDelegate } from '../impl';

function assertComparisonKeyword(type: string) {
  return (
    node: GenericKeywordNode
  ): Result<{ lOperand: ASTv2.ExpressionNode; rOperand: ASTv2.ExpressionNode }> => {
    let {
      args: { named, positional },
    } = node;

    if (named && !named.isEmpty()) {
      return Err(generateSyntaxError(`(${type}) does not take any named arguments`, node.loc));
    }

    if (positional.size > 2) {
      return Err(generateSyntaxError(`(${type}) can receive a maximum of 2 arguments`, node.loc));
    }

    let lOperand = positional?.nth(0);
    if (!lOperand) {
      return Err(
        generateSyntaxError(
          `(${type}) must receive 2 arguments - a left and right comparison values. Received no arguments.`,
          node.loc
        )
      );
    }

    let rOperand = positional?.nth(1);
    if (!rOperand) {
      return Err(
        generateSyntaxError(
          `(${type}) must receive 2 arguments - a left and right comparison values. Received 1 argument`,
          node.loc
        )
      );
    }

    return Ok({ lOperand, rOperand });
  };
}

function translateComparisonKeyword(type: string) {
  return (
    { node, state }: { node: ASTv2.CallExpression; state: NormalizationState },
    { lOperand, rOperand }: { lOperand: ASTv2.ExpressionNode; rOperand: ASTv2.ExpressionNode }
  ): Result<mir.Less | mir.LessEqual | mir.Greater | mir.GreaterEqual> => {
    let lOperandResult = VISIT_EXPRS.visit(lOperand, state);
    let rOperandResult = VISIT_EXPRS.visit(rOperand, state);
    return Result.all(lOperandResult, rOperandResult).mapOk(([lOperand, rOperand]) => {
      // TODO: consider typeing this.
      if (type === 'lt') {
        return new mir.Less({ loc: node.loc, lOperand, rOperand });
      } else if (type === 'lte') {
        return new mir.LessEqual({ loc: node.loc, lOperand, rOperand });
      } else if (type === 'gt') {
        return new mir.Greater({ loc: node.loc, lOperand, rOperand });
      } else {
        return new mir.GreaterEqual({ loc: node.loc, lOperand, rOperand });
      }
    });
  };
}

export function comparisonKeyword(
  type: string
): KeywordDelegate<
  ASTv2.CallExpression | ASTv2.AppendContent,
  {
    lOperand: ASTv2.ExpressionNode;
    rOperand: ASTv2.ExpressionNode;
  },
  mir.Less | mir.LessEqual | mir.Greater | mir.GreaterEqual
> {
  return {
    assert: assertComparisonKeyword(type),
    translate: translateComparisonKeyword(type),
  };
}
