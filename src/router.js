import Vue from 'vue';
import VueRouter from 'vue-router';
import Cliente from './components/Cliente.vue'
import PaginaInicial from './components/PaginaInicial.vue'
import Cardapio from './components/Cardapio.vue'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Cliente',
            component: Cliente
        },
        {
            path: '/PaginaInicial',
            name: 'PaginaInicial',
            component: PaginaInicial
        },
        {
            path: '/Cardapio',
            name: 'Cardapio',
            component: Cardapio
        }
    ]
});