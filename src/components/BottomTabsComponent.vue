<template>
  <nav class="nav">
    <RouterLink to="/home">
      <HomeIcon class="nav__icon" />
    </RouterLink>
    <RouterLink to="/search">
      <MagnifyingGlassIcon class="nav__icon" />
    </RouterLink>
    <RouterLink to="/add">
      <PlusIcon class="nav__icon" />
    </RouterLink>
    <RouterLink to="/like">
      <HeartIcon class="nav__icon" />
    </RouterLink>
    <RouterLink to="/profile">
      <UserIcon class="nav__icon" />
    </RouterLink>
  </nav>
</template>

<script>
import HomeIcon from "@/icons/HomeIcon.vue";
import MagnifyingGlassIcon from "@/icons/MagnifyingGlassIcon.vue";
import PlusIcon from "@/icons/PlusIcon.vue";
import HeartIcon from "@/icons/HeartIcon.vue";
import UserIcon from "@/icons/UserIcon.vue";

export default {
  components: {
    UserIcon,
    HeartIcon,
    PlusIcon,
    MagnifyingGlassIcon,
    HomeIcon,
  },
};
</script>

<style lang="scss" scoped>
.router-link-active {
  color: $orange-color;
}
.nav {
  background-color: $white-color;
  padding: 1rem 2rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;

  &__icon {
    width: 3.5rem;

    &:focus {
      outline: none;
    }

    &:active {
      color: $orange-color;
    }
  }
}
</style>
