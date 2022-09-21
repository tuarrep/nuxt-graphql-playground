import expressPlayground from 'graphql-playground-middleware-express'
import { defineHandler } from 'h3'

export default defineHandler(
  // @ts-ignore
  expressPlayground.default({ endpoint: '/api/graphql' })
)