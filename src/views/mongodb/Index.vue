<template>
	<div>
      <h1>MongoDB</h1>

      <Commands />
     
      <ul>
         <li v-for="(item, index) in menu" :key="index">
            <a href="#" @click.prevent="select(item)">{{ item.title }}</a>
         </li>
      </ul>

      <h5>{{ title }}</h5>
		<config-file v-if="key === 'config-file'" />

      <create-admin-user v-if="key === 'create-admin-user'"/>

      <install-windows-community v-if="key === 'install-windows-community'"/>
	</div>
</template>

<script>
import ConfigFile from '@/components/mongodb/ConfigFile';
import CreateAdminUser from '@/components/mongodb/CreateAdminUser';
import InstallWindowsCommunityEdition from '@/components/mongodb/install/windows/CommunityEdition';
import Commands from '@/components/mongodb/Commands';

export default {
	name: 'MongoDBIndexView',
	components: {
		'config-file' : ConfigFile,
      'create-admin-user' : CreateAdminUser,
      'install-windows-community' : InstallWindowsCommunityEdition,
      Commands
   },
   data(){
      return {
         title: '',
         key: '',

         menu: [
            { key: 'install-windows-community', title: 'Install CommunityEdition (Windows)' },
            { key: 'config-file', title: 'Config File' },
            { key: 'create-admin-user', title: 'Create Admin User' }
         ]
      }
   },
	beforeMount(){
		
	},
	methods: {
      select(item){
         this.key = item.key;
         this.title = item.title;
      }
	}
}
</script>
