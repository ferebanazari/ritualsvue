<template>
  <v-app>
    <v-content class="text-center">
      <v-app-bar light>
        <v-btn text>
          <v-img class="mr-3" src="@/assets/LogoRituals.png" height="45px" width="45px" />
          <router-link style="text-decoration:none;color:#000;" to="/">Home</router-link>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn text>
          <router-link style="text-decoration:none;color:#000;" to="/all-matrett">All Matrett</router-link>
        </v-btn>
        <v-btn text>
          <router-link style="text-decoration:none;color:#000;" to="/add-matrett">Add Matrett</router-link>
        </v-btn>
        <v-btn text>
          <router-link style="text-decoration:none;color:#000;" to="/delete-matrett">Delete matrett</router-link>
        </v-btn>
        <v-btn text>
          <router-link style="text-decoration:none;color:#000;" to="/edit-matrett">Edit Matrett</router-link>
        </v-btn>
      </v-app-bar>
      <router-view />
    </v-content>
  </v-app>
</template>

<style lang="scss">
</style>
