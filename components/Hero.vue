<template>
  <section class="bg-black p-12 text-center border-b border-gray-500">
    <h1 class="text-white font-bold text-4xl">{{ fields.title }}</h1>
    <p class="text-white mb-6">{{ fields.description }}</p>
    <button
      @click="buttonClick"
      class="bg-white rounded py-3 p-6 text-black mb-6"
    >
      Click Me
    </button>
    <p class="text-white">Button clicked {{ counter }} times</p>
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
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    buttonClick() {
      this.counter++
    },
  },
}
</script>
