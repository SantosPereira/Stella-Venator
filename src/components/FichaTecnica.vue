<template>
  <div id="ficha" v-if="dados['fichaVisivel']">
    <div>
      <h1>Ficha técnica do conjunto óptico</h1>
        <p>Razão focal: F/{{ dados["razaoF"].toFixed(2) }}</p>
        <p>Ampliação: {{ dados["ampliacao"].toFixed(2) }}</p>
        <p>Ampliação máxima: {{ dados["ampliacaoMaxima"].toFixed(2) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FichaTecnica",
  props: {
    dados: {
      type: JSON,
      required: true,
    },
  },
  data: function() {
      return{
        // fichaVisivel: false
      }
  }
};
</script>

<style scoped>
#ficha {
  z-index: 1000;
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-left: 50%;
  background-color: rgb(29, 29, 29);
  border: solid 1px transparent;
  border-radius: 10px;
  padding: 20px;
  color: aliceblue;
  height: 350px;
}
</style>