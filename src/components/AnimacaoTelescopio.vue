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
#canva {
  width: 660px;
  height: 400px;

  background-color: rgb(42, 42, 42);

  border: solid 1px transparent;
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  justify-content: center;
  align-items: center;
  align-content: space-between;
}
#ocular {
  width: 30px;
  height: 20px;

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

  background-color: aliceblue;

  border: solid 1px transparent;
  border-radius: 4px;
}
.itens-internos {
  transform: scale(1);
  transition: 2s;
  margin-right: 1px;
}
.itens-internos:hover {
  background-color: aquamarine !important;
  transform: scale(1.3);
  transition: 1s;
  z-index: 10;
}

/* .itens-internos:hover ~ .itens-internos {
  transform: translateX(200px);
} */


#tubo:hover ~ #parasol {
  transform: translateX(13rem);
  transition: .8s;
  visibility: hidden;
}

#ocular:hover ~ .itens-internos {
  transform: translateX(35rem);
  transition: .8s;
  visibility: hidden;
}

#parasol:hover {
  transform: translateX(2rem);
  transition: .8s;
}


/* Animação para o tubo principal */
/* .itens-internos:hover + #ocular {
  transform: translate3d(400px, 0, 0);
  transition: transform 1s;
}
*/

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