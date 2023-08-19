<template>
  <div id="ficha" v-if="dados['fichaVisivel']">
    <h1>Ficha técnica do conjunto óptico</h1>
    <table>
      <tbody>
        <tr>
          <td>Ampliação</td>
          <td style="text-align: center">{{ dados["ampliacao"].toFixed(0) }}x</td>
        </tr>
        <tr>
          <td>Razão focal</td>
          <td style="text-align: center">F/{{ dados["razaoF"].toFixed(2) }}</td>
        </tr>
        <tr>
          <td>Comprimento do tubo principal</td>
          <td style="text-align: center">{{ dados["distanciaFocalObjetiva"] / 10 }}cm</td>
        </tr>
        <!-- <tr>
          <td>Distância Focal Total</td>
          <td>{{ dados["distanciaFocalOcular"] }}</td>
        </tr> -->
        <tr>
          <td>Peso estimado</td>
          <!-- Calculado assim: distanciaFocalDaObjetiva * pesoEstimadoDoTubo * pesoEstimadoDaObjetiva -->
          <td style="text-align: center">
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
          <td style="text-align: center">{{ dados["ampliacaoMaxima"].toFixed(0) }}x</td>
        </tr>
      </tbody>
    </table>
    <router-link to="/blog/post/calculo">Como isso foi calculado?</router-link>
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

a {
  font-size: 0.8em;
  text-decoration: none;
  color: rgb(43, 133, 58);
}


@media (max-width: 480px) {
  #ficha {
    display: flex;
    flex-direction: column;

    text-align: left;
    position: fixed;

    background-color: rgb(255, 255, 255);
    color: rgb(46, 46, 46);

    border: solid 1px transparent;
    border-radius: 15px;

    padding: 0 2rem 0 2rem;
    height: 22rem;
    width: 70%;
    z-index: 10;

    box-shadow: 1px 8px 15px 0px rgba(0,0,0,0.35);
  }

  td {
    border: 1px solid rgba(0, 0, 0, 0.068);
    padding: 5px;
  }

  a {
    margin-left: 9.5rem;
    margin-top: 1.5rem;
  }
}

@media screen {
  #ficha {
    display: flex;
    flex-direction: column;

    text-align: left;
    position: fixed;

    background-color: rgb(255, 255, 255);
    color: rgb(46, 46, 46);

    border: solid 1px transparent;
    border-radius: 15px;

    padding: 0 2rem 0 2rem;
    height: 20rem;
    z-index: 10;

    box-shadow: 1px 8px 15px 0px rgba(0,0,0,0.35);
  }

  
  td {
    border: 1px solid rgba(0, 0, 0, 0.068);
    padding: 5px;
  }
  a {
    margin-top: 2rem;
    text-align: center;
  }
}
</style>