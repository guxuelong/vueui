import Vue from 'vue'
import Alert from '../../../src/components/Alert/index.vue'

describe('Alert.vue', () => {
  const elm = document.createElement('div')
  elm.id = 'app' + '01'
  document.body.appendChild(elm)
  const vm = new Vue({
    el: '#app01',
    components: {Alert},
    template: `<Alert :para="para" 
                          @on-cancel="onCancel"
                          />`,
    data () {
      return {
        para: {
          content: '内容我是内容',
          title: '标题我是标题',
          type: 'alert',
          confirm: '确定辣',
          cancel: '取消辣',
          close: true,
          showStatus: true,
        }
      }
    },
    methods: {
      onCancel () {
        this.para.showStatus = false
      }
    }
  })
  it('set showStatus true,el show be visible', () => {
    expect(vm.$el.style.display).to.not.equal('none')
  })
  it('click close button, el should be hidden', () => {
    vm.$el.querySelector('.m-alert__close').click()
    setTimeout(function () {
      expect(vm.$el.style.display).to.equal('none')
    }, 1000)
  })
})
