<template>
  <h1>{{ $store.state.name }}</h1>
  <router-link to="/login">login</router-link>
  <router-link to="/tableDemo">tableDemo</router-link>
  <router-link to="/piniaDemo">piniaDemo</router-link>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {}
})
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
