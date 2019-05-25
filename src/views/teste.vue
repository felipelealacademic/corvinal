<template>
  <div class="bg-utfpr-default">
    <div class="logo-utfpr">
      <a href="/login">
        <img width="120" src="/images/logo-utfpr-white.png" alt>
      </a>
    </div>

    <div class="container">
      <div class="row justify-content-around card">
        <form class="pt-3">
          
            <div class="has-float-label col-lg-12 col-md-12 col-sm-12">
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
          
            <div class="has-float-label col-lg-12 col-md-6 col-sm-6">
              <input
                id="first-name"
                type="text"
                class="rounded"
                v-model="data.name"
                placeholder="Nome"
              >
              <label class="custom-float-left" for="first-name">Nome</label>
            </div>
            <div class="has-float-label col-lg-12 col-md-6 col-sm-6">
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
          
            <div class="has-float-label col-lg-12 col-md-6 col-sm-6">
              <input
                id="cod-acad"
                type="text"
                class="rounded"
                v-model="data.cod_acad"
                placeholder="Código Acadêmico"
              >
              <label class="custom-float-left" for="cod-acad">Cód. Acadêmico</label>
            </div>
            <div class="has-float-label col-lg-12 col-md-6 col-sm-6">
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
          
            <div class="has-float-label col-lg-12 col-md-6 col-sm-6">
              <input
                id="password"
                type="password"
                class="rounded"
                v-model="data.password"
                placeholder="Senha"
              >
              <label class="custom-float-left" for="password">Senha</label>
            </div>
            <div class="has-float-label col-lg-12 col-md-6 col-sm-6">
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
          </div>
          <div
            v-show="validate_unepe"
            class="alert alert-danger text-center"
            role="alert"
          >Código de UNEPE inválido!</div>
          <div class="row justify-content-center">
            <div class="col-8">
              <hr>
            </div>
          </div>
          <!-- UNEPES SELECIONADAS -->
          <span>UNEPEs selecionadas</span>
          
            <add-unepe
              v-for="(unepe, index) in data.unepes_selec"
              :key="unepe[0]"
              :unepe="unepe[1]"
              :index="index"
              @removeUnepe="removeUnepeSelec(index)"
            ></add-unepe>
          </div>
          <div class="text-center">
            <button
              type
              @click.prevent="postRegister()"
              @submit.prevent="postRegister()"
              class="btn btn-warning weight-fixed text-white"
            >CADASTRAR</button>
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
        { id: "123", nome: "Cortes Bovinos" },
        { id: "456", nome: "Adubos Diversos" },
        { id: "789", nome: "Example Unepe" }
      ],

      // VALIDATE
      password_validate: false,
      validate_unepe: false
    };
  },

  computed: {},

  methods: {
    addUnepe() {
      if (this.cod_unepe !== null && this.cod_unepe !== undefined) {
        this.unepes.forEach(e => {
          // if (this.unepes.has(e[this.cod_unepe])) {
          //   this.data.unepes_selec.push(this);
          // }
          if (this.cod_unepe === e.id) {
            this.validate_unepe = false;
            this.data.unepes_selec.push([e.id, e.nome]);
          } else {
            this.validate_unepe = true;
          }
        });
      }
    },

    removeUnepeSelec(index) {
      this.data.unepes_selec.slice(index, 0);
    },

    postRegister() {
      axios
        .post("localhost:3000/user/post", { data: this.data })
        .then(response => console.log("salvo com sucesso", response))
        .catch(e => console.log(e));
    }
  }
};
</script>

<style lang="scss">
</style>