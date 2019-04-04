<template>
  <div class="container text-center">
    <div class="row justify-content-center">
      <img src="https://cdn.mensagenscomamor.com/content/images/m000486780.jpg?v=1" alt>
    </div>
    <div class="row justify-content-center">
      <h1 class="display-1 mt-5">LEU PQ É GAY</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},

  mounted() {
    this.$http
      .get("http://localhost:3000/user/get")
      .then(response => console.log(response));

    this.$http
      .post("http://localhost:3000/user/post", { nome: "Alisson" })
      .then(response => console.log(response));
  }
};
</script>

<style lang="scss">
</style>
