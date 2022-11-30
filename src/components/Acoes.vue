<template>
    <div>
        <router-link to="/blog"><button type="button">Blog</button></router-link>
        <router-link to="/projetos"><button type="button">Projetos</button></router-link>
        <router-link to="/comunidade"><button type="button">Comunidade</button></router-link>
        <router-link to="/ajuda"><button type="button">Ajuda</button></router-link>
        <router-link to="/doe"><button type="button">Doe</button></router-link>
    </div>
</template>

<script>
export default {
    name: 'Acoes'
}
</script>

<style>
button {
    font-size: 1.2rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: rgb(39, 177, 99);
    color: white;
    margin: 5px;
    cursor: pointer;
}

a {
    text-decoration: none;
    color: unset;
}
</style>