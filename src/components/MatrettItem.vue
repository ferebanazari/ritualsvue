<template>
  <v-card>
    <v-img :src="`https://localhost:5001/images/${defName.imgName}`" height="200px"></v-img>
    <v-card-title>{{ defName.name }}</v-card-title>
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