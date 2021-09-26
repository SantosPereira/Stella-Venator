<template>
  <Cabecalho msg="Stella Venator"/>
  <div id="secao-principal">
    <AnimacaoTelescopio/>
    <ParametrosDoTele/>
  </div>
</template>

<script>
import AnimacaoTelescopio from './components/AnimacaoTelescopio.vue'
import Cabecalho from './components/Cabecalho.vue'
import ParametrosDoTele from './components/ParametrosDoTele.vue'

export default {
  name: 'App',
  components: {
    Cabecalho,
    AnimacaoTelescopio,
    ParametrosDoTele
  }
}
</script>

<style>
body {
  background-color: #000000;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ecf2f7;
  margin-top: 60px;
}

#secao-principal{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

h1 {
  font-size: 300%;
  color: rgb(19, 165, 80);
}

</style>
