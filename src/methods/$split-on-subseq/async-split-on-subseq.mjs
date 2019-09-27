/**
 * @generated-from ./$split-on-subseq.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIterableCurry } from '../../internal/async-iterable';
import { asyncSplitOn_ } from '../$split-on_/async-split-on_';
const config = {
  any: false,
  subseq: true,
};

function asyncSplitOnSubseq(iterable, subseq) {
  return asyncSplitOn_(iterable, config, subseq);
}

export default asyncIterableCurry(asyncSplitOnSubseq);