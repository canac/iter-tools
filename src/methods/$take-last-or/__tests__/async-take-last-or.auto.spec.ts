/**
 * @generated-from ./async-take-last-or.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { asyncTakeLastOr } from '../../..';
import { asyncWrap } from '../../../test/async-helpers';

describe('asyncTakeLastOr', () => {
  describe('when iterable is empty', () => {
    it('returns whenEmpty', async () => {
      expect(await asyncTakeLastOr(0, null)).toBe(0);
      expect(await asyncTakeLastOr(0, undefined)).toBe(0);
      expect(await asyncTakeLastOr(0, asyncWrap([]))).toBe(0);
    });
  });

  describe('when iterable has values', () => {
    it('returns last value', async () => {
      expect(await asyncTakeLastOr(null, asyncWrap([1, 2, 3]))).toBe(3);
    });
  });
});