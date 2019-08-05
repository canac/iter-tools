/**
 * @generated-from ./$batch.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIterableCurry } from './internal/async-iterable';

async function* asyncBatch(size, iterable) {
  let batch = [];

  for await (const item of iterable) {
    batch.push(item);

    if (batch.length === size) {
      yield batch;
      batch = [];
    }
  }

  if (batch.length) {
    yield batch;
  }
}

export default asyncIterableCurry(asyncBatch, {
  validateArgs(size) {
    if (typeof size !== 'number' || size < 1) {
      throw new Error('batch size should be a number greater than zero');
    }
  },
});
