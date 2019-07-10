<template>
  <span>
    <div class="form-group" style="margin-bottom: 0 !important;">
      <div class="has-float-label">
        <!-- @focusout="dropdownShow = false" -->
        <input id="select_items" type="text"
          @focus="dropdownShow = true"
          v-model="filterItems"
          class="rounded" placeholder=" "/>
        <label for="select_items">{{ placeholder }}</label>
      </div>
    </div>
    <div v-show="dropdownShow" class="container">
      <div class="row justify-content-end">
        <div class="dropdownItems p-3">
          <div 
            class="item-list" 
            v-for="(item, index) in filteredItems"
            :key="index"
            @click="selectItem(item)"
          >
            {{ item.item_name }}
            <hr>
          </div>
        </div>
      </div>
    </div>

    <!-- ITEMS SELECTED -->
    <items-selected 
      v-for="(item, index) in selectedItems" :key="index"
      :item_id="item.id"
      :item_name="item.item_name"
      :item_description="item.description"
      :item_unit="item.unit"
    />
  </span>
</template>

<script>
import ItemsSelected from '@/components/dashboard/ItemsSelected.vue';

export default {
  name: 'SelectItems',
  
  components: {
    ItemsSelected,
  },

  props: ['labelText', 'placeholder'],

  data() {
    return {
      filterItems: '',
      dropdownShow: false,
      selectedItems: [],
      items: [
        {"id": "85808", "item_name": "COAGR"},
        {"id": "85809", "item_name": "COZOO"},
        {"id": "65810", "item_name": "COEBB"},
      ],
    };
  },

  computed: {
    filteredItems() {
      return this.items.filter(item => {
         return item.item_name.toLowerCase().indexOf(this.filterItems.toLowerCase()) > -1
      })
    },
  },

  methods: {
    // dropdownItems() {
      
    //   this.dropdownShow = true;
    // }
    selectItem(item) {
      console.log(item);
      this.selectedItems.push(item);

      this.dropdownShow = false;
      this.filterItems = '';
    },

    // newOrder() {
    //   this.selectedItems.push({});
    // }
  },
};
</script>

<style lang="scss">
.dropdownItems {
  position: absolute;
  width: 380px;
  /* min-width: 200px; */
  max-height: 250px;
  background-color: #FFF;
  overflow: auto;
  -webkit-box-shadow: 2px 2px 13px -2px rgba(97, 99, 102, 0.295);
  -moz-box-shadow: 2px 2px 13px -2px rgba(97, 99, 102, 0.295);
  box-shadow: 2px 2px 13px -2px rgba(97, 99, 102, 0.295);
  z-index: 999;
}
.item-list {
  cursor: pointer;
  &:hover {
    background-color: rgba(97, 99, 102, 0.295);
  }
}
</style>
