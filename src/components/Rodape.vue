<template>
  <footer>
      <div id="f-left">
          <span>
              <p>Se esse material inspirou você de alguma forma, não deixe de me mandar</p>
              <p>uma mensagem, para que eu saiba que estou fazendo um bom trabalho :)</p>
            </span>
            <div class="lista-horinzontal"> 
                <a href="https://www.instagram.com/pedro.hsp0/" target="_blank"><img src="../../public/static/icons/instagram_preto.png" width="25" height="25"></a>
                <a href="https://github.com/SantosPereira" target="_blank"><img src="../../public/static/icons/github_preto.png" width="25" height="25"></a>
                <a href="https://www.linkedin.com/in/santos-pereira/" target="_blank"><img src="../../public/static/icons/linkedin_preto.png" width="25" height="25"></a>
            </div>
      </div>
      <div id="f-right">
        <h3>Ajude a manter este projeto</h3>

        <p id="pix">Pix</p>
        <img src="../../public/static/pix-5.png" width="150" height="150">
        <p>Chave: a949f1db-17b2-42fe-b5f7-8b09f88dad4f</p>
      </div>
  </footer>
<p id="fim">Desenvolvido com ❤ em Pernambuco</p>
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
        font-size: 1em;
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

        margin-left: 12%;
        margin-right: 8%;
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

    .lista-horinzontal {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }

    #fim {
        margin-top: 50px;
    }
</style>