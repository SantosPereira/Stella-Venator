<template>
  <div id="ficha" v-if="dados['fichaVisivel']">
    <h1>Ficha técnica do conjunto óptico</h1>
    <table>
      <tbody>
        <tr>
          <td>Ampliação</td>
          <td>{{ dados["ampliacao"].toFixed(0) }}x</td>
        </tr>
        <tr>
          <td>Razão focal</td>
          <td>F/{{ dados["razaoF"].toFixed(2) }}</td>
        </tr>
        <tr>
          <td>Comprimento do tubo principal</td>
          <td>{{ dados["distanciaFocalObjetiva"] / 10 }}cm</td>
        </tr>
        <!-- <tr>
          <td>Distância Focal Total</td>
          <td>{{ dados["distanciaFocalOcular"] }}</td>
        </tr> -->
        <tr>
          <td>Peso estimado</td>
          <!-- Calculado assim: distanciaFocalDaObjetiva * pesoEstimadoDoTubo * pesoEstimadoDaObjetiva -->
          <td>
            {{
              (
                dados["distanciaFocalObjetiva"] * 1.3 +
                (dados["diametroObjetiva"] / 2) ** 2 *
                  3.14 *
                  (dados["diametroObjetiva"] * 0.05) *
                  0.015
              ).toFixed(0)
            }}g
          </td>
        </tr>
        <tr>
          <td>Ampliação máxima</td>
          <td>{{ dados["ampliacaoMaxima"].toFixed(0) }}x</td>
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

  text-align: left;
  position: absolute;

  background-color: aliceblue;
  color: rgb(46, 46, 46);

  border: solid 1px transparent;
  border-radius: 15px;

  padding: 0 2rem 0 2rem;
  height: 22rem;
  z-index: 10;

  box-shadow: 5px 4px 3px rgba(11, 24, 14, 0.418);
}
</style>