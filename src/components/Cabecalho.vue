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

</style>
