<template>
  <nav>
    <ul
      role="menu"
      class="flex items-center p-4 bg-gray-200"
      v-if="navigationMenu"
    >
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
import { mapState } from 'vuex'
export default {
  name: 'Navigation',
  computed: {
    ...mapState('navigation', ['navigationMenu']),
  },
  mounted() {
    this.$store.dispatch('navigation/getPageItems')
  },
}
</script>
