<template>
    <cell title="switch button" class="m-switch">
      <input type="checkbox" slot="right-icon" v-model="checked" :disabled="disabled" class="m-switch__button">
    </cell>
</template>
<script>
import Cell from '../Cell/index.vue'

export default {
  components: {
    Cell
  },
  props: {
    checkedStatus: {
      type: Boolean,
      default: false
    },
    disabled: Boolean
  },
  data () {
    return {
      checked: this.checkedStatus
    }
  }
}
</script>
