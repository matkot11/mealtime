<template>
  <DefaultLayout>
    <HeaderComponent :text="recipe.name" />
    <div class="meal">
      <div class="meal__wrapper-info">
        <img :src="recipe.image" :alt="recipe.name" class="meal__image" />
        <div class="meal__wrapper-hash">
          <span class="meal__hash"># {{ recipe.type }}</span>
          <span class="meal__hash"># {{ recipe.diet }}</span
          ><span class="meal__hash"># {{ recipe.difficulty }}</span>
        </div>
      </div>
      <ButtonComponent text="Add to favorites" />
      <div class="meal__wrapper-ingredients">
        <h3 class="meal__heading">Ingredients:</h3>
        <ul class="meal__list">
          <li
            class="meal__list-item"
            v-for="ingredient in recipe.ingredients"
            :key="ingredient"
          >
            {{ ingredient }}
          </li>
        </ul>
      </div>
      <div class="meal__wrapper-instruction">
        <h3 class="meal__heading">Instruction:</h3>
        <p class="meal__instruction">{{ recipe.instruction }}</p>
      </div>
      <span class="meal__created-by">Created by: {{ recipe.userName }}</span>
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "@/layout/DefaultLayout.vue";
import axios from "axios";
import HeaderComponent from "@/components/HeaderComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";

export default {
  data() {
    return {
      recipe: {},
    };
  },
  async mounted() {
    const recipeId = this.$route.params.id;

    try {
      const response = await axios.get(
        `https://mealtime-5d860-default-rtdb.firebaseio.com/recipes/${recipeId}.json`
      );

      this.recipe = response.data;
    } catch (e) {
      console.log(e);
    }
  },
  components: { ButtonComponent, HeaderComponent, DefaultLayout },
};
</script>

<style lang="scss" scoped>
.meal {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__wrapper {
    &-info {
      margin-bottom: 3rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }

    &-hash {
      display: flex;
      flex-direction: column;
    }

    &-ingredients,
    &-instruction {
      margin-top: 3rem;
      align-self: flex-start;
    }
  }

  &__image {
    width: 15rem;
    border-radius: 50%;
  }

  &__hash {
    margin-top: 0.5rem;
    font-size: 1.7rem;
    font-weight: $medium-weight;

    &:first-child {
      margin-top: 0;
    }
  }

  &__heading {
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: $semiBold-weight;
  }

  &__list {
    margin-left: 2rem;

    &-item {
      margin: 0.5rem 0;
      font-size: 1.7rem;
    }
  }

  &__instruction {
    margin-left: 2rem;
  }

  &__created-by {
    margin-top: 1.5rem;
    align-self: flex-end;
    font-size: 1.4rem;
  }
}
</style>
