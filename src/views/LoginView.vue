<template>
  <AuthLayout>
    <HeaderComponent text="Login" />
    <form class="auth">
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
      <ButtonComponent
        @click.prevent="handleSubmit"
        text="Login"
        type="submit"
      />
      <RouterLink class="auth__register" to="/register">Register</RouterLink>
    </form>
    <ErrorComponent :text="errorMessage" />
  </AuthLayout>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import AuthLayout from "@/layout/AuthLayout.vue";
import ErrorComponent from "@/components/ErrorComponent.vue";
import { mapActions, mapState, mapStores } from "pinia";
import { useAuthStore } from "@/store/useAuthStore";

export default {
  data() {
    return {
      authCredentials: {
        mail: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapStores(useAuthStore),
    ...mapState(useAuthStore, ["errorMessage"]),
  },
  methods: {
    ...mapActions(useAuthStore, ["login", "setErrorMessage"]),
    async handleSubmit() {
      if (!this.authCredentials.mail) {
        this.setErrorMessage("Please enter mail");
        return;
      }

      if (!this.authCredentials.password) {
        this.setErrorMessage("Please enter password");
        return;
      }

      await this.login(
        this.authCredentials.mail,
        this.authCredentials.password
      );
    },
  },
  components: { ErrorComponent, AuthLayout, ButtonComponent, HeaderComponent },
};
</script>

<style lang="scss" scoped>
.auth {
  &__register {
    margin-top: 2rem;
    color: #434343;
    font-size: 1.3rem;
  }
}
</style>
