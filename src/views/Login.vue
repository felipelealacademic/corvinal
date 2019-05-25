<template>
  <div class="bg-utfpr-default">
    <div class="container position-absolute" style="top: 25px; left: 50px;">
      <a class="d-none d-sm-block" href="/login">
        <img width="120" src="/images/logo-utfpr-white.png" alt="">
      </a>
    </div>
    <div class="container">
      <div class="row adjust-top justify-content-center align-items-center">
        <div class="col-11 col-md-8 col-lg-6 card card-custom p-5">
          <div class="row justify-content-center">
            <img class="pb-5 pt-4 img-fluid" src="/images/icon-login.png" alt="">
          </div>
          <div class="row justify-content-center">
            <div class="col-12 col-md-10">
              <form>
                <input type="hidden">
                <div class="form-group">
                  <div class="has-float-label">
                    <input id="email" type="email" v-model="email"
                      class="rounded" placeholder="email@utfpr.edu.br"
                    />
                    <label for="email">Email</label>
                  </div>
                </div>
                <div class="form-group">
                  <div class="has-float-label">
                    <input id="senha" type="password" v-model="password"
                      class="rounded" placeholder=" "/>
                    <label for="senha">Senha</label>
                  </div>
                </div>
                <div class="form-row text-micro-copy">
                  <div class="mr-auto form-check mx-2">
                    <input type="checkbox" class="form-check-input" id="checkbox-remember">
                    <label class="form-check-label" for="checkbox-remember">Lembrar-me</label>
                  </div>
                  <div class="ml-auto mx-2">
                    <a href="/register">ainda não tenho cadastro</a>
                  </div>
                </div>
                <div class="text-center pt-5 mt-3">
                  <button type="submit" @click="postLogin()"
                    class="btn btn-warning weight-fixed text-white">
                    LOGIN
                  </button>
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
import axios from 'axios';

export default {

  data() {
    return {
      data: {
        email: '',
        password: '',
      },
    };
  },

  methods: {
    postLogin() {
      axios.post('localhost:3000/login/post', { data: this.data })
        .then(response => console.log('logado com sucesso', response))
        .catch(e => console.log(e));
    },
  },
};
</script>

<style lang="scss">
</style>
