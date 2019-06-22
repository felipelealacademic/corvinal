<template>
  <div class="main-sidebar">
    <div>
    </div>
    <div class="sidebar">
      <!-- <div class="user-panel"></div> -->
      <ul class="sidebar-menu tree">
        <li class="header">
          <img class="img-fluid px-3" src="/images/logo-utfpr-default.png" alt="">
        </li>
        <list-menu url="#" icon="account_balance" text="Efetuar Pedidos"/>
        <list-menu url="#" icon="account_balance" text="Registro de Pedidos"/>
        <!-- <list-menu url="#" icon="account_balance" text="Testeasdasd"/>
        <list-menu url="#" icon="account_balance" text="Testeasda as"/> -->
      </ul>
    </div>
  </div>
</template>

<script>
import ListMenu from '@/components/dashboard/ListMenu.vue';

export default {
  name: 'Sidebar',

  components: {
    ListMenu,
  },
};
</script>

<style lang="scss">
  .main-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 30px;
    padding-bottom: 30px;
    min-height: 100%;
    height: 100vh;
    width: 230px;
    z-index: 810;
    background: #FFF;

    // shadow
    -webkit-box-shadow: 2px 2px 13px -2px rgba(97,99,102,0.66);
    -moz-box-shadow: 2px 2px 13px -2px rgba(97,99,102,0.66);
    box-shadow: 2px 2px 13px -2px rgba(97,99,102,0.66);

    // transitions
    -webkit-transition: -webkit-transform .3s ease-in-out,width .3s ease-in-out;
    -moz-animation: -moz-transform .3s ease-in-out,width .3s ease-in-out;
    -o-transition: -o-transform .3s ease-in-out,width .3s ease-in-out;
    transition: transform .3s ease-in-out,width .3s ease-in-out;
  }

  .sidebar {
    height: auto;
    padding-bottom: 10px;
    display: block;
  }

  ul {
    margin-top: 0;
    margin-bottom: 10px;
  }

  .sidebar-menu {
    white-space: nowrap;
    overflow: hidden;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .sidebar-menu li.header {
    padding: 15px 25px 30px 15px;
    font-size: 12px;
  }

  .sidebar-menu > li.header {
    overflow: hidden;
    text-overflow: clip;
    white-space: nowrap;
  }

  .sidebar-menu>li {
    position: relative;
    margin: 0;
    padding: 0;
  }

  .sidebar-menu li a:hover {
    background-color: #edededc4;
  }

  .sidebar-menu>li>a {
    position: relative;
    padding: 12px 12px 12px 15px;
    // display: block;
    display: flex;
    // justify-content: space-evenly;
    color: #000;
    font-size: 16px;
  }

  .sidebar-menu>li>a>i{
    padding-right: 25px;
  }

  a {
    text-decoration: none !important;
  }

  .sidebar-menu>li>a>.fa {
    width: 20px;
  }

  .bar-active {
    width: 2px;
    height: auto;
    background: red;
  }
</style>
