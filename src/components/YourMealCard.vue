<template>
  <div class="recipe">
    <RouterLink :to="{ name: 'meal', params: { id: recipeId } }" class="recipe__wrapper-top">
      <img class="recipe__image" :src="recipe.image" :alt="recipe.name" />
      <div class="recipe__wrapper-right">
        <h3 class="recipe__title">{{ recipe.name }}</h3>
        <div class="recipe__wrapper-hash">
          <span class="recipe__hash">#{{ recipe.type }}</span>
          <span class="recipe__hash">#{{ recipe.diet }}</span>
          <span class="recipe__hash">#{{ recipe.difficulty }}</span>
        </div>
      </div>
    </RouterLink>
    <div class="recipe__wrapper-bottom">
      <ButtonComponent @click.self="$emit('edit')" text="Edit" />
      <ButtonComponent @click.self="$emit('delete')" text="Delete" />
    </div>
  </div>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent.vue";

export default {
  components: { ButtonComponent },
  props: {
    recipe: {
      type: Object,
      required: true,
    },
    recipeId: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleRedirect() {
      console.log("dupsko");
      this.$router.push({ name: "meal", params: { id: this.recipeId } });
    },
  },
};
</script>

<style lang="scss" scoped>
.recipe {
  margin-top: 2rem;
  padding: 2rem 1rem;
  border: 2px solid $orange-color;
  border-radius: 5px;

  &:active {
    background-color: #ecebeb;
  }

  &__wrapper-top {
    display: flex;
    align-items: center;
    justify-content: space-around;

    &:first-child {
      margin-top: 0;
    }
  }

  &__wrapper-bottom {
    margin: 2rem auto 0 auto;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      width: 10rem;
    }
  }

  &__image {
    width: 9rem;
    height: 9rem;
    border-radius: 50%;
    object-fit: cover;
  }

  &__title {
    font-size: 2rem;
    font-weight: $semiBold-weight;
  }

  &__hash {
    margin-top: 0.5rem;
    font-size: 1.4rem;
  }

  &__wrapper {
    &-right {
      display: flex;
      flex-direction: column;
    }

    &-hash {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
