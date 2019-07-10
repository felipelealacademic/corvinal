<template>
  <div class="bg-utfpr-default">
    <div class="logo-utfpr">
      <a href="/login">
        <img width="120" src="/images/logo-utfpr-white.png" alt>
      </a>
    </div>

    <div class="container card-max-height">
      <div class="row justify-content-around">
        <form class="card col-8 p-5">
          <div class="form-row">
            <div class="has-float-label my-2 col-lg-12 col-md-12 col-sm-12">
              <input
                id="email"
                type="email"
                class="rounded"
                v-model="data.email"
                placeholder="email@example.com"
              >
              <label for="email">Email</label>
            </div>
          </div>
          <div class="form-row">
            <div class="has-float-label my-2 col-lg-6 col-md-6 col-sm-6">
              <input
                id="first-name"
                type="text"
                class="rounded"
                v-model="data.name"
                placeholder="Nome"
              >
              <label class="custom-float-left" for="first-name">Nome</label>
            </div>
            <div class="has-float-label my-2 col-lg-6 col-md-6 col-sm-6">
              <input
                id="last-name"
                type="text"
                class="rounded"
                v-model="data.lastname"
                placeholder="Sobrenome"
              >
              <label class="custom-float-left" for="last-name">Sobrenome</label>
            </div>
          </div>
          <div class="form-row">
            <div class="has-float-label my-2 col-lg-6 col-md-6 col-sm-6">
              <input
                id="cod-acad"
                type="text"
                class="rounded"
                v-model="data.cod_acad"
                placeholder="Código Acadêmico"
              >
              <label class="custom-float-left" for="cod-acad">Cód. Acadêmico</label>
            </div>
            <div class="has-float-label my-2 col-lg-6 col-md-6 col-sm-6">
              <div class="input-group">
                <input
                  id="cod-unepe"
                  type="text"
                  class="form-control rounded"
                  placeholder="Código UNEPE"
                  aria-describedby="cod-unepe"
                  v-model="cod_unepe"
                >
                <label for="cod-unepe">Cód. UNEPE</label>
                <div class="input-group-append">
                  <span
                    class="input-group-text custom-radius cursor-pointer"
                    id="cod-unepe"
                    @click="addUnepe"
                  >+</span>
                </div>
              </div>
            </div>
          </div>
          <div class="form-row">
            <div class="has-float-label my-2 col-lg-6 col-md-6 col-sm-6">
              <input
                id="password"
                type="password"
                class="rounded"
                v-model="data.password"
                placeholder="Senha"
              >
              <label class="custom-float-left" for="password">Senha</label>
            </div>
            <div class="has-float-label my-2 col-lg-6 col-md-6 col-sm-6">
              <input
                id="conf-password"
                type="password"
                class="rounded"
                v-model="data.confirm_password"
                placeholder="Confirmar Senha"
              >
              <label class="custom-float-left" for="conf-password">Confirmar Senha</label>
              <!-- <span class="text-danger" v-show="password_validate">ERROR</span> -->
            </div>
          <div class="text-center py-2 col-12">
            <button
              type
              @click.prevent="postRegister()"
              @submit.prevent="postRegister()"
              class="btn btn-warning text-white"
              style="width:100%;"
            >CADASTRAR</button>
          </div>
          </div>

          <div class="row justify-content-center">
            <div class="col-8">
              <hr>
            </div>
          </div>

          <!-- UNEPES SELECIONADAS -->
          <div
            v-show="erro"
            class="alert alert-danger text-center my-3"
            role="alert"
          >{{erroMessage}}</div>

          <span class="mb-3">UNEPEs selecionadas</span>

          <div class="form-row">
            <add-unepe
              class="col-4"
              v-for="(unepe, index) in data.unepes_selec"
              :key="index"
              :unepe="unepe.name"
              :index="index"
              @removeUnepe="removeUnepeSelec(index)"
            ></add-unepe>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AddUnepe from "@/components/register/AddUnepe.vue";

export default {
  name: "Register",

  components: {
    AddUnepe
  },

  data() {
    return {
      data: {
        email: "",
        name: "",
        lastname: "",
        cod_acad: "",
        unepes_selec: [],
        password: "",
        confirm_password: ""
      },
      cod_unepe: "",
      unepes: [
        // { 123: { nome: 'Cortes Bovinos' } },
        // { 456: { nome: 'Adubos Diversos' } },
        // { 789: { nome: 'Example Unepe' } },
        { cod: "123", name: "Cortes Bovinos" },
        { cod: "456", name: "Adubos Diversos" },
        { cod: "789", name: "Example Unepe" }
      ],

      // VALIDATE
      erro: false,
      erroMessage: ""
    };
  },

  computed: {},

  methods: {
    addUnepe() {
      let ok = true;
      if (this.data.unepes_selec.length) {
        this.data.unepes_selec.forEach(unep => {
          if (this.cod_unepe === unep.cod) {
            ok = false;
          }
        });
      }

      if (ok) {
        if (this.cod_unepe !== null && this.cod_unepe !== undefined) {
          this.unepes.forEach(e => {
            if (this.cod_unepe === e.cod) {
              this.erro = false;
              this.data.unepes_selec.push({ cod: e.cod, name: e.name });
            }
          });
        }
      } else {
        this.erro = true;
        this.erroMessage = "Código UNEP inválido!";
      }
    },

    removeUnepeSelec(index) {
      this.data.unepes_selec.splice(index, 1);
    },

    postRegister() {
      if (
        !this.data.email ||
        !this.data.name ||
        !this.data.lastname ||
        !this.data.cod_acad ||
        !this.data.unepes_selec.length ||
        !this.data.password ||
        this.data.password_validate
      ) {
        this.erro = true;
        this.erroMessage = "Campos obrigatórios não informados!";
      } else {
        if (this.data.password !== this.data.confirm_password) {
          this.erro = true;
          this.erroMessage = "Verifique se as senhas estão iguais!";
        } else {
          axios
            .post("http://localhost:3000/user/post", { data: this.data })
            .then(response => {
              if (response.data.message.status === 0) {
                this.data = {};
                this.cod_unepe = "";
                this.$router.push("Login");
              } else {
                this.erro = true;
                this.erroMessage = response.data.message;
              }
            })
            .catch(e => console.error(e));
        }
      }
    }
  }
};
</script>

<style lang="scss">
</style>
