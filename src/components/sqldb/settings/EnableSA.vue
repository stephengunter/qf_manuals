<template>
	<ul>
		
      <img style="margin:15px" src="https://localhost:44351/uploads/20190402/sqlserver-sa-enable.jpg">
		<li>
			設定適當的密碼
		</li>
		<img style="margin:15px" src="https://localhost:44351/uploads/20190402/sqlserver-sa-enable-1.jpg">
		
		<br>
		<img style="margin:15px" src="https://localhost:44351/uploads/20190402/sqlserver-sa-enable-3.jpg">
		<restart />
		
		<li>
			以sa帳號測試可否連線
		</li>
		<img style="margin:15px" src="https://localhost:44351/uploads/20190402/sqlserver-sa-enable-4.jpg">
		
    

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


