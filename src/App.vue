<template>
  <div id="app">
    <span v-if="show">
      <sidebar></sidebar>
    </span>

    <div :class="show ? 'adjust-container' : ''">
      <div :class="show ?'bar-loader' : ''"></div>

      <div v-if="show" class="nav-dash">
        <div class="container">
          <div class="row py-2 justify-content-center align-items-center">
            <div class="col-6 ml-auto">
              <h1 class="h5 text-black m-0">Title Page</h1>
            </div>
            <div class="col-6 mr-auto text-right">
              <a class="text-black m-0" href="/login">Sair</a>
            </div>
          </div>
        </div>
      </div>

      <router-view/>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/dashboard/Sidebar.vue";
// import FooterVue from '@/components/FooterVue.vue';

export default {
  name: "App",
  components: {
    Sidebar
  },

  data() {
    return {
      show: false
    };
  },
  mounted() {
    this.validRoute();
  },
  watch: {
    $route(to, from) {
      this.validRoute();
      if (!localStorage.getItem("idUser")) {
        console.log("aqui");
      }
    }
  },
  methods: {
    validRoute() {
      console.log(window.location.href.indexOf("register"));
      if (
        window.location.href.indexOf("login") !== -1 ||
        window.location.href.indexOf("register") !== -1 ||
        window.location.href === "http://172.16.93.18:8080/"
      ) {
        this.show = false;
      } else {
        console.log("Else");

        this.show = true;
      }
    }
  }
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
  background: #ffffff;
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
