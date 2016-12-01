<template>
  <div>
    <group title="demo list">
      <div class="demolist">
        <cell url="/demo/button" title="button">
          <i class="iconfont" slot="left-icon">&#xe62d;</i>
          <i class="iconfont" slot="right-icon">&#xe93d;</i>
        </cell>
        <cell url="/demo/input" title="input">
          <i class="iconfont" slot="left-icon">&#xe617;</i>
          <i class="iconfont" slot="right-icon">&#xe93d;</i>
        </cell>
        <cell url="/demo/alert" title="alert">
          <i class="iconfont" slot="left-icon">&#xe636;</i>
          <i class="iconfont" slot="right-icon">&#xe93d;</i>
        </cell>
        <cell url="/demo/switch" title="switch">
          <i class="iconfont" slot="left-icon">&#xe629;</i>
          <i class="iconfont" slot="right-icon">&#xe93d;</i>
        </cell>
        <cell url="/demo/card" title="card">
          <i class="iconfont" slot="left-icon">&#xe93f;</i>
          <i class="iconfont" slot="right-icon">&#xe93d;</i>
        </cell>
        <cell url="/demo/tab" title="tab">
          <i class="iconfont" slot="left-icon">&#xe60b;</i>
          <i class="iconfont" slot="right-icon">&#xe93d;</i>
        </cell>
        <cell url="/demo/cell" title="cell">
          <i class="iconfont" slot="left-icon">&#xe665;</i>
          <i class="iconfont" slot="right-icon">&#xe93d;</i>
        </cell>
      </div>
    </group>
  </div>
</template>
<script>
import Group from '../components/Group/index.vue'
import Cell from '../components/Cell/index.vue'

export default {
  components: {
    Group,
    Cell
  }
}
</script>
<style>
@import '../styles/demo/demo.css'
</style>

