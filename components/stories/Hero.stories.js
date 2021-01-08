import Hero from '../Hero.vue'

export default {
  title: 'Example/Hero',
  component: Hero,
}

export const Sample = () => {
  return {
    components: { Hero },
    data() {
      return {
        fields: {
          title: 'Hello World',
          description: 'This is the hero description',
        },
      }
    },
    template: '<Hero :fields="fields"/>',
  }
}
