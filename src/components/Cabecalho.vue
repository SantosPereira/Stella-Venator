<template>
  <div class="cabecalho">
    <div id="titulo">
      <h1>{{ msg }}</h1>
      <p>Monte seu telescópio e explore o universo.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cabecalho',
  props: {
    msg: String
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital@1&display=swap');

.cabecalho {
  margin-top: 0px;
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


@media (max-width: 440px) {
  .cabecalho {
    color: aliceblue;
    background-color: rgb(12, 12, 12);
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
}

</style>
