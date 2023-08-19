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
import ComoFoiCalculado from "../views/calculo/ComoFoiCalculado"

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog,
        children: [{
                path: 'calculo',
                name: 'ComoFoiCalculado',
                component: ComoFoiCalculado
                // component: () =>
                //     import ('../views/calculo/ComoFoiCalculado.vue')

        }]
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
    {
        path: '/blog/post/calculo',
        name: 'ComoFoiCalculado',
        component: ComoFoiCalculado
    },
];


const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;