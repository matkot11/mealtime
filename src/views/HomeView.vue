<template>
  <h1>Hello World</h1>
  <button @click="handleShowUser">show user</button>
  <button @click="handleSignOut">sign out</button>
</template>

<script>
import { mapActions, mapStores } from "pinia";
import { useAuthStore } from "@/store/useAuthStore";
import { auth } from "@/firebase";

export default {
  computed: {
    ...mapStores(useAuthStore),
  },
  methods: {
    ...mapActions(useAuthStore, ["logout"]),
    handleShowUser() {
      console.log(auth.currentUser);
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
