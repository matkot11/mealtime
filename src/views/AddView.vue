<template>
  <DefaultLayout>
    <HeaderComponent text="Add meal" />
    <form class="form">
      <label class="form__label">
        Meal name *
        <input v-model="addInputs.name" type="text" class="form__input" />
      </label>
      <label class="form__label">
        Image url *
        <input v-model="addInputs.image" type="text" class="form__input" />
      </label>
      <label class="form__label">
        Recipe instruction *
        <textarea v-model="addInputs.instruction" class="form__textarea" />
      </label>
      <label class="form__label">
        Ingredients *
        <div class="ingredients__input">
          <input v-model="ingredientInput" type="text" class="form__input" />
          <ButtonComponent text="Add" @click.prevent="handleAddIngredient" />
        </div>
      </label>
      <div class="ingredients__buttons">
        <span
          v-for="ingredient in addInputs.ingredients"
          :key="ingredient"
          class="ingredients__button"
          @click="handleDeleteIngredient(ingredient)"
        >
          {{ ingredient }}
          <span class="ingredients__button-x">X</span>
        </span>
      </div>
      <label class="form__label">
        Select meal type *
        <v-select
          class="form__select"
          v-model="addInputs.type"
          :options="['Breakfast', 'Lunch', 'Dinner', 'Supper']"
        />
      </label>
      <label class="form__label">
        Select diet *
        <v-select
          class="form__select"
          v-model="addInputs.diet"
          :options="['No diet', 'Vegan', 'Vegetarian', 'Pescatarian']"
        />
      </label>
      <label class="form__label">
        Select difficulty level *
        <v-select
          class="form__select"
          v-model="addInputs.difficulty"
          :options="['Beginner', 'Intermediate', 'Advanced']"
        />
      </label>
      <ErrorComponent :text="errorMessage" />
      <ButtonComponent type="submit" text="Add" @click.prevent="handleSubmit" />
    </form>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "@/layout/DefaultLayout.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import ErrorComponent from "@/components/ErrorComponent.vue";
import { auth } from "@/firebase";
export default {
  data() {
    return {
      errorMessage: "",
      ingredientInput: "",
      addInputs: {
        name: "",
        image: "",
        instruction: "",
        ingredients: [],
        type: "",
        diet: "",
        difficulty: "",
      },
    };
  },
  methods: {
    handleAddIngredient() {
      if (!this.ingredientInput) {
        this.errorMessage = "Input is empty";
        return;
      }

      if (this.addInputs.ingredients.includes(this.ingredientInput)) {
        this.errorMessage = "Ingredient already exists";
        return;
      }

      this.addInputs.ingredients.push(this.ingredientInput);
      this.ingredientInput = "";
    },
    handleDeleteIngredient(ingredient) {
      this.addInputs.ingredients = this.addInputs.ingredients.filter(
        (item) => item !== ingredient
      );
    },
    async handleSubmit() {
      if (
        !this.addInputs.name ||
        !this.addInputs.image ||
        !this.addInputs.instruction ||
        this.addInputs.ingredients.length === 0 ||
        !this.addInputs.type ||
        !this.addInputs.diet ||
        !this.addInputs.difficulty
      ) {
        this.errorMessage = "Please fill out all inputs";
        return;
      }

      const id = uuidv4();
      try {
        await axios.post(
          "https://mealtime-5d860-default-rtdb.firebaseio.com/recipes.json",
          {
            ...this.addInputs,
            id,
            user: auth.currentUser.uid,
            userName: auth.currentUser.displayName,
          }
        );
      } catch (e) {
        this.errorMessage = e.message;
      }
      this.$router.push("/home");
    },
  },
  components: {
    ErrorComponent,
    ButtonComponent,
    HeaderComponent,
    DefaultLayout,
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__label {
    @include label-styles;
  }

  &__input {
    @include input-styles;
  }

  &__textarea {
    @include input-styles;
    padding: 1rem;
    height: 13rem;
  }

  &__select {
    margin-top: 0.5rem;
  }
}

.ingredients {
  &__input {
    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
      width: 100%;
      margin-right: 1rem;
      //margin-bottom: 1rem;
    }

    button {
      margin-top: 0.5rem;
    }
  }

  &__buttons {
    align-self: flex-start;
    margin: -1.5rem 0 1.5rem 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
  }

  &__button {
    margin: 0.7rem 0.7rem;
    padding: 0.7rem;
    background-color: $gray-color;
    border-radius: 5px;
    text-transform: capitalize;
    cursor: pointer;

    &-x {
      margin-left: 1rem;
    }
  }
}
</style>
