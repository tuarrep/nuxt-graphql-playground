import { defineNuxtConfig } from 'nuxt/config'
import GqlPlayground from '..'

export default defineNuxtConfig({
  modules: [
    GqlPlayground
  ],
  gqlPlayground: {
    route: '/',
    endpoint: 'https://api.mocki.io/v2/c4d7a195/graphql'
  }
})
