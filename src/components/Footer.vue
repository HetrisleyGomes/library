<template>
    <footer class="footer">
        <table>
            <thead><th class="aqui">Biblioteca Online Oliveira Kiara'&copy; 2022</th></thead>
            <tr><td colspan="2" class="aqui"> Siga nossas redes sociais </td></tr>
            <tr>
                <th>Facebook</th><td>BooKiara</td>
            </tr>
            <tr>
                <th>Instagram</th><td>BooKiara</td>
            </tr>
        </table>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
  .footer {
    height: 200px;
    border-top: 4px solid #ddd;
    color: #42b983;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 100px;
    width: 100%;
  }
  * {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', sans-serif; font-size: 20px;
  }
  .aqui{
      text-align: center; 
  }
  th.aqui {
       font-size: 25px;
  }
</style>