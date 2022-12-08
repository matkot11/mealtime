<template>
  <AuthLayout>
    <HeaderComponent text="Register" />
    <form class="auth">
      <label class="auth__label">
        Full name *
        <input
          v-model="authCredentials.name"
          class="auth__input"
          type="email"
        />
      </label>
      <label class="auth__label">
        Email *
        <input
          v-model="authCredentials.mail"
          class="auth__input"
          type="email"
        />
      </label>
      <label class="auth__label">
        Password *
        <input
          v-model="authCredentials.password"
          class="auth__input"
          type="password"
        />
      </label>
      <label class="auth__label">
        Repeat password *
        <input
          v-model="authCredentials.repeatPassword"
          class="auth__input"
          type="password"
        />
      </label>
      <ButtonComponent
        @click.prevent="handleSubmit"
        text="Register"
        type="submit"
      />
      <RouterLink class="auth__login" to="/login">Login</RouterLink>
      <ErrorComponent :text="errorMessage" />
    </form>
  </AuthLayout>
</template>

<script>
import AuthLayout from "@/layout/AuthLayout.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import ErrorComponent from "@/components/ErrorComponent.vue";
import { useAuthStore } from "@/store/useAuthStore";
import { mapActions, mapStores, mapState } from "pinia";

export default {
  data() {
    return {
      authCredentials: {
        name: "",
        mail: "",
        password: "",
        repeatPassword: "",
      },
    };
  },
  computed: {
    ...mapStores(useAuthStore),
    ...mapState(useAuthStore, ["errorMessage"]),
  },
  methods: {
    ...mapActions(useAuthStore, ["signup", "setErrorMessage"]),
    async handleSubmit() {
      if (!this.authCredentials.name) {
        this.setErrorMessage("Please enter your full name");
        return;
      }

      if (!this.authCredentials.mail) {
        this.setErrorMessage("Please enter your mail");
        return;
      }

      if (
        !this.authCredentials.password ||
        !this.authCredentials.repeatPassword
      ) {
        this.setErrorMessage("Please enter password");
        return;
      }

      if (
        this.authCredentials.password !== this.authCredentials.repeatPassword
      ) {
        this.setErrorMessage("Passwords do not match");
        return;
      }

      await this.signup(
        this.authCredentials.name,
        this.authCredentials.mail,
        this.authCredentials.password
      );
    },
  },
  components: { ErrorComponent, ButtonComponent, HeaderComponent, AuthLayout },
};
</script>

<style lang="scss" scoped>
.auth {
  &__login {
    margin-top: 2rem;
    color: #434343;
    font-size: 1.3rem;
  }
}
</style>
