<template>
  <Cabecalho msg="Stella Venator" />
  <div id="secao-principal">
    <AnimacaoTelescopio :disFocObj="disFocObj" />
    <ParametrosDoTele @vai="pegaParam" />
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

export default {
  name: "App",
  components: {
    Cabecalho,
    AnimacaoTelescopio,
    ParametrosDoTele,
    ObjetosObservaveis,
    CorpoDoSite,
    Rodape,
  },
  data: function() {
    return {
      dados_form: ParametrosDoTele.data(),
      disFocObj: ''
    };
  },
  methods: {
    pegaParam: function(info) {
      this.disFocObj = info
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
  }
}

@media (max-width: 400px) {
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
  }
}
</style>
