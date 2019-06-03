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
export default {
  data() {
    return {
      projects: [
        { title: 'Design de Website', person: 'Kendo', due: '01 Jan 2019', status: 'Progresso', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Código da Homepage', person: 'Chun Li', due: '10 Jan 2019', status: 'Completo', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design Thumbnails', person: 'Ryu', due: '20 Dez 2018', status: 'Completo', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Criar um Fórum da Comunidade', person: 'Gouken', due: '20 Out 2018', status: 'Encerrado', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ],
      w: window.innerWidth,
    }
  },
  methods: {
    ordenarPor(prop) {
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    }
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

.project.Encerrado {
  border-left: 4px solid tomato;
}

.v-chip.Completo{
  background: #3cd1c2;
}
.v-chip.Progresso{
  background: #ffaa2c;
}
.v-chip.Encerrado{
  background: #f83e70;
}

</style>

