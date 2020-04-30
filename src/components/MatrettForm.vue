<template>
  <div>
    <v-row>
      <v-col cols="12" sm="6" lg="4" class="mx-auto">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            required
            :rules="[value => !!value || 'Name is Required.']"
            v-model="newMatrett.name"
            label="Navn"
          ></v-text-field>
          <!-- <v-file-input
            :rules="[value => !!value || 'File is Required.']"
            required
            v-model="file"
            show-size
          ></v-file-input>-->
          <v-btn :disabled="!valid" @click="postMatrett">Lagre nytt matrett</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "MatrettForm",
  data() {
    return {
      newMatrett: { name: "" },
      // file: null,
      valid: false
    };
  },

  methods: {
    postMatrett() {
      if (this.$refs.form.validate()) {
        // this.newMatrett.imageSrc = this.file.name;

        // console.log(this.result);

        // let data = new FormData();
        // data.append("file", this.file);

        axios
          .post("https://localhost:5001/ritualsadmin", this.newMatrett)
          .then(result => {
            console.log(result);

            // axios({
            //   method: "POST",
            //   url: "https://localhost:5001/ritualsadmin/UploadImage",
            //   data: data,
            //   config: { headers: { "Content-Type": "multipart/form-data" } }
            // });
          })
          .catch(e => {
            console.log(e.response);
          });
      }
    }
  }
};
</script>