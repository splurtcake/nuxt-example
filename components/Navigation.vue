<template>
  <nav role="navigation">
    <ul v-if="navigationMenu" class="flex items-center p-4 bg-gray-200">
      <li
        v-for="(navItem, index) in navigationMenu.fields.menuItems"
        :key="index"
        class="mr-4"
      >
        <nuxt-link
          :to="'/' + navItem.fields.slug.trim()"
          role="menuitem"
          class="rounded bg-red-400 py-3 p-6 block"
        >
          {{ navItem.fields.title }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { createClient } from '../plugins/contentful'
const contentful = require('../.contentful.json')
const client = createClient()

export default {
  name: 'Navigation',
  async fetch() {
    await client
      .getEntries({
        content_type: contentful.CTF_NAVIGATION_POST_TYPE_ID,
        order: '-sys.createdAt',
      })
      .then((page) => {
        if (page) {
          this.navigationMenu = page.items[0]
        }
      })
  },
  data() {
    return {
      navigationMenu: null,
    }
  },
  activated() {
    this.$fetch()
  },
}
</script>
