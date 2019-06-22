<template>
  <li class="body-li">
    <a :href="url">
      <i class="material-icons">
        {{ icon }}
      </i>
      <span>{{ text }}</span>
    </a>
  </li>
</template>

<script>
export default {
  name: 'ListMenu',

  props: {
    url: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
</style>
