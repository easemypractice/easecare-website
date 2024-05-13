import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn,readToken } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  readToken
})
