<template>
  <span>
    <div class="container py-4">
      <div class="row justify-content-center align-content-center">
        <div class="col-12">
          <div class="card shadow-border" style="min-height: 250px;">
            <div class="card-body">
              <div class="container">
                <div class="row justify-content-around mb-3 align-content-center">
                  <div class="mr-auto">
                    <h5 class="card-title">Selecione os pedidos</h5>
                  </div>
                  <!-- <div class="ml-auto">
                    <button type="submit" @click="newOrder()"
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
                <div class="row justify-content-around align-content-center">
                  <div class="mr-auto">
                    <p class="text-muted m-0">Items selecionados: 0</p>
                  </div>
                  <div class="ml-auto">
                    <button 
                      class="btn text-muted">
                      Cancelar
                    </button>
                    <button @click="newOrder()"
                      class="btn btn-light text-white">
                      Novo Produto
                    </button>
                    <button type="submit"
                      class="btn btn-warning text-white ml-3">
                      Confirmar Pedido
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
// import Sidebar from '@/components/dashboard/Sidebar.vue'
import SelectItems from '@/components/dashboard/SelectItems.vue'

export default {
  name: 'Dashboard',

  components: {
    SelectItems,
  },
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
