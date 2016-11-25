<template>
  <div id="app">
    <img src="./assets/logo.png">
    <m-bottom></m-bottom>
    <router-view></router-view>
  </div>
</template>

<script>
import MBottom from './components/MBottom'

export default {
  name: 'app',
  components: {
    MBottom
  },
  data () {
    return {
      haha: 'yaa',
      size: 'large'
    }
  }
}
</script>

<style lang="css">
@import "styles/main.css";
html {
  background-color: #eee;
}
html,body,p,input {
  margin: 0px;
  padding: 0px;
}
ul {
  list-style: none;
}
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  padding-bottom: 120px;
}

</style>
