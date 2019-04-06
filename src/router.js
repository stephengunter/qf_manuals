import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/deploy/local/downloads',
			component: () => import('./views/deploy/local/Downloads.vue')
		},
		{
			path: '/deploy/cloud/prepare',
			component: () => import('./views/deploy/cloud/Prepare.vue')
		},
		{
			path: '/deploy/local/prepare',
			component: () => import('./views/deploy/local/Prepare.vue')
		},
		{
			path: '/deploy/cloud/process',
			component: () => import('./views/deploy/cloud/Process.vue')
		},
		{
			path: '/deploy/local/process',
			component: () => import('./views/deploy/local/Process.vue')
		},
		{
			path: '/deploy/cloud/settings',
			component: () => import('./views/deploy/cloud/Settings.vue')
		},
		{
			path: '/deploy/local/settings',
			component: () => import('./views/deploy/local/Settings.vue')
		},
		{
			path: '/deploy/domains',
			component: () => import('./views/deploy/Domains.vue')
		},
		{
			path: '/mongodb',
			component: () => import('./views/mongodb/Index.vue')
		}
	]
})
