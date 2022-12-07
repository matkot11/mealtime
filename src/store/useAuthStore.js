import { defineStore } from "pinia";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/firebase";

export const useAuthStore = defineStore("auth", {
  state: () => ({ errorMessage: "" }),
  actions: {
    setErrorMessage(error) {
      this.errorMessage = error;
    },
    async signup(name, mail, password) {
      try {
        await createUserWithEmailAndPassword(auth, mail, password);
      } catch (e) {
        this.errorMessage = e.message;
      }

      try {
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
      } catch (e) {
        this.errorMessage = e.message;
      }
    },
    async login(mail, password) {
      try {
        await signInWithEmailAndPassword(auth, mail, password);
      } catch (e) {
        this.errorMessage = e.message;
      }
    },
    async logout() {
      try {
        await signOut(auth);
      } catch (e) {
        this.errorMessage = e.message;
      }
    },
  },
});
