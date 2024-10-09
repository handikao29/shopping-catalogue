<template>
  <q-page class="q-pa-md">
    <span class="q-mb-md cursor-pointer" @click="$router.push('/')">
      Back to menu
    </span>
    <q-card class="full-width q-pa-md">
      <div class="detail--item-name">
        {{ itemData ? itemData.item_name : "" }}
      </div>
      <div class="detail--seller-name">
        {{ itemData ? itemData.seller_name : "" }}
      </div>
    </q-card>
    <div class="row full-width q-pa-md">
      <div class="col-md-6 col-xs-12 q-pa-md">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg"></q-img>
      </div>
      <div class="col-md-6 col-xs-12 q-pa-md">
        <div>{{ itemData ? itemData.description : "" }}</div>
        <div class="price-tag">
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
