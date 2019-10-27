/**
 * @generated-from ./$collate.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { AsyncSourceIterable, AsyncResultIterable } from '../../types/async-iterable';
declare function asyncCollate<T>(...sources: Array<AsyncSourceIterable<T>>): AsyncResultIterable<T>;
declare function asyncCollate<T>(
  comparator: (a: T, b: T) => number,
  ...sources: Array<AsyncSourceIterable<T>>
): AsyncResultIterable<T>;
declare function asyncCollate<T>(
  comparator: (a: T, b: T) => number,
): (...sources: Array<AsyncSourceIterable<T>>) => AsyncResultIterable<T>;
export default asyncCollate;
