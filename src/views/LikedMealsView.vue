<template>
  <defaultLayout>
    <HeaderComponent text="Favorite meals" />
    <FoodCardComponent
      v-for="recipe in recipes"
      :key="recipe.id"
      :recipe-id="
        Object.keys(response).find((key) => response[key].id === recipe.id)
      "
      :recipe="recipe"
    />
  </defaultLayout>
</template>

<script>
import DefaultLayout from "@/layout/DefaultLayout.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import FoodCardComponent from "@/components/FoodCardComponent.vue";
import axios from "axios";
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default {
  data() {
    return {
      recipes: [],
      response: [],
    };
  },
  async mounted() {
    onAuthStateChanged(auth, async (user) => {
      try {
        const response = await axios.get(
          "https://mealtime-5d860-default-rtdb.firebaseio.com/recipes.json"
        );

        this.recipes = Object.values(response.data).filter((recipe) =>
          recipe.likes?.includes(user.uid)
        );

        this.response = response.data;
      } catch (e) {
        console.log(e);
      }
    });
  },
  components: { FoodCardComponent, HeaderComponent, DefaultLayout },
};
</script>

<style scoped></style>
