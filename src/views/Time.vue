<template>
  <div class="time">
    <h1 class="subheading grey--text">Time</h1>

    <v-container class="my-5">
      
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn flat color="grey">
                <v-icon small left>message</v-icon>
                <span>Mensagem</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>

  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        { name: 'Kendo', role: 'Desenvolvedor Web', avatar: '/avatar-1.png' },
        { name: 'Ryu', role: 'Designer Gráfico', avatar: '/avatar-2.png' },
        { name: 'Chun Li', role: 'Desenvolvedor Web', avatar: '/avatar-3.png' },
        { name: 'Gouken', role: 'Social Media', avatar: '/avatar-4.png' },
        { name: 'Yoshi', role: 'Vendedor', avatar: '/avatar-5.png' }
      ]
    }
  }
}
</script>
