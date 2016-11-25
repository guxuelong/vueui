<template>
  <div class="m-tab-item" @click="tabClick()">
    {{text}}
  </div>
</template>
<script>
export default {
  props: ['index', 'text', 'nowIndex'],
  methods: {
    tabClick () {
      let _this = this
      let now = this.$parent.$children.indexOf(_this) + 1
      this.$emit('tab-click', now)
    }
  },
  data () {
    return {
    }
  }
}
</script>
