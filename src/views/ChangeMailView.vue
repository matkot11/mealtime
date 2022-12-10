<template>
  <DefaultLayout>
    <HeaderComponent text="Change mail" />
    <form class="mail">
      <label class="mail__label">
        New email *
        <input v-model="inputValues.mail" type="email" class="mail__input" />
      </label>
      <label class="mail__label">
        Confirm email *
        <input
          v-model="inputValues.confirmMail"
          type="email"
          class="mail__input"
        />
      </label>
      <ErrorComponent :text="errorMessage" />
      <ButtonComponent @click.prevent="handleChangeMail" text="Change email" />
    </form>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "@/layout/DefaultLayout.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import ErrorComponent from "@/components/ErrorComponent.vue";
import { mapActions, mapState, mapStores } from "pinia";
import { useAuthStore } from "@/store/useAuthStore";

export default {
  data() {
    return {
      inputValues: {
        mail: "",
        confirmMail: "",
      },
    };
  },
  computed: {
    ...mapStores(useAuthStore),
    ...mapState(useAuthStore, ["errorMessage"]),
  },
  methods: {
    ...mapActions(useAuthStore, ["changeMail", "setErrorMessage"]),
    async handleChangeMail() {
      if (this.inputValues.mail.length === 0) {
        this.setErrorMessage("Please type new mail");
        return;
      }

      if (this.inputValues.mail !== this.inputValues.confirmMail) {
        this.setErrorMessage("Emails do not match");
        return;
      }

      await this.changeMail(this.inputValues.mail);
    },
  },
  components: {
    ErrorComponent,
    ButtonComponent,
    HeaderComponent,
    DefaultLayout,
  },
};
</script>

<style lang="scss" scoped>
.mail {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__label {
    @include label-styles;
  }

  &__input {
    @include input-styles;
  }
}
</style>
