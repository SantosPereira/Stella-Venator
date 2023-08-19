<template>
  <div class="cabecalho">
    <div id="titulo">
      <h1><a href="/">{{ msg }}</a></h1>
      <p>Monte seu telescópio e explore o universo.</p>
    </div>
    <!-- <Acoes class="acoes"/> -->
  </div>
</template>

<script>
// import Acoes from "./Acoes.vue";
export default {
  name: 'Cabecalho',
  props: {
    msg: String
  },
  components: {
    // Acoes
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital@1&display=swap');

.cabecalho {
  margin-top: -50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

#titulo {
  width: 40%;
  display: flex;
  flex-direction: column;
}
h1 {
  font-family: 'Ubuntu';
  font-size: 3.5rem;
  color: rgb(39, 177, 99);
  margin-bottom: 0;
}
p {
  font-size: 1.2rem;
}
a {
  text-decoration: none;
  color: unset;
}


@media (max-width: 440px) {
  .cabecalho {
    color: aliceblue;
    background-color: rgb(42, 42, 42);
    margin-top: -80px;
  }
  #titulo {
    margin-top: 80px;
    width: 100%;
  }
  h1 {
    font-size: 2rem;
  }
  p {
    font-size: 0.8rem;
  }
  .acoes {
    display: none;
  }
}

</style>
