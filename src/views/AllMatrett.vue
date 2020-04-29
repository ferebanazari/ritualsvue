<template>
  <div>
    <span class="headline">allMatrett</span>
    <v-row>
      <v-col cols="12" sm="6" lg="4" v-for="matrett in matretter" :key="matrett.id">
        <matrettItem :defName="matrett" />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import axios from "axios";
import matrettItem from "@/components/MatrettItem";
export default {
  name: "MatrettList",

  data() {
    return {
      matretter: []
    };
  },

  created() {
    axios
      .get("https://localhost:5001/rituals")

      .then(result => {
        console.log(result.data);

        this.matretter = result.data;
      });
  },
  components: {
    matrettItem
  }
};
</script>

