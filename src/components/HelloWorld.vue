<template>
  <div class="home">
    <v-parallax style="opacity: 0.7;" src="@/assets/pizza-hero.jpg">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="mt-4 elevation-3">Welcome To Rituals</h1>
          <v-img />
          <span class="font-weight-bold elevation-3">
            Rituals er den største pizzarestaurant-kjeden i Skandinavia med over 1 800 ansatte.
            <span
              class="font-weight-bold elevation-3"
            >Vi er representert fra Hammerfest i nord til Kristiansand i sør og har bygget opp en sterkt merkevare gjennom over 70 år.</span>

            <span
              class="font-weight-bold elevation-3"
            >Uformell atmosfære, hyggelige omgivelser og en amerikansk pizzameny er grunnsteiner i Rituals. I tillegg til vår klassiske margarita, tilbyr vi også mange andre smaksrike pizzaer med spennende toppinger på en saftig bunn.</span>
          </span>
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HelloWorld",
  components: {
    // HelloWorld
  }
};
</script>
