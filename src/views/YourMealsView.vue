<template>
  <DefaultLayout>
    <HeaderComponent text="Your meals" />
    <YourMealCard
      @edit="handleEdit(recipe.id)"
      @delete="handleDelete(recipe.id)"
      v-for="recipe in recipes"
      :key="recipe.id"
      :recipe="recipe"
      :recipe-id="
        Object.keys(response).find((key) => response[key].id === recipe.id)
      "
    />
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "@/layout/DefaultLayout.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import YourMealCard from "@/components/YourMealCard.vue";
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";

export default {
  data() {
    return {
      recipes: [],
      response: [],
    };
  },
  methods: {
    handleEdit(recipeId) {
      const editItemId = Object.keys(this.response).find(
        (key) => this.response[key].id === recipeId
      );
      this.$router.push({ name: "edit", params: { id: editItemId } });
    },
    async handleDelete(recipeId) {
      const deleteItemId = Object.keys(this.response).find(
        (key) => this.response[key].id === recipeId
      );
      try {
        await axios.delete(
          `https://mealtime-5d860-default-rtdb.firebaseio.com/recipes/${deleteItemId}.json`
        );
        this.$router.go();
      } catch (e) {
        console.log(e);
      }
    },
  },
  async mounted() {
    try {
      let userUid;
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          userUid = user.uid;

          const response = await axios.get(
            "https://mealtime-5d860-default-rtdb.firebaseio.com/recipes.json"
          );

          this.recipes = Object.values(response.data).filter(
            (recipe) => recipe.user === userUid
          );

          this.response = response.data;
        }
      });
    } catch (e) {
      console.log(e.message);
    }
  },
  components: { YourMealCard, HeaderComponent, DefaultLayout },
};
</script>

<style scoped></style>
