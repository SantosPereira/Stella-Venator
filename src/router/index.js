import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

import Home from "../views/Home"
import Blog from "../views/conteudo/Blog"
import Projetos from "../views/conteudo/Projetos"
import Comunidade from "../views/conteudo/Comunidade"
import Ajuda from "../views/conteudo/Ajuda"
import Doe from "../views/conteudo/Doe"

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog
    },
    {
        path: '/projetos',
        name: 'Projetos',
        component: Projetos
    },
    {
        path: '/comunidade',
        name: 'Comunidade',
        component: Comunidade
    },
    {
        path: '/ajuda',
        name: 'Ajuda',
        component: Ajuda
    },
    {
        path: '/doe',
        name: 'Doe',
        component: Doe
    },
];


const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;