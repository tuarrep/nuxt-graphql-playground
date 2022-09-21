import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { writeFile } from 'node:fs/promises'
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
  async setup (options, nuxt) {
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    nuxt.options.build.transpile.push(runtimeDir)

    const template = `import expressPlayground from 'graphql-playground-middleware-express'
import { defineHandler } from 'h3'

export default defineHandler(
  // @ts-ignore
  expressPlayground.default({ endpoint: '${options.endpoint}' })
)`

    await writeFile(resolve(runtimeDir, 'playground-handler.ts'), template)

    addServerHandler({
      route: options.route,
      handler: resolve(runtimeDir, 'playground-handler.ts')
    })
  }
})
