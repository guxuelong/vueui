<template>
  <div>
    <group title="娱乐">
      <tab :index="2" :conArray="['电影', '美食', '音乐']">
      </tab>
    </group>
    <group title="阅读">
      <tab :conArray="['人文', '历史', '小说', '传记']">
      </tab>
    </group>
  </div>
</template>
<script>
import Group from '../components/Group/index.vue'
import Tab from '../components/Tab/tab.vue'
import TabItem from '../components/Tab/tab-item.vue'

export default {
  components: {
    Tab,
    TabItem,
    Group
  }
}
</script>
