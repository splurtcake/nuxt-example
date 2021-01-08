const contentful = require('contentful')
const contentfulEnv = require('./.contentful.json')

export default {
  env: {
    SITE_NAME: 'Nuxt Example',
    CTF_SPACE_ID: contentfulEnv.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: contentfulEnv.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: contentfulEnv.CTF_PERSON_ID,
    CTF_POST_TYPE_ID: contentfulEnv.CTF_POST_TYPE_ID,
  },

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-example',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  storybook: {
    addons: ['@storybook/addon-a11y', '@storybook/addon-storysource'],
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'root',
        path: '/',
        component: resolve(__dirname, 'pages/_id/index.vue'),
      })
    },
  },

  generate: {
    routes: () => {
      const client = contentful.createClient({
        space: contentfulEnv.CTF_SPACE_ID,
        accessToken: contentfulEnv.CTF_CDA_ACCESS_TOKEN,
      })

      return client
        .getEntries({
          content_type: contentfulEnv.CTF_POST_TYPE_ID,
        })
        .then((response) => {
          return response.items.map((entry) => {
            return {
              route: entry.fields.slug,
              payload: entry,
            }
          })
        })
    },
  },
}
