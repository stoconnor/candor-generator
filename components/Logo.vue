<template>
  <a 
    :class="classList"
    class="no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
    href='#'
  >
    CANDOR
    <p class="uppercase tracking-loose w-full text-sm pl-2">G E N E R A T O R</p>
  </a>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    isStickable: {
      type: Boolean,
      default: false
    },
    isSticky: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classList() {
      let classList = ''
      if (this.isStickable) {
        classList = this.isSticky ? 'text-gray-800' : 'text-white'
      } else {
        classList = 'text-orange-600'
      }
      return classList
    }
  }
}
</script>
