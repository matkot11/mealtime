<template>
  <div class="wrapper">
    <NavbarComponent />
    <slot />
  </div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";

export default {
  name: "DefaultLayout",
  components: { NavbarComponent },
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 1.5rem;
}
</style>
