/**
 * @generated-from ./$zip-all.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIterableCurry } from '../../internal/async-iterable';
import { map } from '../$map/map';
export async function* asyncZipAll({ filler } = {}, iterables) {
  const iters = iterables.map(arg => arg[Symbol.asyncIterator]());
  const itersDone = iters.map(iter => ({
    done: false,
    iter,
  }));

  try {
    while (true) {
      const results = map(iter => iter.next(), iters);
      const syncResults = await Promise.all(results);
      const zipped = new Array(iters.length);
      let i = 0;
      let allDone = true;

      for (const { value, done } of syncResults) {
        allDone = allDone && done;
        itersDone[i].done = done;
        zipped[i] = done ? filler : value;
        i++;
      }

      if (allDone) break;
      yield zipped;
    }
  } finally {
    for (const { iter, done } of itersDone) {
      if (!done && typeof iter.return === 'function') await iter.return();
    }
  }
}
export default asyncIterableCurry(asyncZipAll, {
  variadic: true,
  minArgs: 0,
  maxArgs: 1,
});
