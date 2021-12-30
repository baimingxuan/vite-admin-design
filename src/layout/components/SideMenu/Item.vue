<template>
  <span>
    <i v-if="icon" :class="'icon ' + icon" />
    <span v-if="title" slot='title'>{{ title }}</span>
  </span>
</template>

<script>
export default {
  name: 'Item',
  // functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
