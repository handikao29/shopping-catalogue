<template>
  <q-card class="card">
    <q-item>
      <q-item-section>
        <q-skeleton height="300px" />
      </q-item-section>
    </q-item>

    <q-item>
      <q-item-section>
        <q-item-label>
          <q-skeleton height="50px" />
        </q-item-label>
        <q-item-label>
          <q-skeleton type="text" />
        </q-item-label>
        <q-item-label>
          <q-skeleton type="text" />
        </q-item-label>
      </q-item-section>
    </q-item>

    <q-card-actions align="center" class="q-gutter-md">
      <q-skeleton type="QBtn" />
      <q-skeleton type="QBtn" />
    </q-card-actions>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ItemCardSkeleton",
});
</script>

<style>
.card {
  width: 100%;
  max-width: 400px;
}
</style>
