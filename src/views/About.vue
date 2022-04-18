<template>
  <div>
    
    <div>
      <h1>Quem nós somos?</h1>
      <p>Somos uma biblioteca de livros online que simula uma biblioteca física, nossos livros sempre estão online, porém pelo número de acesso de algum exemplar, nós o tornamos temporariamente indisponível.</p>
      <p>Nós da equipe BooKiara esperamos que vocês possam encontrar o que procura em nosso arcevo!</p>
    </div>

    <hr>

    <div>
      <Kiara />
    </div>

    <hr>

    <div>
      <h2>Quer nos ajudar?</h2>
      <ul class="list-group w-50">
        <li class="list-group-item">Click <a href="#">aqui</a> e nos ajude doando qualquer valor!</li>
        <li class="list-group-item">Ou Click <a href="#">aqui</a> e compartilhe nossa biblioteca com seus amigos!</li>
      </ul>
      <p class="p-3" style="font-size: 20px">Qualquer ajuda é bem vinda, e nos fará crescer sempre!</p>
    </div>

  </div>
</template>

<script>
import Kiara from '../components/Kiara.vue'
export default {
  name: "Abaut",
  components: {
    Kiara
  }

}
</script>