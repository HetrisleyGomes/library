<template>
  <div>
    <Banner/>

    <br><br>
    
    <main class="container">
      <article>
        <p>Quais são as características de um bom livro? Alguns podem dizer que um bom livro é feito com vocabulário amplo, enredo imprevisível e sem furos, personagens tridimensionais. Outros respondem com: “aquele que você jamais consegue esquecer”. Mas, se for assim, por que algumas pessoas amam os livros de Nicholas Sparks e outras odeiam?</p>
        <p>Vamos por partes. Se um bom livro é aquele que você jamais consegue esquecer, então não existe nenhum consenso sobre o que é um bom livro, porque certamente há muitos estudantes que não se lembram de um “a” dos clássicos da literatura que estudaram no colégio. E, mais ainda, você pode memorizar um livro para sempre só porque o considerou notoriamente ruim.</p>
        <p>E se você define um bom livro por características como “vocabulário amplo” e por aí vai, encontramos outro problema. É melhor a escrita que é cheia de complexidades ou àquela que é simples? Existe apenas um estilo válido? Certas histórias abraçam enredos simples e previsíveis para criar personagens tão cotidianos quanto marcantes. Outras são mirabolantes em enredo e vocabulário, mas as personagens não são o foco. E acima de tudo: você realmente quer impor regras à arte?</p>
        <p>Se um bom livro é aquele que surpreende você, então todo final inesperado pode ser considerado bom. Mas quem nunca leu um livro com um final tão sem pé nem cabeça que jamais seria possível de prever… ou aceitar? Em geral, mesmo que o enredo tenha reviravoltas, espera-se um tanto de coerência. Até o no sense de Alice no País das Maravilhas é coerente em suas loucuras.</p>
      </article>
      <p> Veja os nossos livros clicando <a href="/arcevo">aqui</a></p>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
//import Livros from '@/components/Livros'
import Banner from '../components/Banner.vue'

export default {
  name: 'Home',
  components: {
    //Livros, 
    Banner

  }
}
</script>
