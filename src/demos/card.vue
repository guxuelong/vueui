<template>
   <card>
     <div slot="header">我是卡片标题</div>
     <div>
       <p>我是卡片内容</p>
       <p>我是卡片内容</p>
       <p>我是卡片内容</p>
     </div>
   </card>
</template>
<script>
import Card from '../components/Card/index.vue'

export default {
  components: {
    Card
  },
  props: {
  }
}
</script>
