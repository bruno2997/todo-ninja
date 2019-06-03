<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

    <v-container class="my-5">

      <v-layout row wrap class="mb-3">
        <v-tooltip top>
          <v-btn small flat color="grey" @click="ordenarPor('title')" slot="activator">
            <v-icon left small>folder</v-icon>
            <span class="caption text-lowercase">Por nome de Projeto</span>
          </v-btn>
          <span>Ordenar projetos por nome</span>
        </v-tooltip>
        <v-tooltip top>
          <v-btn small flat color="grey" @click="ordenarPor('person')" slot="activator">
            <v-icon left small>person</v-icon>
            <span class="caption text-lowercase">Por nome da Pessoa</span>
          </v-btn>
          <span>Ordenar pessoas por nome</span>
        </v-tooltip>
        <!-- <v-flex>
          <Popup @projectAdded="snackbar = true"/>
        </v-flex> -->
      </v-layout>

      <v-card flat v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Projeto Título</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Pessoa</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Vencimento</div>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex xs4 sm4 md2>
            <div class="right">
              <v-chip small :class="`${project.status} white--text caption my-2`">{{ project.status }}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>

    </v-container>
  </div>
</template>

<script>
import db from '@/fb'
// import Popup from '../components/Popup'

export default {
  // components: {
  //   Popup
  // },
  data() {
    return {
      projects: [],
      w: window.innerWidth,
      // snackbar: false,
    }
  },
  methods: {
    ordenarPor(prop) {
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    }
  },
  created() {
    db.collection('projects').onSnapshot(res => {
      const changes = res.docChanges()

      changes.forEach(change => {
        if(change.type === 'added') {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      })
    })
  }
}
</script>

<style>

.project.Completo {
  border-left: 4px solid #3cd1c2;
}

.project.Progresso {
  border-left: 4px solid orange;
}

.project.Atrasado {
  border-left: 4px solid tomato;
}

.v-chip.Completo{
  background: #3cd1c2;
}
.v-chip.Progresso{
  background: #ffaa2c;
}
.v-chip.Atrasado{
  background: #f83e70;
}

</style>

