<template>
  <section class="bg-black p-12 text-center border-b border-gray-500">
    <h1 class="text-white font-bold text-4xl">{{ fields.title }}</h1>
    <p class="text-white">{{ fields.description }}</p>
  </section>
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
