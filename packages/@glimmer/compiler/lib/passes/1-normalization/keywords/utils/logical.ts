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
