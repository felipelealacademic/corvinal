<template>
  <div class="col-6 has-float-label">
    <div class="input-group mb-3">
      <input
        :id="'cod-unepe-'+index"
        type="text"
        class="form-control rounded"
        :aria-describedby="'cod-unepe-'+index"
        :value="unepe"
        disabled
      >
      <div class="input-group-append">
        <span
          class="input-group-text custom-radius cursor-pointer"
          :id="'cod-unepe-'+index"
          @click="removeUnepe(index)"
        >&times;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddUnepe",

  props: {
    unepe: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },

  methods: {
    removeUnepe(index) {
      this.$emit("removeUnepe", index);
    }
  }
};
</script>

<style>
</style>
