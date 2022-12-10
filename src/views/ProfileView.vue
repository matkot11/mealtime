<template>
  <DefaultLayout>
    <div class="profile">
      <h3 class="profile__heading">
        Hi,<span class="profile__heading-name">{{ name }}</span>
      </h3>
      <div class="profile__buttons">
        <RouterLink to="/profile/your-meals" class="profile__button"
          >Your meals</RouterLink
        >
        <RouterLink to="/profile/change-mail" class="profile__button"
          >Change email</RouterLink
        >
        <button class="profile__button" @click="handleSignOut">Logout</button>
      </div>
    </div>
  </DefaultLayout>
</template>

<script>
import { mapActions, mapStores } from "pinia";
import { useAuthStore } from "@/store/useAuthStore";
import { auth } from "@/firebase";
import DefaultLayout from "@/layout/DefaultLayout.vue";
import { onAuthStateChanged } from "firebase/auth";

export default {
  data() {
    return {
      name: "",
    };
  },
  mounted() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.name = user.displayName.split(" ")[0];
      }
    });
  },
  computed: {
    ...mapStores(useAuthStore),
  },
  methods: {
    ...mapActions(useAuthStore, ["logout"]),
    async handleSignOut() {
      try {
        await this.logout();
      } catch (e) {
        console.log(e.message);
      }
    },
  },
  components: { DefaultLayout },
};
</script>

<style lang="scss" scoped>
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__heading {
    margin: 8rem 0;
    font-size: 2.5rem;
    font-weight: $semiBold-weight;

    &-name {
      margin-left: 0.7rem;
      color: $orange-color;
    }
  }

  &__buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__button {
    margin: 0.7rem 0;
    font-size: 2rem;
    font-weight: $semiBold-weight;
  }
}
</style>
