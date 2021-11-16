<template>
  <div id="ficha" v-if="dados['fichaVisivel']">
      <h1>Ficha técnica do conjunto óptico</h1>
      <table>
        <tbody>
          <tr>
            <td>Razão focal</td>
            <td>F/{{ dados["razaoF"].toFixed(2) }}</td>
          </tr>
          <tr>
            <td>Ampliação</td>
            <td>{{ dados["ampliacao"].toFixed(2) }}</td>
          </tr>
          <tr>
            <td>Ampliação máxima</td>
            <td>{{ dados["ampliacaoMaxima"].toFixed(2) }}</td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
export default {
  name: "FichaTecnica",
  props: {
    dados: {
      type: Object,
      required: true,
    },
  },
  data: function () {
    return {
      // fichaVisivel: false
    };
  },
};
</script>

<style scoped>
#ficha {
  display: flex;
  flex-direction: column;

  text-align: center;
  position: absolute;
  
  background-color: aliceblue;
  color: rgb(46, 46, 46);
  
  border: solid 1px transparent;
  border-radius: 15px;
  
  padding: 0 2rem 0 2rem;
  height: 22rem;
  z-index: 10;
}
</style>