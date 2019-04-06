<template>
	<ul>
      <img style="margin:15px" src="https://localhost:44351/uploads/20190402/sqlserver-enable-server-auth.jpg">
		<br>
		<img style="margin:15px" src="https://localhost:44351/uploads/20190402/sqlserver-enable-server-auth-1.jpg">
		
      <restart />
      
   </ul>
</template>

<script>
import SqlServerRestart from '@/components/sqldb/Restart';

export default {
   name: 'SqlServerEnableServerAuth',
   components: {
      'restart' : SqlServerRestart
   },
	data () {
		return {
			
		}
	},
	methods: {
		
	}
}
</script>


