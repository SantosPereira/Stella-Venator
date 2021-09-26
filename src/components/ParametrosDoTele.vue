<template>
    <form>
        <label>Qual tipo de objetos quer observar</label>
        <select>
            <option></option>
            <option>Objeto terrestres</option>
            <option>Apenas a Lua</option>
            <option>Lua em alta resolução, aglomerados de estrelas, objetos de alto brilho</option>
            <option>Planetas do sistema solar</option>
            <option>Nebulosas e galáxias</option>
        </select>

        <label>Diâmetro do lente Objetiva</label>
        <input type="text" placeholder="70mm"/>

        <label>Distância focal</label>
        <input type="text" placeholder="500mm"/>

        <label>Distância focal</label>
        <input type="text" placeholder="500mm"/>


    </form>
</template>

<script>
export default {
    name: 'ParametrosDoTele'
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  margin-top: 20px;
  height: 350px;
}

</style>