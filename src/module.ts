import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { addServerHandler, defineNuxtModule } from '@nuxt/kit'

export interface ModuleOptions {
  endpoint: string
  route: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'graphql-playground',
    configKey: 'gqlPlayground'
  },
  defaults: {
    endpoint: '/api/graphql',
    route: '/api/playground'
  },
  setup (options, nuxt) {
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    nuxt.options.build.transpile.push(runtimeDir)

    nuxt.hook('nitro:config', (nitro) => {
      nitro.virtual = nitro.virtual || {}
      nitro.virtual['#nuxt-graphql-playground'] = `export default ${JSON.stringify({
        endpoint: options.endpoint
      })}`
    })

    addServerHandler({
      route: options.route,
      handler: resolve(runtimeDir, 'playground-handler')
    })
  }
})
