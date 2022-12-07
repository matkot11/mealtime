<template>
  <DefaultLayout>
    <button @click="handleShowUser">show user</button>
    <button @click="handleWriteData">Read data</button>
    <button @click="handleSignOut">sign out</button>
  </DefaultLayout>
</template>

<script>
import { mapActions, mapStores } from "pinia";
import { useAuthStore } from "@/store/useAuthStore";
import { auth } from "@/firebase";
import axios from "axios";
import DefaultLayout from "@/layout/DefaultLayout.vue";

export default {
  components: { DefaultLayout },
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
            hash: {
              type: "Dinner",
              diet: "Vegetarian",
              difficulty: "Beginner",
            },
            user: "5ZAVDBooJLQPKOCXIQhGZmULgGE3",
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
};
</script>

<style scoped></style>
