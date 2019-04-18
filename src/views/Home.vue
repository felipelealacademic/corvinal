<template>
  <div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  components: {},

  mounted() {
    axios
      .get('http://localhost:3000/user/get')
      .then(response => console.log(response));

    axios
      .post('http://localhost:3000/user/post', { nome: 'Alisson' })
      .then(response => console.log(response));
  },
};
</script>

<style lang="scss">
</style>
