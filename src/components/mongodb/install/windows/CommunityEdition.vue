<template>
	<ul>
      <li>
         確認 MongoDB 是否安裝. 預設路徑 C:\Program Files\MongoDB\Server
      </li>
      <img style="margin:15px" src="https://localhost:44351/uploads/20190402/mongodb-check.jpg">
      <li>
         安裝 MongoDB 下載點  https://www.mongodb.com/download-center/community
      </li>
      <img style="margin:15px" src="https://localhost:44351/uploads/20190402/mongodb-download.jpg">
      <br>
      <img style="margin:15px" src="https://localhost:44351/uploads/20190402/mongodb-install.jpg">
      <br>
      <img style="margin:15px" src="https://docs.mongodb.com/manual/_images/windows-installer.png">
         <br>
      <img style="margin:15px" src="https://localhost:44351/uploads/20190402/mongodb-install-2.jpg">
      <li>
         確認資料夾 c:\data\db 與 c:\data\log 是否存在，如果不存在則建立之. (以Administrator身分執行指令 mkdir c:\data\db , mkdir c:\data\log)
      </li>
      <img style="margin:15px" src="https://localhost:44351/uploads/20190402/mongodb-install-3.jpg">
         
      <li>
         安裝程式執行完畢後，MongoDB service應該已經啟動。測試 MongoDB  路徑: C:\Program Files\MongoDB\Server\{version}\bin    檔案 mongo.exe
      </li>
      <img style="margin:15px" src="https://localhost:44351/uploads/20190402/mongodb-test-mongo.jpg">
      <br>
      <img style="margin:15px" src="https://localhost:44351/uploads/20190402/mongodb-test-mongo-1.jpg">
      
      <create-admin-user />
   </ul>
</template>

<script>

import CreateAdminUser from '@/components/mongodb/CreateAdminUser';

export default {
   name: 'MondoDBInstallWindowsCommunityEdition',
   components: {
      'create-admin-user' : CreateAdminUser
   },
	data () {
		return {
			
		}
	},
	methods: {
		
	}
}
</script>


