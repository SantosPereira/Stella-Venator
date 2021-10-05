<template>
    <div id="canva">
        <div id="ocular"></div>
        <div id="tubo"></div>
        <div id="parasol"></div>
    </div>
</template>

<script>
export default {
    name:'AnimacaoTelescopio'
}
</script>

<style scoped>
    #canva {
        width: 600px;
        height: 400px;
        margin: 20px;
        margin-left: 70px;

        background-color: rgb(28, 28, 28);

        border: solid 1px transparent;
        border-radius: 10px;

        display: flex;
    }

    #ocular {
        width: 30px;
        height: 20px;

        background-color: aliceblue;

        border: solid 1px transparent;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;

        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        margin-left: 90px;
        margin-top: 170px;
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
        margin-left: 2px;
        margin-top: 160px;
    }

    #parasol {
        width: 70px;
        height: 60px;

        background-color: aliceblue;

        border: solid 1px transparent;
        border-radius: 4px;
        /* border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;

        border-top-left-radius: 50%;
        border-bottom-left-radius: 50%; */
        margin-left: 2px;
        margin-top: 155px;
    }

</style>