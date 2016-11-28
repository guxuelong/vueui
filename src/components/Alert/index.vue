<template>
  <div v-show="show">
    <div class="m-modal"></div>
    <div class="m-alert">
      <div class="m-alert__header">
        <div class="m-alert__title">{{para.title}}</div>
        <div class="m-alert__close" @click="hideSelf">关闭</div>
      </div>
      <div class="m-alert__body">
        <div class="m-alert__content">{{para.content}}</div>
      </div>
      <div class="m-alert__footer">
        <div v-if="confirmType()">
          <div class="m-alert__cancel" @click="hideSelf">取消</div>
        </div>
        <div class="m-alert__confirm" @click="confirmFunc">确定</div>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  props: {
    para: Object,
    show: {
      type: Boolean,
      default: false
    },
    confirmFn: Function
  },
  data () {
    return {
    }
  },
  methods: {
    confirmType () {
      return this.para.type === 'confirm'
    },
    hideSelf () {
      this.$emit('on-cancel')
    },
    confirmFunc () {
      this.confirmFn()
      this.$emit('on-confirm')
    }
  }
}
</script>
