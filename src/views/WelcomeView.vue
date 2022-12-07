<template>
  <div class="wrapper">
    <div class="wrapper__logo">
      <LogoComponent :is-logo-orange="false" font-size="5rem" />
    </div>
    <div class="wrapper__buttons">
      <RouterLink to="/login" class="wrapper__button">Login</RouterLink>
      <RouterLink to="/register" class="wrapper__button">Register</RouterLink>
    </div>
  </div>
</template>

<script>
import LogoComponent from "@/components/LogoComponent.vue";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";

export default {
  name: "WelcomeView",
  mounted() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.$router.push("/home");
      }
    });
  },
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
    justify-content: center;
  }

  &__button {
    padding: 1.1rem;
    width: 70%;
    text-align: center;
    font-size: 1.5rem;
    font-weight: $semiBold-weight;
    border: 1px solid $black-color;
    border-radius: 5px;

    &:not(:last-child) {
      margin-bottom: 4rem;
    }
  }
}
</style>
