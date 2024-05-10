import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn,readToken } from '../env'

export const client = createClient({
  projectId:"w2lce9jj",
  dataset:"production",
  apiVersion:"2024-05-06",
  useCdn:false,
  readToken:"skUtP3B04gPGuJCU9JcVyoavvtzN0aOYAVAZN8ZLHMgVzBPK06wvki2nuoWBOKpXnvWGjNPcyZSzI1NOqdkA9PtnpITdfQ0bHcU9gjCL2Siv6wfGoJKqhhpo1mpt2N6M9vfJER1LQII3IWa355c2prTNXjFIkbpNvb02A1qeUsWEvIS4u1rU"
})
