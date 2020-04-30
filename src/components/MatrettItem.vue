<template>
  <v-card>
    <v-img src="@/assets/pizza-hero.jpg" height="200px"></v-img>

    <v-card-title>Name: {{ defName.name }}</v-card-title>
    <span>Price: {{ defName.price }}</span>
    <h6>Desc: {{ defName.description }}</h6>
  </v-card>
</template>

<script>
export default {
  name: "MatrettItem",
  props: {
    defName: {
      type: Object,
      required: true
    }
  }
};
</script>