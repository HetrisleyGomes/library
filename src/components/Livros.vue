<template>
<div>
    <table class="table" >
        <thead>
            <tr>
                <th style="width: 30%">Titulo</th>
                <th style="width: 20%">Autor</th>
                <th style="width: 10%">Ano</th>
                <th style="width: 10%">País</th>
                <th style="width: 10%">Idioma</th>
                <th style="width: 20%"><abbr title="Clique para mudar o estado de algum livro">Está na Biblioteca</abbr></th>
            </tr>
        </thead>
        <tbody v-if="buscapornome != ''">
            <tr v-for="livro in nomebusca" :key="livro.id">
                <td>{{ livro.title }}</td>
                <td>{{ livro.author }}</td>
                <td>{{ livro.year }}</td>
                <td>{{ livro.country }}</td>
                <td>{{ livro.language }}</td>
                <td><button class="btn btn-sm" @click="mudarestadodolivro($event, livro.id)">{{ livro.inlibrary }}</button></td>
            </tr>
        </tbody>
        <tbody v-else-if="!estapresente">
            <tr v-for="livro in livros" :key="livro.id">
                <td>{{ livro.title }}</td>
                <td>{{ livro.author }}</td>
                <td>{{ livro.year }}</td>
                <td>{{ livro.country }}</td>
                <td>{{ livro.language }}</td>
                <td><button class="btn btn-sm" @click="mudarestadodolivro($event, livro.id)">{{ livro.inlibrary }}</button></td>
            </tr>
        </tbody>
        <tbody v-else>
            <tr v-for="livro in taaqui" :key="livro.id">
                <td>{{ livro.title }}</td>
                <td>{{ livro.author }}</td>
                <td>{{ livro.year }}</td>
                <td>{{ livro.country }}</td>
                <td>{{ livro.language }}</td>
                <td><button class="btn btn-sm" @click="mudarestadodolivro($event, livro.id)">{{ livro.inlibrary }}</button></td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
export default {
  name: 'Livros',
  data() {
      return {
          livros: null,
          a: 1,
      }
  },
  props:{
      estapresente: Boolean,
      buscapornome: String,
  },
  methods: {
      async getLivros(){
            const req = await fetch('http://localhost:3000/Books');
            const data = await req.json();

            this.livros = data;

      },
      async mudarestadodolivro(e, n){
          e.preventDefault();
          this.livros[n].inlibrary = !this.livros[n].inlibrary
          const datajson = JSON.stringify(this.livros[n])
          const req = await fetch(`http://localhost:3000/Books/${n}`,{
          method: "PUT",
          headers: {"content-type":"application/json"},
          body: datajson
        })
          if (req != null){
                this.a == 1
            }
      },

  },
  computed: {
    taaqui: function () {
        return this.livros.filter(i => i.inlibrary == true)
    },
    nomebusca: function () {
        return this.livros.filter((livro) => {
            return this.buscapornome
            .toLowerCase()
            .split(" ")
            .every((v) => livro.title.toLowerCase().includes(v));
        })
    }
  },
  created() {
      this.getLivros()
  },
}
</script>


<style scoped>
tr, td, th {
    min-height: 40px; max-height: 40px;
}
</style>
