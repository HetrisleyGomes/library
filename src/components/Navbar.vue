<template>
    <div class="navbar navbar-light">
        <div>
            <a href="/" class="navbar-brand">
                <img src="../assets/Book.png" alt="Logo">
                <p>BOOK</p>
            </a>
        </div>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/arcevo">Acevo</router-link> |
            <router-link to="/form"> Doe um Livro</router-link> |
            <router-link to="/about">About</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style scoped>
img {width: 75px;}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

p {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', sans-serif;
}

.navbar {
    padding: 10px; border-bottom: 4px solid #ddd;
}

.navbar-brand > p{
    margin-left: 15px;
}
</style>