<template>
  <div class="bg-utfpr-default">
    <div class="logo-utfpr">
      <a href="/login">
        <img width="120" src="/images/logo-utfpr-white.png" alt>
      </a>
    </div>
    <div class="container">
      <div class="row adjust-top justify-content-center align-items-center">
        <div class="col-11 col-md-8 col-lg-6 card card-custom p-5">
          <div class="row justify-content-center">
            <img class="pb-5 pt-4 img-fluid" src="/images/icon-login.png" alt>
          </div>
          <div class="row justify-content-center">
            <div class="col-12 col-md-10">
              <form>
                <input type="hidden">
                <div class="form-group">
                  <div class="has-float-label">
                    <input
                      id="email"
                      type="email"
                      v-model="data.email"
                      class="rounded"
                      placeholder="email@utfpr.edu.br"
                    >
                    <label for="email">Email</label>
                  </div>
                </div>
                <div class="form-group">
                  <div class="has-float-label">
                    <input
                      id="senha"
                      type="password"
                      v-model="data.password"
                      class="rounded"
                      placeholder=" "
                    >
                    <label for="senha">Senha</label>
                  </div>
                </div>
                <div class="form-row text-micro-copy">
                  <div class="mr-auto form-check mx-2">
                    <input type="checkbox" class="form-check-input" id="checkbox-remember">
                    <label class="form-check-label" for="checkbox-remember">Lembrar-me</label>
                  </div>
                  <div class="ml-auto mx-2">
                    <a href="/register">Ainda não tenho cadastro</a>
                  </div>
                </div>
                <div
                  v-show="erro"
                  class="alert alert-danger text-center my-3"
                  role="alert"
                >{{erroMessage}}</div>
                <div class="text-center pt-1 mt-3">
                  <button
                    type
                    @click.prevent="postLogin()"
                    @submit.prevent="postLogin()"
                    class="btn btn-warning weight-fixed text-white"
                  >LOGIN</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      data: {
        email: "",
        password: ""
      },
      erro: false,
      erroMessage: ""
    };
  },

  methods: {
    postLogin() {
      if (this.data.email && this.data.password) {
        this.erro = false;
        this.erroMessage = "";
        axios
          .post("http://localhost:3000/user/sigin", { data: this.data })
          .then(response => {
            if (response.data.message.status === 0) {
              localStorage.setItem(
                "idUser",
                response.data.message.message[0].id
              );
              this.$router.push("Dashboard");
            } else {
              this.erro = true;
              this.erroMessage = response.data.message.message;
            }
          })
          .catch(e => console.error(e));
      } else {
        this.erro = true;
        this.erroMessage = "Campos obrigatórios não informados!";
      }
    }
  }
};
</script>

<style lang="scss">
</style>
