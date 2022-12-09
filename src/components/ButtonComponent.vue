<template>
  <button class="button">{{ text }}</button>
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
.button {
  z-index: 10;
  padding: 1rem 2rem;
  background-color: $orange-color;
  font-weight: $semiBold-weight;
  border-radius: 5px;
}
</style>
