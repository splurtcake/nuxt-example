<template>
  <div class="bg-black p-12 mb-12">
    <h1 class="text-white text-lg">{{ fields.title }}</h1>
    <p class="text-white">{{ fields.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    fields: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
}
</script>
