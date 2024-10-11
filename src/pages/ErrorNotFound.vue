<template>
  <q-page class="text-center q-pa-md">
    <div class="row justify-content-center error-code-text">404</div>

    <div class="row text-h6 justify-content-center error-description">
      There is nothing here, you can go back to the main page here
    </div>

    <div class="row justify-content-center">
      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="primary"
        unelevated
        to="/"
        label="Go to Main Page"
        no-caps
      />
    </div>
  </q-page>
</template>

<script setup>
defineOptions({
  name: "ErrorNotFound",
});
</script>
