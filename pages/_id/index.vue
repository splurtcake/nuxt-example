<template>
  <main>
    <div v-for="(component, index) in page.fields.content" :key="index">
      <component
        :is="components[getComponentName(component)].component"
        v-bind="{ fields: component.fields }"
      />
    </div>
  </main>
</template>

<script>
import Hero from '../../components/Hero.vue'

import { createClient } from '../../plugins/contentful'
const contentfulClient = createClient()

export default {
  asyncData({ env, params }) {
    return contentfulClient
      .getEntries({
        content_type: 'page',
        'fields.slug': params.id || 'home',
      })
      .then((page) => {
        return {
          siteName: env.SITE_NAME,
          page: page.items[0],
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
      return component?.sys?.contentType?.sys?.id
    },
  },
  head() {
    return {
      title: `${this.siteName} — ${this.page?.fields?.title}`,
    }
  },
}
</script>
