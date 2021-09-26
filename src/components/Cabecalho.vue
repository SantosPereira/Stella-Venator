<template>
  <div class="cabecalho">
    <h1>{{ msg }}</h1>
    <p>Monte seu telescópio e explore o universo.</p>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital@1&display=swap');

.cabecalho {
  margin-left: -900px;
}

h1 {
  /* background-color: rgb(39, 177, 99); */
  font-family: 'Ubuntu';
  font-size: 350%;
  color: rgb(39, 177, 99);

  /* padding: 0 10px 0 10px; */
}
</style>
