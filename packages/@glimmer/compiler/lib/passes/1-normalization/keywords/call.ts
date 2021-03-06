import { CurriedType } from '@glimmer/interfaces';

import { keywords } from './impl';
import { comparisonKeyword } from './utils/comparison';
import { curryKeyword } from './utils/curry';
import { getDynamicVarKeyword } from './utils/dynamic-vars';
import { equalKeyword, notEqualKeyword } from './utils/equality';
import { hasBlockKeyword } from './utils/has-block';
import { ifUnlessInlineKeyword } from './utils/if-unless';
import { logKeyword } from './utils/log';
import { andKeyword, notKeyword, orKeyword } from './utils/logical';

export const CALL_KEYWORDS = keywords('Call')
  .kw('has-block', hasBlockKeyword('has-block'))
  .kw('has-block-params', hasBlockKeyword('has-block-params'))
  .kw('-get-dynamic-var', getDynamicVarKeyword)
  .kw('log', logKeyword)
  .kw('eq', equalKeyword)
  .kw('neq', notEqualKeyword)
  .kw('lt', comparisonKeyword('lt'))
  .kw('lte', comparisonKeyword('lte'))
  .kw('gt', comparisonKeyword('gt'))
  .kw('gte', comparisonKeyword('gte'))
  .kw('and', andKeyword)
  .kw('or', orKeyword)
  .kw('not', notKeyword)
  .kw('if', ifUnlessInlineKeyword('if'))
  .kw('unless', ifUnlessInlineKeyword('unless'))
  .kw('component', curryKeyword(CurriedType.Component))
  .kw('helper', curryKeyword(CurriedType.Helper))
  .kw('modifier', curryKeyword(CurriedType.Modifier));
