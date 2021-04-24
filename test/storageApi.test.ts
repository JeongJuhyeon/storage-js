import { StorageBucketApi } from '../src/lib'

// TODO: need to setup storage-api server for this test
const URL = 'http://0.0.0.0:5000'
const KEY = 'some.fake.key'

const storage = new StorageBucketApi(URL, { Authorization: `Bearer ${KEY}` })
const newBucketName = `my-new-bucket-${Date.now()}`
let createdBucketId = ''

test('Build to succeed', async () => {
  // Basic test to ensure TS build is working.
  expect(true).toEqual(true)
})

// test('Get all buckets', async () => {
//   const res = await storage.getAllBuckets()
//   expect(res.data).not.toBeNull()
//   expect(res.data).toMatchSnapshot()
// })

// test('Get bucket by id', async () => {
//   const res = await storage.getBucket('7078bc23-9dd6-460d-8b93-082254fee63a')
//   expect(res.data).toMatchSnapshot()
// })

// test('Get bucket with wrong id', async () => {
//   const res = await storage.getBucket('not-exist-id')
//   expect(res.error).toMatchSnapshot()
// })

// test('create new bucket', async () => {
//   const res = await storage.createBucket(newBucketName)
//   createdBucketId = res.data!.id
//   expect(res.data!.name).toEqual(newBucketName)
// })

// test('empty bucket', async () => {
//   const res = await storage.emptyBucket(createdBucketId)
//   expect(res.data).toMatchSnapshot()
// })

// test('delete bucket', async () => {
//   const res = await storage.deleteBucket(createdBucketId)
//   expect(res.data).toMatchSnapshot()
// })
