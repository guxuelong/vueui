<template>
  <div>
    <div class="alert-button" @click="alertFunc">
      <m-button type="success" text="Alert 弹框" :plain="true"></m-button>
    </div>
    <div >
      <alert :para="paraObj" @on-cancel="onCancel"></alert>
    </div>
    <div class="alert-button" @click="alertFunc1">
      <m-button type="success" text="Confirm 弹框" :plain="true"></m-button>
    </div>
    <div >
      <alert :para="paraObj1" @on-cancel="onCancel1"></alert>
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
      paraObj: {
        content: '内容我是内容',
        title: '标题我是标题',
        type: 'alert',
        confirm: '确定辣',
        cancel: '取消辣',
        close: true,
        showStatus: false,
        confirmHandler: function () {
          window.alert('I am alert')
        }
      },
      paraObj1: {
        content: '内容我是第二个',
        title: '标题我是标题啦啦',
        type: 'confirm',
        confirm: '',
        cancel: '',
        close: true,
        showStatus: false,
        confirmHandler: function () {
          window.alert('I am confirm')
        }
      }
    }
  },
  methods: {
    alertFunc () {
      this.paraObj.showStatus = true
    },
    alertFunc1 () {
      this.paraObj1.showStatus = true
    },
    onCancel () {
      this.paraObj.showStatus = false
    },
    onCancel1 () {
      this.paraObj1.showStatus = false
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
