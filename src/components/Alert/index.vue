<template>
  <div class="m-alert-container" v-show="para.showStatus">
    <div class="m-modal"></div>
    <div class="m-alert">
      <div class="m-alert__header">
        <div class="m-alert__title">{{para.title}}</div>
        <div class="m-alert__close" @click="hideSelf" v-if="showClose">关闭</div>
      </div>
      <div class="m-alert__body">
        <div class="m-alert__content">{{para.content}}</div>
      </div>
      <div class="m-alert__footer">
        <div v-if="confirmType()">
          <div class="m-alert__cancel" @click="hideSelf">{{cancelDes}}</div>
        </div>
        <div class="m-alert__confirm" @click="confirmFunc">{{confirmDes}}</div>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  props: {
    para: Object
  },
  data () {
    return {
      confirmDes: this.para.confirm ? this.para.confirm : '确定',
      cancelDes: this.para.cancel ? this.para.cancel : '取消',
      showClose: !!this.para.close
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
      typeof this.para.confirmHandler === 'function' ? this.para.confirmHandler() : ''
      this.$emit('on-cancel')
    }
  }
}
</script>
