<template>
  <form>
    <div class="capsula">
      <label>Qual tipo de objetos quer observar</label>
      <select id="tipoObj">
        <option value="0"></option>
        <option value="1">Objeto terrestres</option>
        <option value="2">Apenas a Lua</option>
        <option value="3">
          Lua em alta resolução, aglomerados de estrelas, objetos de alto brilho
        </option>
        <option value="4">Planetas do sistema solar</option>
        <option value="5">Nebulosas e galáxias</option>
      </select>
    </div>

    <div class="capsula">
      <label>Diâmetro da lente Objetiva</label>
      <input type="text" placeholder="70mm" id="diam"/>
    </div>

    <div class="capsula">
      <label>Distância focal da Objetiva</label>
      <input type="text" placeholder="500mm" id="disFocObj"/>
    </div>

    <div class="capsula">
      <label>Distância focal da lente Ocular</label>
      <input type="text" placeholder="16mm" id="disFocOcu"/>
    </div>

    <button v-on:click="pegaValor">Calcular</button>
  </form>
</template>

<script>
export default {
    name: 'Form',
    data: function() {
    return {
        valor: 16,
        outroValor: 32
    }
    },
    methods: {
        pegaValor: function () {
            // var tipoObj = document.getElementById("tipoObj").value
            var diam = document.getElementById("diam").value
            var disFocObj = document.getElementById("disFocObj").value
            var disFocOcu = document.getElementById("disFocOcu").value

            diam = parseInt(diam.toLowerCase().replace('mm','').trim())
            disFocObj = parseInt(disFocObj.toLowerCase().replace('mm','').trim())
            disFocOcu = parseInt(disFocOcu.toLowerCase().replace('mm','').trim())

            var F = (disFocObj+disFocOcu)/diam
            var amp = disFocObj/disFocOcu
            var ampMax = disFocObj/disFocOcu

            console.log("\n\n\n")
            console.log("Razão de focal: F/",F)
            console.log("Ampliação: ",amp)
            console.log("Ampliação máxima para o arranjo óptico: ",ampMax) // diam/25.4 é a converção para polegada

            return [diam, disFocObj, disFocOcu, F, amp, ampMax]
        }
    }
}

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