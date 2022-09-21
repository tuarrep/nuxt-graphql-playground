# @pin-pon/nuxt-graphql-playground

> A Nuxt.js module that injects a server route to serve [the GraphQL Playground](https://github.com/graphql/graphql-playground)

## Setup

1. Add `@pin-pon/nuxt-graphql-playground` dependency to your project

```bash
yarn add @pin-pon/nuxt-graphql-playground # or npm install @pin-pon/nuxt-graphql-playground
```

2. Add `@pin-pon/nuxt-graphql-playground` to the `modules` section of `nuxt.config.js`

```js
export default {
  modules: [
    // Simple usage
    '@pin-pon/nuxt-graphql-playground',

    // With options
    ['@pin-pon/nuxt-graphql-playground', { /* module options */ }]
  ]
}
```

### Using top level options

```js
export default {
  modules: [
    '@pin-pon/nuxt-graphql-playground'
  ],
  gqlPlayground: {
    /* module options */
  }
}
```

## Options

### endpoint
The GraphQL server endpoint (can be absolute)
- Type: `String`
- Default: `/api/graphql`

### route
The path where the playground should be server
- Type: `String`
- Default: `/api/playground`

## License

[MIT License](./LICENSE)

Copyright (c) - Pin Pon SAS
