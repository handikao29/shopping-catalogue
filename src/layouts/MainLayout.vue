<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-space />

        <q-btn class="q-mr-md" flat dense label="Home" />
        <q-btn class="q-mr-md" flat dense label="Products" />
        <q-btn class="q-mr-md" flat dense label="About Us" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";

defineOptions({
  name: "MainLayout",
});
</script>
