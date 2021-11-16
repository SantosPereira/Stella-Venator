<template>
  <form>
    <div class="capsula">
      <label>Qual tipo de objetos quer observar</label>
      <select id="tipoObj">
        <option value="0"></option>
        <option value="1">Objeto terrestres</option>
        <option value="2">Apenas a Lua</option>
        <option value="3">
          Lua em alta resolução, aglomerados de estrelas
        </option>
        <option value="4">Planetas do sistema solar</option>
        <option value="5">Nebulosas e galáxias</option>
      </select>
    </div>

    <div class="capsula">
      <label>Diâmetro da lente Objetiva</label>
      <input
        type="text"
        placeholder="70mm"
        id="this.diam"
        v-model="this.diam"
      />
    </div>

    <div class="capsula">
      <label>Distância focal da Objetiva</label>
      <input
        type="text"
        placeholder="500mm"
        id="this.disFocObj"
        v-model="this.disFocObj"
      />
    </div>

    <div class="capsula">
      <label>Distância focal da lente Ocular</label>
      <input
        type="text"
        placeholder="16mm"
        id="this.disFocOcu"
        v-model="this.disFocOcu"
      />
    </div>

    <!-- <div id="botao" type="button" v-on:click="retornaDados">Calcular</div> -->
    <button id="botao" type= "button" v-on:click="retornaDados">Calcular</button>
  </form>
</template>

<script>
export default {
  name: "ParametrosDoTele",
  data: function () {
    return {
      diam: "",
      disFocObj: "",
      disFocOcu: "",
      F: "",
      amp: "",
      ampMax: "",
      visivel: false,
    };
  },
  emits: ["vai"],
  methods: {
    retornaDados: function () {
      this.diam = parseInt(
        String(this.diam).toLowerCase().replace("mm", "").trim()
      );
      this.disFocObj = parseInt(
        String(this.disFocObj).toLowerCase().replace("mm", "").trim()
      );
      this.disFocOcu = parseInt(
        String(this.disFocOcu).toLowerCase().replace("mm", "").trim()
      );

      this.F = (this.disFocObj + this.disFocOcu) / this.diam;
      this.amp = this.disFocObj / this.disFocOcu;
      this.ampMax = 60 * (this.diam / 25.4); // this.diam/25.4 é a converção para polegada

      this.visivel = !this.visivel;

      this.dados = {
        diametroObjetiva: this.diam,
        distanciaFocalObjetiva: this.disFocObj,
        distanciaFocalOCular: this.disFocOcu,
        razaoF: this.F,
        ampliacao: this.amp,
        ampliacaoMaxima: this.ampMax,

        fichaVisivel: this.visivel,
      };

      // this.dados = [this.disFocObj]
      this.$emit("vai", this.dados);
    },
  },
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

select {
  width: 25rem;
}

input {
  width: 25rem;
  height: 50px;
  font-size: 2em;

  border-radius: 10px;
  border-style: solid;
  border-color: rgb(39, 177, 99);
}

#botao {
  background-color: rgb(39, 177, 99);
  color: rgb(255, 255, 255);
  padding: 4px;
  border: solid 1px transparent;
  border-radius: 0;
}
#botao:hover {
  filter:opacity(0.8);
  filter: brightness(0.7);
  transition: filter 3s;
}

@media (max-width: 480px) {
  select, input {
    width: 20rem;
  }
}
</style>