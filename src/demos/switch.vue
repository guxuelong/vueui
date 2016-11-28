<template>
  <div>
    <group title="switch">
      <div>
        <m-switch>lala</m-switch>
        <m-switch :checkedStatus="true">lala</m-switch>
      </div>
    </group>
    <group title="switch disabled">
      <div>
        <m-switch :disabled="true">lala</m-switch>
        <m-switch :checkedStatus="true" :disabled="true">lala</m-switch>
      </div>
    </group>
  </div>
</template>
<script>
import MSwitch from '../components/Switch/index.vue'
import Group from '../components/Group/index.vue'

export default {
  components: {
    MSwitch,
    Group
  }
}
</script>
