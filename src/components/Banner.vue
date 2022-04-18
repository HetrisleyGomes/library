<template>
    <div class="caixa">
        <a href="/about">
        <img src="..\assets\library.jpg" alt="biblioteca">
        </a>
        <div>
            <h2 class="bottomleft">Bem Vindo à Biblioteca Online Oliveira Kiara</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Banner',
}
</script>

<style scoped>
img{
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 98%;
}
.caixa {
  position: relative;
}

.bottomleft {
  position: absolute;
  bottom: 0px;
  left: 0px;
  font-size: 18px;
  color: #42b983;
  background-color: #2c3e50;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', sans-serif;
  font-size: 35px;
  padding: 10px 30px;
  
}
</style>