<template>
  <div class="home">
    <!-- <h1>Welcome To Rituals</h1> -->

    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
