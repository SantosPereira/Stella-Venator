<template>
  <footer>
      <div id="f-left">
          <p>Se esse material inspirou você de alguma forma, não deixe de me mandar</p>
          <p>uma mensagem para que eu saiba que estou fazendo um bom trabalho :)</p>
      </div>
      <div id="f-right">
        <h3>Ajude a manter este projeto</h3>

        <p id="pix">Pix</p>
        <img src="../../public/pix-qr-code.png" width="150" height="150">
        <p>Chave: a949f1db-17b2-42fe-b5f7-8b09f88dad4f</p>
      </div>
  </footer>
<p>Desenvolvido com ❤ em Pernambuco</p>
</template>

<script>
export default {
    name: "Rodape"
}
</script>

<style scoped>
    footer {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        /* align-items: center; */
        justify-content: center;
    }

    #f-left {
        font-size: 0.8em;
         display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: left;
        justify-content: center;

    }

    #f-right {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        margin-left: 30%;
    }

    #pix {
        padding: 10px;
        padding-top: 2px;
        padding-bottom: 2px;
        width:fit-content;
        background-color: tomato;
        border: solid 1px transparent;
        border-radius: 5px;
    }

    /* #f-left p {
        text-align: justify;

    }  */
</style>