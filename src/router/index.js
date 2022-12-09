import { createRouter, createWebHistory } from "vue-router";
import WelcomeView from "../views/WelcomeView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import HomeView from "@/views/HomeView.vue";
import ProfileView from "@/views/ProfileView.vue";
import AddView from "@/views/AddView.vue";
import YourMealsView from "@/views/YourMealsView.vue";
import EditView from "@/views/EditView.vue";
import MealView from "@/views/MealView.vue";
import LikedMealsView from "@/views/LikedMealsView.vue";
import SearchView from "@/views/SearchView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "welcome",
      component: WelcomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/meal/:id",
      name: "meal",
      component: MealView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/search",
      name: "search",
      component: SearchView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/like",
      name: "like",
      component: LikedMealsView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/add",
      name: "add",
      component: AddView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: EditView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/profile/your-meals",
      name: "yourMeals",
      component: YourMealsView,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

export default router;
