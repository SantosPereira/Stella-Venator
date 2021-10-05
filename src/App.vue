<template>
  <Cabecalho msg="Stella Venator"/>
  <div id="secao-principal">
    <AnimacaoTelescopio/>
    <ParametrosDoTele/>
  </div>
  <CorpoDoSite/>
</template>

<script>
import AnimacaoTelescopio from './components/AnimacaoTelescopio.vue'
import Cabecalho from './components/Cabecalho.vue'
import ParametrosDoTele from './components/ParametrosDoTele.vue'
import CorpoDoSite from './components/CorpoDoSite.vue'

export default {
  name: 'App',
  components: {
    Cabecalho,
    AnimacaoTelescopio,
    ParametrosDoTele,
    CorpoDoSite
  }
}
</script>

<style>
body, html {
    margin: 0;
    padding: 0;
}

body {
  background-color: rgb(255, 255, 255);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #424242;
  margin-top: 60px;
}

#secao-principal{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

</style>
