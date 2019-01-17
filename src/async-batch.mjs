import ensureAsyncIterable from './internal/ensure-async-iterable'

async function * batch (number, iterable) {
  if (typeof number !== 'number' || number < 1) throw new Error('batch size should be a number, greater than zero')
  let batch = []
  for await (const item of ensureAsyncIterable(iterable)) {
    batch.push(item)
    if (batch.length === number) {
      yield batch
      batch = []
    }
  }
  if (batch.length) {
    yield batch
  }
}

export default function curriedBatch (number, iterable) {
  if (arguments.length === 1) {
    return iterable => batch(number, iterable)
  }

  return batch(number, iterable)
}
