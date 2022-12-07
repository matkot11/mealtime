<template>
  <AuthLayout>
    <HeaderComponent text="Register" />
    <form class="form">
      <label class="form__label">
        Full name *
        <input
          v-model="authCredentials.name"
          class="form__input"
          type="email"
          required
        />
      </label>
      <label class="form__label">
        Mail *
        <input
          v-model="authCredentials.mail"
          class="form__input"
          type="email"
          required
        />
      </label>
      <label class="form__label">
        Password *
        <input
          v-model="authCredentials.password"
          class="form__input"
          type="password"
          required
        />
      </label>
      <label class="form__label">
        Repeat password *
        <input
          v-model="authCredentials.repeatPassword"
          class="form__input"
          type="password"
          required
        />
      </label>
      <ButtonComponent
        @click.prevent="handleSubmit"
        text="Register"
        type="submit"
      />
      <RouterLink class="form__login" to="/login">Login</RouterLink>
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
.form {
  &__login {
    margin-top: 2rem;
    color: #434343;
    font-size: 1.3rem;
  }
}
</style>
