<template>
  <div id="app">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6">
          <div class="p-5 text-center">
            <router-link class="btn btn-link btn-sm mx-2" :to="'/'">
              Home
            </router-link>
            <router-link class="btn btn-link btn-sm mx-2" :to="'/users'">
              Users
            </router-link>
          </div>
          <router-view/>
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
