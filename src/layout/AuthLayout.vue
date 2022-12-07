<template>
  <DefaultLayout><slot></slot></DefaultLayout>
</template>

<script>
import DefaultLayout from "@/layout/DefaultLayout.vue";

export default {
  components: { DefaultLayout },
};
</script>

<style lang="scss">
.form {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__label {
    margin-bottom: 3rem;
    width: 80%;
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
  }

  &__input {
    padding: 0 1rem;
    margin-top: 0.5rem;
    height: 3.5rem;
    font-size: 1.6rem;
  }
}
</style>
