import { ASTv2, generateSyntaxError } from '@glimmer/syntax';

import { Err, Ok, Result } from '../../../../shared/result';
import * as mir from '../../../2-encoding/mir';
import { NormalizationState } from '../../context';
import { VISIT_EXPRS } from '../../visitors/expressions';
import { GenericKeywordNode, KeywordDelegate } from '../impl';

function assertAndKeyword(node: GenericKeywordNode): Result<ASTv2.PositionalArguments> {
  let {
    args: { named, positional },
  } = node;

  if (named && !named.isEmpty()) {
    return Err(generateSyntaxError(`(and) does not take any named arguments`, node.loc));
  }

  return Ok(positional);
}

function translateAndKeyword(
  { node, state }: { node: ASTv2.CallExpression; state: NormalizationState },
  positional: ASTv2.PositionalArguments
): Result<mir.And> {
  return VISIT_EXPRS.Positional(positional, state).mapOk(
    (positional) => new mir.And({ positional, loc: node.loc })
  );
}

export const andKeyword: KeywordDelegate<
  ASTv2.CallExpression | ASTv2.AppendContent,
  ASTv2.PositionalArguments,
  mir.And
> = {
  assert: assertAndKeyword,
  translate: translateAndKeyword,
};

function assertOrKeyword(node: GenericKeywordNode): Result<ASTv2.PositionalArguments> {
  let {
    args: { named, positional },
  } = node;

  if (named && !named.isEmpty()) {
    return Err(generateSyntaxError(`(and) does not take any named arguments`, node.loc));
  }

  return Ok(positional);
}

function translateOrKeyword(
  { node, state }: { node: ASTv2.CallExpression; state: NormalizationState },
  positional: ASTv2.PositionalArguments
): Result<mir.Or> {
  return VISIT_EXPRS.Positional(positional, state).mapOk(
    (positional) => new mir.Or({ positional, loc: node.loc })
  );
}

export const orKeyword: KeywordDelegate<
  ASTv2.CallExpression | ASTv2.AppendContent,
  ASTv2.PositionalArguments,
  mir.Or
> = {
  assert: assertOrKeyword,
  translate: translateOrKeyword,
};

function assertNotKeyword(node: GenericKeywordNode): Result<ASTv2.ExpressionNode> {
  let {
    args: { named, positional },
  } = node;

  if (named && !named.isEmpty()) {
    return Err(generateSyntaxError(`(not) does not take any named arguments`, node.loc));
  }

  if (positional?.size > 1) {
    return Err(generateSyntaxError(`(not) only accepts 1 argument`, node.loc));
  }

  let value = positional?.nth(0);

  if (!value) {
    return Err(generateSyntaxError(`(not) requires 1 argument`, node.loc));
  }

  return Ok(value);
}

function translateNotKeyword(
  { node, state }: { node: ASTv2.CallExpression; state: NormalizationState },
  value: ASTv2.ExpressionNode
): Result<mir.Not> {
  return VISIT_EXPRS.visit(value, state).mapOk(
    (result) => new mir.Not({ value: result, loc: node.loc })
  );
}

export const notKeyword: KeywordDelegate<
  ASTv2.CallExpression | ASTv2.AppendContent,
  ASTv2.ExpressionNode,
  mir.Not
> = {
  assert: assertNotKeyword,
  translate: translateNotKeyword,
};
