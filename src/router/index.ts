import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import BienView from '../views/BienView.vue'
import MouvementView from '../views/MouvementView.vue'
import AmortissementView from '../views/AmortissementView.vue'
import CategorieView from '../views/CategorieView.vue'
import TypeView from '../views/TypeView.vue'
import FournisseurView from '../views/FournisseurView.vue'
import ServiceView from '../views/ServiceView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView
  },
  {
    path: '/bien',
    name: 'classBien',
    component: BienView
  },
  {
    path: '/mouvement',
    name: 'classMouvement_Bien',
    component: MouvementView
  },
  {
    path: '/amortissement',
    name: 'classAmortissement_Bien',
    component: AmortissementView
  },
  {
    path: '/categorie2',
    name: 'classCategorie_Bien',
    component: CategorieView
  },
  {
    path: '/type',
    name: 'classType_Bien',
    component: TypeView
  },
  {
    path: '/fournisseur',
    name: 'classFournisseur',
    component: FournisseurView
  },
  {
    path: '/service',
    name: 'classService',
    component: ServiceView
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import ('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
 

  
})

export default router
