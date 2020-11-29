/**
 * @generated-from ./not-async-iterable.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { notAsyncIterable } from '@iter-tools/es';

describe('notAsyncIterable', () => {
  describe('when value is an async iterable', () => {
    it('returns false', () => {
      expect(notAsyncIterable((async function* () {})())).toBe(false);
    });
  });

  describe('when value is not an async iterable', () => {
    it('returns true', () => {
      expect(notAsyncIterable((function* () {})())).toBe(true);
      expect(notAsyncIterable([])).toBe(true);
      expect(notAsyncIterable({})).toBe(true);
      expect(notAsyncIterable(undefined)).toBe(true);
      expect(notAsyncIterable(null)).toBe(true);
    });
  });
});