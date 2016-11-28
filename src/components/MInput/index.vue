<template>
  <div class="m-cell m-input" >
    <div class="m-input__des">
      请输入验证码
    </div>
    <div class="m-input__warpper">
      <input class="m-input__inner"
             :autocomplete="autocomplete"
             :autocapitalize="autocapitalize"
             :autocorrect="autocorrect"
             :spellcheck="spellcheck"
             :placeholder="placeholder"
             :readonly="readonly"
             v-model="inputValue"
             @blur="blur"
             @focus="focus"
      >
    </div>
    <div :class="verifyClass">
      <span class="m-input--clear" v-show="showClear && focused && inputValue && !readonly" @click="clear">✖️</span>
      <span class="m-input--warn" v-show="!valid">!</span>
      <span class="m-input--success"></span>
      <div class="m-input-right-slot">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>
<script>
import isEmail from 'validator/lib/isEmail'
import isMobilePhone from 'validator/lib/isMobilePhone'

const validators = {
  'email': {
    fn: isEmail,
    msg: '邮箱格式'
  },
  'china-mobile': {
    fn (str) {
      return isMobilePhone(str, 'zh-CN')
    },
    msg: '手机号码'
  }
}
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    placeholder: String,
    value: [String, Number],
    name: String,
    readonly: {
      type: Boolean,
      default: false
    },
    keyboard: String,
    inlineDesc: String,
    isType: String,
    min: Number,
    max: Number,
    showClear: {
      type: Boolean,
      default: true
    },
    equalWith: String,
    type: {
      type: String,
      default: 'text'
    },
    required: {
      type: Boolean,
      default: false
    },
    textAlign: String,
    autocomplete: 'off',
    autocapitalize: 'off',
    autocorrect: 'off',
    spellcheck: 'false'
  },
  data () {
    return {
      clicked: false,
      buttonText: '获取验证码',
      inputValue: this.value,
      valid: true,
      focused: false,
      inputClicked: false
    }
  },
  computed: {
    verifyClass () {
      return [
        'm-input__ft',
        this.clicked ? 'm-input__ft--gray' : ''
      ]
    }
  },
  methods: {
    clear () {
      this.inputValue = ''
    },
    focus () {
      this.focused = true
      this.inputClicked = true
    },
    blur () {
      this.focused = false
      this.validate()
    },
    validate () {
      const validator = validators[this.isType]
      this.required ? this.inputValue ? this.valid = true : this.valid = false : this.valid = true
      if (validator) {
        this.valid = validator[ 'fn' ](this.inputValue)
      }
      if (this.min && !this.max) {
        this.valid = (this.inputValue + '').length >= this.min
      }
      if (this.max && !this.min) {
        this.valid = (this.inputValue + '').length <= this.max
      }
      if (this.max && this.min) {
        this.valid = (this.inputValue + '').length >= this.min && (this.inputValue + '').length <= this.max
      }
    }
  },
  watch: {
  }
}
</script>

