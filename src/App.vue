<template>
	<div id="wrapper">
		<SideBar />
		<div id="content-wrapper" class="d-flex flex-column">
			<div id="content">
				<TopBar v-if="false"/>
				<div class="container-fluid">
					<router-view/>
				</div>
			</div>
			 
			
		</div>
		
	</div>
</template>

<script>

import SideBar from './components/layouts/SideBar';
import TopBar from './components/layouts/TopBar';

export default {
	name: 'App',
	components: {
		SideBar,
		TopBar
	},
	data () {
		return {
			
		}
	},
	methods: {
		
	}
}
</script>


