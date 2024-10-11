<template>
  <q-btn flat class="q-mb-md" icon="chevron_left" @click="backToMenu">
    Back to menu
  </q-btn>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "BackToMenuButton",
  methods: {
    backToMenu() {
      this.$emit("backToMenu");
    },
  },
});
</script>
