<template>
  <section>
    <div id="canva">
      <div id="ocular" class="itens-internos" @mouseover="animation"></div>
      <div id="tubo" class="itens-internos" v-bind:style="tubo" @mouseover="animation"></div>
      <div id="parasol" class="itens-internos" @mouseover="animation"></div>
      <!-- <div id="escala"></div> -->
    </div>
  </section>
</template>

<script>
export default {
  name: "AnimacaoTelescopio",
  props: {
    disFocObj: {
      type: Number,
      required: false,
    },
  },
  data: function() {
    return{
      // CSS
      tubo: {
        width: String(this.disFocObj)+'px'
      }
    }
  },
  methods: {
    animation: function() {
      console.log('Aqui vai ter a lógica de uma animação massa')
    }
  }

};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  align-items: baseline;
  justify-content: center;
}

#canva {
  width: 660px;
  height: 400px;

  background-color: rgb(42, 42, 42);

  border: solid 1px transparent;
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
#ocular {
  width: 30px;
  height: 20px;

  margin-left: 120px;
  margin-top: 175px;

  background-color: aliceblue;

  border: solid 1px transparent;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;

  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}
#tubo {
  width: 300px;
  height: 50px;

  margin-left: 1px;
  margin-top: 160px;

  background-color: aliceblue;

  border: solid 1px transparent;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

}
#parasol {
  width: 70px;
  height: 60px;

  margin-left: 2px;
  margin-top: 155px;
  margin-right: 90px;

  background-color: aliceblue;

  border: solid 1px transparent;
  border-radius: 4px;
}
.itens-internos {
  transform: scale(1);
  transition: 0.6s;
}
.itens-internos:hover {
  background-color: aquamarine !important;
  transform: scale(1.2);
  transition: 0.6s;
  z-index: 10;
  animation: destaque 2s;
}

/* Animação para o tubo principal */
.itens-internos:hover + #ocular {
  transform: translate3d(400px, 0, 0);
  transition: transform 1s;
}

@keyframes destaque {
  0% {}
  30% {
    transform: skewY(2deg);
  }
  70% {
    transform: translate3d(0px, -100px, 10px);
  }
  100% {
    transform: scale(1.4);
  }
}

@media (max-width: 480px) {
  section {
    align-items: baseline;
    justify-content:flex-start;
    transform: scale(0.545);
  }

  #canva {
    margin-left: 0;
  }
}
</style>