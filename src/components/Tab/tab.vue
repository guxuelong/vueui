<template>
  <div class="m-tab">
    <div class="m-tab__slot">
      <tab-item
        v-for="(text, i) in conArray"
        v-bind:text="text"
        :nowIndex = "nowIndex"
        v-bind:index="i"
        :class="{ m_item_select: i === nowIndex - 1}"
      >
      </tab-item>
    </div>
    <div class="m-tab__ft">
      <div class="m-tab__line" :style="{width: elWidth, display: elDisplay, left: leftOffset}"></div>
    </div>
  </div>
</template>
<script>
import TabItem from './tab-item.vue'

export default {
  methods: {
  },
  components: {
    TabItem
  },
  props: {
    index: Number,
    conArray: Array
  },
  data () {
    return {
      elWidth: 0,
      elDisplay: 'none',
      leftOffset: 0,
      nowIndex: this.index ? this.index : 1
    }
  },
  computed: {
  },
  mounted () {
    const _this = this
    var index
    this.$children.map((tab, i) => {
      const _tab = tab
      tab.$on('tab-click', () => {
        index = _this.$children.indexOf(_tab)
        this.nowIndex = index + 1
        const childNum = this.$children.length
        this.leftOffset = (100 / childNum * index) + '%'
        this.display = 'block'
      })
    })

    const childNum = this.$children.length
    this.leftOffset = (100 / childNum * (this.nowIndex - 1)) + '%'
    this.elWidth = (100 / childNum) + '%'
    this.elDisplay = 'block'
  }
}
</script>
