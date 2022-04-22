<template>
  <Cabecalho msg="Stella Venator" />
  <div id="secao-principal">
    <AnimacaoTelescopio :disFocObj="disFocObj" />
    <ParametrosDoTele @vai="pegaParam" />
    <FichaTecnica :dados="dados_form" v-if="dados_form['fichaVisivel']"></FichaTecnica>
  </div>
  <ObjetosObservaveis />
  <CorpoDoSite />
  <Rodape></Rodape>
</template>

<script>
import AnimacaoTelescopio from "./components/AnimacaoTelescopio.vue";
import Cabecalho from "./components/Cabecalho.vue";
import ParametrosDoTele from "./components/ParametrosDoTele.vue";
import CorpoDoSite from "./components/CorpoDoSite.vue";
import Rodape from "./components/Rodape.vue";
import ObjetosObservaveis from "./components/ObjetosObservaveis.vue";
import FichaTecnica from "./components/FichaTecnica.vue"

export default {
  name: "App",
  components: {
    Cabecalho,
    AnimacaoTelescopio,
    ParametrosDoTele,
    ObjetosObservaveis,
    CorpoDoSite,
    Rodape,
    FichaTecnica,
  },
  data: function() {
    return {
      dados_form: {}
    };
  },
  methods: {
    pegaParam: function(info) {
      this.dados_form = info
      this.disFocObj = info['distanciaFocalObjetiva']
      console.log(info);
    },
  },
};
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
}

body {
  background-color: rgb(255, 255, 255);
}

@media (max-width: 480px) {
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #424242;
    margin-top: 60px;
  }

  #secao-principal {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    /* margin-left: 0; */
    justify-content: center;
  }
}

@media screen {
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #424242;
    margin-top: 60px;
  }

  #secao-principal {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    
    justify-content: center;
    margin-left: -6rem;
  }
}


</style>
