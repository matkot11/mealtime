<template>
  <div class="wrapper">
    <NavbarComponent />
    <slot />
    <BottomTabsComponent />
  </div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import BottomTabsComponent from "@/components/BottomTabsComponent.vue";

export default {
  name: "DefaultLayout",
  components: { BottomTabsComponent, NavbarComponent },
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 1.5rem 1.5rem 6rem 1.5rem;
}
</style>
