<template>
  <form>
    <div class="capsula">
      <label>Qual tipo de objetos quer observar</label>
      <select>
        <option></option>
        <option>Objeto terrestres</option>
        <option>Apenas a Lua</option>
        <option>
          Lua em alta resolução, aglomerados de estrelas, objetos de alto brilho
        </option>
        <option>Planetas do sistema solar</option>
        <option>Nebulosas e galáxias</option>
      </select>
    </div>

    <div class="capsula">
      <label>Diâmetro da lente Objetiva</label>
      <input type="text" placeholder="70mm" />
    </div>

    <div class="capsula">
      <label>Distância focal da Objetiva</label>
      <input type="text" placeholder="500mm" />
    </div>

    <div class="capsula">
      <label>Distância focal da lente Ocular</label>
      <input type="text" placeholder="20mm" />
    </div>
  </form>
</template>

<script>
export default {
  name: "ParametrosDoTele",
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: space-between;

  margin-top: 20px;
  margin-left: 20px;
  height: 350px;
}

.capsula {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: space-between;

  margin-bottom: 30px;
}

input {
    width: 400px;
    height: 50px;
    font-size: 2em;

    border-radius: 10px;
    border-style:solid;
    border-color: rgb(39, 177, 99);
}

</style>