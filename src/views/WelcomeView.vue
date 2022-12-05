<template>
  <div class="wrapper">
    <div class="wrapper__logo">
      <LogoComponent :is-logo-orange="false" font-size="5rem" />
    </div>
    <div class="wrapper__buttons">
      <button class="wrapper__button">Login</button>
      <button class="wrapper__button">Register</button>
    </div>
  </div>
</template>

<script>
import LogoComponent from "@/components/LogoComponent.vue";

export default {
  name: "WelcomeView",
  components: { LogoComponent },
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;

  &__logo {
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $orange-color;
  }

  &__buttons {
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  &__button {
    padding: 1.1rem;
    width: 70%;
    font-size: 1.5rem;
    font-weight: $semiBold-weight;
    border: 1px solid $black-color;
    border-radius: 5px;
  }
}
</style>
