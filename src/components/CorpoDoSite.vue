<template>
  <section>
      <h2>Stella... o que??</h2>
      <p>Stella Venator, do latim, caçador de estrelas,
        é um projeto <i>open-source</i> de divulgação científica,<br></p>
      <p>facilitando os cálculos ópticos necessários para a montagem<br></p>
      <p> de um telescópio refrator caseiro barato e simples.<br></p>
  </section>
</template>

<script>
export default {
    name: 'CorpoDoSite'
}
</script>

<style scoped>
    body, html {
        margin: 0;
        padding: 0;
    }

    section {
        margin-top: 120px;
        height: 600px;
        background-color: black;
        color: aliceblue;
        padding: 30px;
    }

    h2 {
        font-size: 4em;
        color: aquamarine;
    }

    p {
        font-size: 1.5em;
    }

</style>