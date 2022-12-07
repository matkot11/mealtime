<template>
  <AuthLayout>
    <HeaderComponent text="Login" />
    <form class="form">
      <label class="form__label">
        Mail
        <input
          v-model="authCredentials.mail"
          placeholder="Mail"
          class="form__input"
          type="email"
        />
      </label>
      <label class="form__label">
        Password
        <input
          v-model="authCredentials.password"
          placeholder="Password"
          class="form__input"
          type="password"
        />
      </label>
      <ButtonComponent
        @click.prevent="handleSubmit"
        text="Login"
        type="submit"
      />
      <RouterLink class="form__register" to="/register">Register</RouterLink>
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
    ...mapActions(useAuthStore, ["login"]),
    async handleSubmit() {
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
.form {
  &__register {
    margin-top: 2rem;
    color: #434343;
    font-size: 1.3rem;
  }
}
</style>
