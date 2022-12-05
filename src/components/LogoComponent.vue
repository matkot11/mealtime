<template>
  <RouterLink to="/" class="logo__text"
    ><span :class="isLogoOrange ? 'logo__text-orange' : 'logo__text-white'"
      >M</span
    >EALTIME
  </RouterLink>
</template>

<script>
export default {
  props: {
    isLogoOrange: {
      type: Boolean,
      default: true,
    },
    fontSize: {
      type: String,
      default: "3rem",
    },
  },
};
</script>

<style lang="scss" scoped>
.logo__text {
  font-family: "Nanum Brush Script", cursive;
  font-size: v-bind(fontSize);
  z-index: 10;

  &-orange {
    color: $orange-color;
  }

  &-white {
    color: $white-color;
  }
}
</style>
