<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile to="/" @click.stop="drawer = !drawer">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/recipes" @click.stop="drawer = !drawer">
          <v-list-tile-action>
            <v-icon>fas fa-utensils</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Recipes</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/about" @click.stop="drawer = !drawer">
          <v-list-tile-action>
            <v-icon>far fa-grin-hearts</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>About</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Nutry {{headerText}}</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-layout
          justify-center
          align-center
        >
          <router-view />
        </v-layout>
      </v-container>
    </v-content>
    <v-footer
      dark
      height="auto"
    >
      <v-layout
        xs-12
        align-start justify-space-around row fill-height
      >
      <v-btn
        icon
        to="/"
      >
        <v-icon size="24px">home</v-icon>
      </v-btn>
      <v-btn
        icon
        to="/recipes"
      >
        <v-icon size="24px">fas fa-utensils</v-icon>
      </v-btn>
      <v-btn
        icon
        to="/about"
      >
        <v-icon size="24px">far fa-grin-hearts</v-icon>
      </v-btn>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    drawer: null,
    icons: [
      'fab fa-facebook',
      'fab fa-twitter',
      'fab fa-google-plus',
      'fab fa-linkedin',
      'fab fa-instagram'
    ]
  }),

  props: {
    source: String
  },

  computed: {
    ...mapGetters('layout', [
      'headerText'
    ])
  }
}
</script>
