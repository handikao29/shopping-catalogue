<template>
  <q-page class="flex flex-center">
    <div>{{ itemData ? itemData.item_name : "" }}</div>
    <div>
      <div>{{ itemData ? itemData.seller_name : "" }}</div>
    </div>
    <div class="row full-width">
      <div class="col-6">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg"></q-img>
      </div>
      <div class="col-6">
        <div>{{ itemData ? itemData.description : "" }}</div>
        <div>
          {{
            itemData
              ? `Rp. ${Intl.NumberFormat("id-ID").format(itemData.price)},-`
              : ""
          }}
        </div>
        <div>
          <q-rating
            v-model="itemData.rating"
            size="1.5em"
            color="orange"
            readonly
            icon="star_border"
            icon-selected="star"
            icon-half="star_half"
          />
          {{ itemData.rating }}
        </div>
        <div>{{ itemData.review_number }} Review(s)</div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DetailPage",
  data() {
    return {
      itemData: {},
    };
  },
  async mounted() {
    const response = await this.$api(`/items/${this.$route.params.id}`);
    this.itemData = response.data;
  },
});
</script>
