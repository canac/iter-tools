/**
 * @generated-from ./$split-groups.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIterableCurry } from '../../internal/async-iterable.js';
import { __asyncSplitGroupsBy } from '../$split-groups-by/async-split-groups-by.js';

export function __asyncSplitGroups(iterable) {
  return __asyncSplitGroupsBy(iterable, (_) => _);
}

export const asyncSplitGroups = /*#__PURE__*/ asyncIterableCurry(__asyncSplitGroups);