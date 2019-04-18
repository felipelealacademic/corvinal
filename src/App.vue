<template>
  <div id="app">
    <!-- <sidebar :open="openSidebar" @toggle-sidebar="openSidebar = !openSidebar" /> -->
    <router-view  @toggle-sidebar="openSidebar = !openSidebar" />
    <!-- <footer-vue /> -->
  </div>
</template>

<script>
// import Sidebar from '@/components/Sidebar.vue';
// import FooterVue from '@/components/FooterVue.vue';

export default {
  name: 'App',
  // components: {
  //   Sidebar,
  //   FooterVue,
  // },
  data() {
    return {
      openSidebar: false,
    };
  },
};
</script>

<style lang="scss">
#app {
  position: relative;
}
</style>
