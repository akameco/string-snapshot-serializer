export function getSnapshotSerializer(): jest.SnapshotSerializerPlugin {
  return {
    test(value) {
      return typeof value === 'string'
    },
    print(value) {
      return value
    },
  }
}
