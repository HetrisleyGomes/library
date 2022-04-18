<template>
    <div>
        <div class="container-fluid ciaxa">
            <img src="../assets/Kiara.gif" class="d-block foto" alt="...">
            <div class="box">
                <h5 style="text-align: center">Quem é Kiara?</h5>
                <p>Kiara é uma amante de livros que decidiu expalhar esse amor com o todos. <br> Assim, até aqueles que numca puderam, agora podem ter uma experiência em uma biblioteca.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Kiara'
}
</script>

<style scoped>
  .ciaxa{
      margin: 0 auto; margin-top: 20px; margin-bottom: 20px;
      display: flex;flex-direction: column; align-items: center; 
    }
  .box {
      margin: 15px;
  }
  .foto {
      border-radius: 400px; margin-left: auto;
      margin-right: auto; width: 200px;
      height: 200px;
  }
  /*#logo{width: 40px; height: 40px;}*/
</style>