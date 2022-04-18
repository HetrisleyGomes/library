<template>
  <div>
    <div class="container-fluid filtros" @keypress="checkaways()" @click="check2()">
      
      <span class="pe-3"><strong>Filtros:</strong></span>
        
      <label for="estaaqui">Está na Biblioteca </label> <input type="checkbox" name="estaaqui" id="estaaqui" v-model="filtroestaaqui"> |

      <label for="buscanome">Buscar por nome </label> <input type="text" name="buscanome" id="buscanome" v-model="buscanome">

    </div>

    <Livros :estapresente="filtroestaaqui" :buscapornome="buscanome"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Livros from '@/components/Livros'


export default {
  name: 'Arcevo',
  data() {
    return {
      filtroestaaqui: false,
      buscanome: "",
    }
  },
  components: {
    Livros

  },
  methods: {
    checkaways(){
      if (this.buscanome != ''){
        this.filtroestaaqui = false
      }
    },
    check2(){
      if (this.filtroestaaqui != true) {
        this.buscanome = ''
      }
    }
  }

}
</script>

<style scoped>
div > span {
  padding: 100px 3px;
}
.filtros {
  padding: 10px;
}
</style>