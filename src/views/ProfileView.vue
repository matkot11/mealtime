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
        <button class="profile__button" @click="handleShowUser">
          Show user
        </button>
        <button class="profile__button" @click="handleWriteData">
          Write data
        </button>
        <button class="profile__button" @click="handleSignOut">Logout</button>
      </div>
    </div>
  </DefaultLayout>
</template>

<script>
import { mapActions, mapStores } from "pinia";
import { useAuthStore } from "@/store/useAuthStore";
import { auth } from "@/firebase";
import axios from "axios";
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
    handleShowUser() {
      console.log(auth.currentUser);
    },
    async handleWriteData() {
      try {
        const response = await axios.post(
          "https://mealtime-5d860-default-rtdb.firebaseio.com/recipes.json",
          {
            name: "Spaghetti",
            image:
              "https://veganwithgusto.com/wp-content/uploads/2021/05/speedy-spaghetti-arrabbiata-featured-e1649949762421.jpg",
            instruction:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
            ingredients: ["onion", "pasta", "carrot", "olive oil"],
            type: "Dinner",
            diet: "Vegetarian",
            difficulty: "Beginner",
            user: "5ZAVDBooJLQPKOCXIQhGZmULgGE3",
            id: 1,
            userName: "Test Test",
          }
        );
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    },
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
