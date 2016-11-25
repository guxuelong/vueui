<template>
  <div>
    <group title="three">
      <m-input class="m-input--code" value="lalala">
        <m-button slot="right" text="获取验证码"></m-button>
      </m-input>
      <m-input class="m-input--code" placeholder="I am placeholder.">
        <img slot="right" src="http://weui.github.io/weui/images/vcode.jpg">
      </m-input>
      <m-input placeholder="长度2-5" :min="2" :max="5" :required="true"></m-input>
    </group>
    <group title="two">
      <m-input :required="true"></m-input>
      <m-input is-type="china-mobile" placeholder="请填写手机号码"></m-input>
    </group>
    <group title="one">
      <m-input is-type="email" placeholder="请填写邮箱"></m-input>
    </group>
  </div>
</template>
<script>
import MInput from '../components/MInput'
import MButton from '../components/MButton'
import Group from '../components/Group'

export default {
  components: {
    MInput,
    MButton,
    Group
  },
  methods: {
    getCode () {
    }
  }
}
</script>
