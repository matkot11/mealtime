<template>
  <DefaultLayout>
    <HeaderComponent text="All meals" />
    <div v-if="recipes.length > 0">
      <FoodCardComponent
        v-for="recipe in recipes"
        :key="recipe"
        :recipe="recipe"
      />
    </div>
    <span v-else>Loading...</span>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "@/layout/DefaultLayout.vue";
import axios from "axios";
import FoodCardComponent from "@/components/FoodCardComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  components: { HeaderComponent, FoodCardComponent, DefaultLayout },
  data() {
    return {
      recipes: [],
    };
  },
  async mounted() {
    try {
      const response = await axios.get(
        "https://mealtime-5d860-default-rtdb.firebaseio.com/recipes.json"
      );

      this.recipes = Object.values(response.data);
    } catch (e) {
      console.log(e.message);
    }
  },
};
</script>
