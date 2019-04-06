<template>
	<ul v-if="option === 'cm'">
      <li>
         從 SQL Server Configuration Manager 重啟服務
      </li>
      <img style="margin:15px" src="https://localhost:44351/uploads/20190402/sql-server-restart-from-cm.jpg">
   </ul>
   <ul v-else>

   </ul>
</template>

<script>

export default {
   name: 'SqlServerRestart',
   props :{
      option: {
         type: String,
         default: 'cm'
      }
   },
	data () {
		return {
			
		}
	},
	methods: {
		
	}
}
</script>


