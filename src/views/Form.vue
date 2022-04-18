<template>
    <div>
        <form class="form" @submit="createBook">
            <div class="row p-3">
                <div class="col">
                    <label for="titulo" class="form-label"> Titulo: </label>
                    <input type="text" id="titulo" name="titulo" v-model="titulo" placeholder="Digite o titulo do livro" class="form-control">
                </div>
                <div class="col">
                    <label for="autor" class="form-label"> Autor: </label>
                    <input type="text" id="autor" name="autor" v-model="autor" placeholder="Digite aqui" class="form-control">
                </div>
            </div>
            <div class="row p-3">
                <div class="col">
                    <label for="idioma" class="form-label"> Idioma original: </label>
                    <input type="text" id="idioma" name="idioma" v-model="idioma" placeholder="Digite aqui" class="form-control">
                </div>
                <div class="col">
                    <label for="pais" class="form-label"> País de origem: </label>
                    <input type="text" id="pais" name="pais" v-model="pais" placeholder="Digite aqui" class="form-control">
                </div>
            </div>
            <div class="row p-3">
                <div class="col">
                    <label for="ano" class="form-label"> Ano de publicação: </label>
                    <input type="number" id="ano" name="ano" v-model="ano" placeholder="Digite aqui" class="form-control w-50">
                </div>
                <div class="col">
                    <label for="pag" class="form-label"> Número de páginas: </label>
                    <input type="number" id="pag" name="pag" v-model="pag" placeholder="Digite aqui" class="form-control w-50">
                </div>
                <div class="col">

                </div>
            </div>
            <div class="p-3 position-relative">
                <input type="submit" class="btn btn-success position-absolute bottom-0 end-0" value="Doar">
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "Form",
    data() {
        return {
            titulo: null,
            autor: null,
            idioma: null,
            pais: null,
            ano: null,
            pag: null,
            id: null
        }
    },
    methods: {
        async createBook(e){
            e.preventDefault();

            const contar1 = await fetch('http://localhost:3000/Books');
            const contar2 = await contar1.json();
            this.id = contar2.length;

            if (this.titulo == null || this.autor == null || this.idioma == null || this.pais == null || this.ano == null || this.pag == null){
                    window.alert("Esta faltando alguma informação")
                return null;
            }

            for (let i = 0; i < this.id; i++){
                if (contar2.title == this.title && contar2.author == this.author){
                    window.alert("Este livro possivelmente já esta em nosso arcevo")
                    return null;
                } else if (contar2.year == this.year && contar2.author == this.author){
                    window.alert("Este livro possivelmente já esta em nosso arcevo")
                    return null;
                }
            }

            const data = {
                id: this.id,
                author: this.autor,
                country: this.pais,
                language: this.idioma,
                pages: this.pag,
                title: this.titulo,
                year: this.ano,
                inlibrary: true
            }

            const datajson = JSON.stringify(data);

            const req = await fetch('http://localhost:3000/Books',{
                method: "POST",
                headers: {"content-type":"application/json"},
                body: datajson
            })

            const res = await req.json();
            
            if (res != null){
                window.alert("Livro Adicionado ao catalogo!")
            }

            this.autor = null
            this.pais = null
            this.idioma = null
            this.pag = null
            this.titulo = null
            this.ano = null
            
        }
    },
}
</script>

<style scoped>

</style>