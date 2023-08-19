<template>
    <div>
        <section>
            <h2>Sobre</h2>
            <p>Stella Venator é um projeto open-source de divulgação científica.</p>
            <p>O objetivo dessa página é fornecer ferramentas para facilitar os cálculos ópticos</p>
            <p>necessários para a montagem de um telescópio refrator caseiro barato e simples.</p>
        </section>
        <section>
            <h2>Como usar</h2>
            <p>Para usar o Stella Venator, basta preencher os campos com os dados do seu telescópio.</p>
            <br/>
            <br/>
            <br/>
            <p>Entre na nossa comunidade no discord</p><a href="https://discord.gg/wwpf2jUK">https://discord.gg/wwpf2jUK</a>
        </section>
    </div>
</template>

<script>
export default {
    name: 'CorpoDoSite'
}
</script>

<style scoped>
body,
html {
    margin: 0;
    padding: 0;
}

section {
    margin-top: 120px;
    height: 550px;
    background-color: rgb(42, 42, 42);
    color: aliceblue;
    padding: 30px;
}

h2 {
    font-size: 4em;
    color: aquamarine;
}

p {
    font-size: 1.5em;
}

@media (max-width: 480px) {
    h2 {
        font-size: 3em;
        color: aquamarine;
    }

    p {
        font-size: 1.25em;
    }
}
</style>