<template>
  <span>
    <div class="container py-4">
      <div class="row justify-content-center align-content-center">
        <div class="col-12">
          <div class="card shadow-border" style="min-height: 250px;">
            <div class="card-body">
              <div class="container">
                <div class="row justify-content-around mb-3 align-content-center">
                  <div class="mr-auto px-2">
                    <h5 class="card-title">Selecione os pedidos</h5>
                  </div>
                  <!-- <div class="ml-auto">
                    <button type="submit" @click="setOrder()"
                      class="btn btn-light text-white">
                      Novo Produto
                    </button>
                    <button type="submit"
                      class="btn btn-warning text-white ml-3">
                      Confirmar Pedido
                    </button>
                  </div> -->
                </div>
              </div>
              <select-items
                placeholder="Informe o nome ou código do pedido desejado" 
              />

              <div class="container mt-5">
                <div class="row justify-content-around align-content-center px-2">
                  <div class="mr-auto">
                    <p class="text-muted m-0">Items selecionados: 0</p>
                  </div>
                  <div class="ml-auto">
                    <!-- <button 
                      class="btn text-muted">
                      Cancelar
                    </button> -->
                    <button 
                      class="btn btn-secondary text-white">
                      Cancelar
                    </button>
                    <button type="submit"
                      class="btn btn-warning text-white ml-3">
                      Enviar
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </span>
</template>

<script>
  import axios from "axios";
// import Sidebar from '@/components/dashboard/Sidebar.vue'
import SelectItems from '@/components/dashboard/SelectItems.vue'

export default {

  name: 'Dashboard',

  components: {
    SelectItems,
  },
  methods:{
    setOrder(){
   
  },
  newOrder(){
    //exemplo de como deve se enviar os dados
 let data = [
   {
      idProduct : 1,
      amount : 47,
      coordenacao: '5'
    },
    {
      idProduct : 1,
      amount : 47,
      coordenacao: '5'
    }
 ]
              axios
            .post("http://localhost:3000/order/set", { data:data })
            .then(response => {
              console.log(response.data)
              if (response.data.status === 0) {
                this.data = {};
                this.cod_unepe = "";
// Mostrar mensagem de q deu certo o pedido
              } else {
                this.erro = true;
                this.erroMessage = response.data.message;
              }
            })  },
  }
  
};
</script>

<style lang="scss">
.card.shadow-border {
  border: none;
  -webkit-box-shadow: 2px 2px 13px -2px rgba(97, 99, 102, 0.295);
  -moz-box-shadow: 2px 2px 13px -2px rgba(97, 99, 102, 0.295);
  box-shadow: 2px 2px 13px -2px rgba(97, 99, 102, 0.295);
}
</style>
