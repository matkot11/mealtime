<template>
  <div class="auth-wrapper">
    <LogoComponent />
    <slot></slot>
  </div>
</template>

<script>
import LogoComponent from "@/components/LogoComponent.vue";

export default {
  components: { LogoComponent },
};
</script>

<style lang="scss">
.auth {
  display: flex;
  flex-direction: column;
  align-items: center;

  &-wrapper {
    padding: 1.5rem;
  }

  &__label {
    @include label-styles;
  }

  &__input {
    @include input-styles;
  }
}
</style>
