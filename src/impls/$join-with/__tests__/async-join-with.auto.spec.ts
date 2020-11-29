/**
 * @generated-from ./async-join-with.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncJoinWith } from '@iter-tools/es';
import { asyncWrapDeep, asyncUnwrap } from '../../../test/async-helpers.js';

describe('asyncJoinWith', () => {
  it('should join each group with the provided value', async () => {
    expect(await asyncUnwrap(asyncJoinWith(null, asyncWrapDeep([[1], [2], [3]])))).toEqual([
      1,
      null,
      2,
      null,
      3,
    ]);
  });

  it('should have two adjacent separators when encountering an empty group', async () => {
    expect(await asyncUnwrap(asyncJoinWith(null, asyncWrapDeep([[1], [], [3]])))).toEqual([
      1,
      null,
      null,
      3,
    ]);
  });

  it('should yield a single separator when joining two empty groups', async () => {
    expect(await asyncUnwrap(asyncJoinWith(null, asyncWrapDeep([[], []])))).toEqual([null]);
  });

  it('passes through the empty iterable', async () => {
    expect(await asyncUnwrap(asyncJoinWith(0, null))).toEqual([]);
    expect(await asyncUnwrap(asyncJoinWith(0, undefined))).toEqual([]);
    expect(await asyncUnwrap(asyncJoinWith(0, asyncWrapDeep([])))).toEqual([]);
  });
});