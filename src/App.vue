<template>
  <RouterView />
</template>

<script setup>
import { RouterView } from "vue-router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";
import router from "@/router";

onAuthStateChanged(auth, (user) => {
  if (!user) {
    router.push("/");
  }
});
</script>
