<template>
  <p class="error">{{ text }}</p>
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
.error {
  margin-top: 2rem;
  text-align: center;
  font-size: 1.4rem;
  color: #ed0000;
}
</style>
