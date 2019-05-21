<template>
  <div class="projetos">
    <h1 class="subheading grey--text">Projetos</h1>

    <v-container class="my-5">
      <v-expansion-panel>
        <v-expansion-panel-content v-for="project in myProjects" :key="project.title">
          <!-- <div slot="header">Título</div> -->
          <template v-slot:header>
            <div>{{ project.title }}</div>
          </template>
          <v-card>
            <v-card-text class="px-4 grey--text">
              <div class="font-weight-bold">Vencimento em {{ project.due }}</div>
              <div>{{ project.content }}</div>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-container>

  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { title: 'Design de Website', person: 'Kendo', due: '1 Jan 2019', status: 'Progresso', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Código da Homepage', person: 'Chun Li', due: '10 Jan 2019', status: 'Completo', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design Thumbnails', person: 'Ryu', due: '20 Dez 2018', status: 'Completo', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Criar um Fórum da Comunidade', person: 'Gouken', due: '20 Out 2018', status: 'Encerrado', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design de Website... denovo', person: 'Kendo', due: '1 Jan 2019', status: 'Progresso', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
    }
  },
  computed: {
    myProjects() {
      return this.projects.filter(project => {
        return project.person === 'Kendo'
      })
    }
  }
}
</script>
