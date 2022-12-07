<template>
  <h2 class="header">{{ text }}</h2>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding: 3rem 0 2rem 0;
  text-align: center;
  font-size: 2.5rem;
  font-weight: $bold-weight;
}
</style>
