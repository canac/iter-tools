import { $async, $await } from '../../../generate/async.macro';

import Heap from 'little-ds-toolkit/lib/heap';
import { $iterableCurry } from '../../internal/$iterable';

$async;
export function* $takeSorted(comparator, number, iterable) {
  const heap = new Heap(comparator);
  $await;
  for (const item of iterable) {
    heap.push(item);
    if (heap.size() > number) {
      heap.pop();
    }
  }
  const len = heap.size();
  for (let i = 0; i < len; i++) {
    yield heap.pop();
  }
}

export default $iterableCurry($takeSorted, { minArgs: 1, maxArgs: 2 });
