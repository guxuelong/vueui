<template>
  <div class="m-card">
    <div v-if="$slots.header" class="m-card__header">
      <slot name="header"></slot>
    </div>
    <div class="m-card__body">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  components: {
  },
  props: {
  }
}
</script>
