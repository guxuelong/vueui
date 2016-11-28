<template>
  <div>
    <div class="alert-button" @click="alertFunc">
      <m-button type="success" text="Alert 弹框" :plain="true"></m-button>
    </div>
    <div >
      <alert :confirmFn="confirmFn" @on-confirm="onConfirm" @on-cancel="onCancel" :show="alertShow" :para="{content: '内容我是内容我是内容啦啦啦啦啦啦啦啦啦', title: '标题我是标题',type: 'alert'}"></alert>
    </div>
    <div class="alert-button" @click="confirmFunc">
      <m-button type="success" text="Confirm 弹框" :plain="true"></m-button>
    </div>
    <div >
      <alert :confirmFn="confirmFn" @on-confirm="onConfirm1" @on-cancel="onCancel1" :show="confirmShow" :para="{content: '内容我是内容我是内容啦啦啦啦啦啦啦啦啦', title: '标题我是标题',type: 'confirm'}"></alert>
    </div>
  </div>
</template>
<script>
import Alert from '../components/Alert/index.vue'
import MButton from '../components/MButton/index.vue'

export default {
  components: {
    Alert,
    MButton
  },
  data () {
    return {
      alertShow: false,
      confirmShow: false
    }
  },
  methods: {
    alertFunc () {
      this.alertShow = !this.alertShow
    },
    confirmFunc () {
      this.confirmShow = !this.confirmShow
    },
    onCancel () {
      this.alertShow = false
    },
    onConfirm () {
      this.alertShow = false
    },
    onCancel1 () {
      this.confirmShow = false
    },
    onConfirm1 () {
      this.confirmShow = false
    },
    confirmFn () {
      window.alert('hello')
    }
  }
}
</script>
<style scoped>
.alert-button {
  width: 35%;
  margin-top: 40px;
  height: 60px;
}
</style>
