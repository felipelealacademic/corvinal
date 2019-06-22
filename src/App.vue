<template>
  <div id="app">
    
    <sidebar></sidebar>
    
    <div class="adjust-container">
      <div class="bar-loader"></div>
      
      <div class="nav-dash">
        <div class="container">
          <div class="row py-2 justify-content-center align-items-center">
            <div class="col-6 ml-auto">
              <h1 class="h5 text-white m-0">Title Page</h1>
            </div>
            <div class="col-6 mr-auto text-right">
              <a class="text-white m-0" href="#">Sair</a>
            </div>
          </div>
        </div>
      </div>

      <router-view/>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/dashboard/Sidebar.vue';
// import FooterVue from '@/components/FooterVue.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
  },
};
</script>

<style lang="scss">
// #app {}
.nav-dash {
  display: flex;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  background: #FFFFFF;
  // position: fixed;
}
.bar-loader {
  display: flex;
  width: 100%;
  height: 6px;
  margin: 0;
  padding: 0;
  background: #ffcc00;
  // position: fixed;
}
.adjust-container {
  padding-left: 230px;
}
.container {
  @media (min-width: 1200px) {
    max-width: 960px !important;
  }
}
</style>
