<template>
  <q-btn outline color="primary" class="card-button" @click="goToDetail"
    >Details</q-btn
  >
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DetailButton",
  methods: {
    goToDetail() {
      this.$emit("goToDetail");
    },
  },
});
</script>
