<template>
  <div>
    <div class="m-footer">
      <router-link to='/' >首页</router-link>
      <router-link to='/demolist' >演示</router-link>
      <router-link to='/about' >关于</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.m-footer {
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 80px;
  background-color: #fff;
  z-index: 10;
  padding-top: 20px;
  display: flex;
  justify-content: space-around;
  text-align: center;
  a {
    width: 30%;
    display: inline-block;
    height: 44px;
  }
}
</style>
