<template>
  <div>
    <div v-for="(component, index) in page.fields.content" :key="index">
      <component
        :is="components[getComponentName(component)].component"
        v-bind="{ fields: component.fields }"
      />
    </div>
  </div>
</template>

<script>
// components
import Hero from '../components/Hero.vue'

// contentful
import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export default {
  asyncData({ env, params }) {
    return Promise.all([
      // fetch all blog posts sorted by creation date
      client.getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        'fields.slug[in]': 'home',
        order: '-sys.createdAt',
      }),
    ]).then(([page]) => {
      // return data that should be available
      // in the template
      return {
        page: page.items.length ? page.items[0] : {},
      }
    })
  },

  data() {
    return {
      components: {
        Hero: {
          component: Hero,
        },
      },
    }
  },

  methods: {
    getComponentName(component) {
      if (!component) return
      return component.sys.contentType.sys.id
    },
  },
}
</script>
