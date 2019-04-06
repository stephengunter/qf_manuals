<template>
	<table class="table table-bordered" width="100%" cellspacing="0">
      <thead>
         <tr>
            <th style="width: 20%" ></th>
            <th>指令</th>
         </tr>
      </thead>
      <tbody>
         <tr>
            <th>以帳號密碼連線</th>
            <td>mongo -u "your_username" -p "your_password" --authenticationDatabase "admin"</td>
         </tr>
         <tr>
            <th>版本</th>
            <td>db.version();</td>
         </tr>
         <tr>
            <th>資料庫列表</th>
            <td>show dbs</td>
         </tr>
         <tr>
            <th>資料庫列表</th>
            <td>show dbs</td>
         </tr>
         <tr>
            <th>切換資料庫</th>
            <td>use dbname</td>
         </tr>
         <tr>
            <th>collections 列表</th>
            <td>show collections</td>
         </tr>
         <tr>
            <th>特定collection所有資料列表</th>
            <td>
               db.collection_name.find()

            </td>
         </tr>
         <tr>
            <th>變更密碼</th>
            <td>
               use admin
               <br>
               db.changeUserPassword("username","new password")
              
            </td>
         </tr>
         <tr>
            <th>刪除資料庫</th>
            <td>use dbname
               <br>
               db.dropDatabase()
            </td>
         </tr>
      </tbody>
   </table>
			  
</template>

<script>

export default {
	name: 'MongoDBCommands',
	data () {
		return {
			
		}
	},
	methods: {
		
	}
}
</script>


