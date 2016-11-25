<template>
  <div>
    <group title="switch">
      <div>
        <m-switch>lala</m-switch>
        <m-switch :checked="true">lala</m-switch>
      </div>
    </group>
    <group title="switch disabled">
      <div>
        <m-switch :disabled="true">lala</m-switch>
        <m-switch :checked="true" :disabled="true">lala</m-switch>
      </div>
    </group>
  </div>
</template>
<script>
import MSwitch from '../components/Switch.vue'
import Group from '../components/Group.vue'

export default {
  components: {
    MSwitch,
    Group
  }
}
</script>
