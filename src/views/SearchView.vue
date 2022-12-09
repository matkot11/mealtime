<template>
  <DefaultLayout>
    <HeaderComponent text="Search" />
    <input
      class="input"
      type="text"
      placeholder="Search by recipe name"
      v-model="inputValue"
    />
    <FoodCardComponent
      v-for="recipe in matchingRecipes"
      :key="recipe.id"
      :recipe-id="
        Object.keys(response).find((key) => response[key].id === recipe.id)
      "
      :recipe="recipe"
    />
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "@/layout/DefaultLayout.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import axios from "axios";
import FoodCardComponent from "@/components/FoodCardComponent.vue";

export default {
  data() {
    return {
      inputValue: "",
      recipes: [],
      matchingRecipes: [],
      response: [],
    };
  },
  watch: {
    inputValue() {
      if (this.inputValue.length > 0) {
        this.matchingRecipes = this.recipes.filter((recipe) =>
          recipe.name.toLowerCase().startsWith(this.inputValue.toLowerCase())
        );
      } else {
        this.matchingRecipes = [];
      }
    },
  },
  async mounted() {
    try {
      const response = await axios.get(
        "https://mealtime-5d860-default-rtdb.firebaseio.com/recipes.json"
      );

      this.recipes = Object.values(response.data);

      this.response = response.data;
    } catch (e) {
      console.log(e.message);
    }
  },
  components: { FoodCardComponent, HeaderComponent, DefaultLayout },
};
</script>

<style lang="scss" scoped>
.input {
  @include input-styles;
  width: 100%;
}
</style>
