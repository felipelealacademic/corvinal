<template>
  <span>
    <div class="row mt-4">
      <div class="col-5 d-flex">
        <div class="col-10 pl-1">
          <h6 class="card-subtitle mb-2">{{ item_name }}</h6>
          <p class="card-text text-muted">{{ item_description }}</p>
        </div>
        <div class="col-2 p-0 m-0">
          <span class="badge badge-success">{{ item_id }}</span>
        </div>
      </div>

      <div class="col-7 d-flex">

        <div class="col-4">
          <div class="form-group">
            <div class="has-float-label">
              <input id="unidade" type="text" :value="item_unit"
                class="rounded" placeholder=" " disabled />
              <label for="unidade">Unidade</label>
            </div>
          </div>
        </div>

        <div class="col-4">
          <div class="form-group">
            <div class="has-float-label">
              <input id="qtde" type="number" v-model="item_qtde"
                class="rounded" placeholder=" "/>
              <label for="qtde">Qtde</label>
            </div>
          </div>
        </div>

        <div class="col-4">
          <div class="form-group">
            <div class="has-float-label">
              <input id="coordenacao" type="text" v-model="item_coord"
                class="rounded" placeholder=" "/>
              <label for="coordenacao">Coordenação</label>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    <hr>
  </span>
</template>

<script>
export default {
  name: 'ItemsSelected',

  props: ['item_name', 'item_description', 'item_id', 'item_unit'],

  data() {
    return {
      item_qtde: 0,
      item_coord: '',
    };
  },

}
</script>

<style>

</style>
