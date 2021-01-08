import Navigation from '../Navigation.vue'

export default {
  title: 'Example/Navigation',
  component: Navigation,
}

export const Sample = () => {
  return {
    components: { Navigation },
    template: '<Navigation />',
  }
}
