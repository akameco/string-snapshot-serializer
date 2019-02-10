import { getSnapshotSerializer } from '.'

function a(input: string): string {
  return `test "${input}"`
}

test('snapshot default', () => {
  expect(a('unicorn')).toMatchSnapshot()
})

test('snapshot with serializer', () => {
  expect.addSnapshotSerializer(getSnapshotSerializer())
  expect(a('unicorn')).toMatchSnapshot()
})
