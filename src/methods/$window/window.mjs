/**
 * @generated-from ./$window.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { iterableCurry } from '../../internal/iterable';
import { CircularBuffer, ReadOnlyCircularBuffer } from '../../internal/circular-buffer';
import { concat } from '../$concat/concat';
import { repeat } from '../repeat/repeat';
export function* window(source, size, { filler } = {}) {
  const buffer = new CircularBuffer(size);
  const bufferReadProxy = new ReadOnlyCircularBuffer(buffer);
  buffer.fill(filler);
  let index = 0;

  for (const item of concat(source, repeat(size - 1, filler))) {
    buffer.push(item);

    if (index + 1 >= size) {
      yield bufferReadProxy;
    }

    index++;
  }
}
export default iterableCurry(window, {
  minArgs: 1,
  maxArgs: 2,
  optionalArgsAtEnd: true,

  validateArgs(args) {
    if (args[0] && typeof args[0] === 'object') {
      const { filler, size } = args[0];

      if (size !== undefined && args[1] !== undefined) {
        throw new Error(
          'size cannot be specified as both a positional and named argument to window',
        );
      }

      args[0] = size;
      args[1] = {
        filler,
      };
    }
  },
});
