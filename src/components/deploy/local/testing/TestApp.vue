<template>
	<ul>
      <li>
         建立資料夾 C:\WebApps\blog
      </li>
       <img style="margin:15px" src="https://localhost:44351/uploads/20190402/deploy-test-app-1.jpg">
		
      <li>
         將測試網站檔案上傳 
      </li>
      <img style="margin:15px" src="https://localhost:44351/uploads/20190402/deploy-test-app.jpg">
		
      <li>
         設定appsetting.json 檔案中的連線字串 
      </li>
      <img style="margin:15px" src="https://localhost:44351/uploads/20190402/deploy-test-app-2.jpg">
      <li>
         在IIS新增網站
      </li>
      <img style="margin:15px" src="https://localhost:44351/uploads/20190402/deploy-test-app-6.jpg">
      <li>
         在IIS設定Application Pools
      </li>
      <img style="margin:15px" src="https://localhost:44351/uploads/20190402/deploy-test-app-3.jpg">
      <br>
      <img style="margin:15px" src="https://localhost:44351/uploads/20190402/deploy-test-app-4.jpg">
      <li>
         重新啟動測試網站
      </li>
      <img style="margin:15px" src="https://localhost:44351/uploads/20190402/deploy-test-app-5.jpg">
      <li>
         瀏覽器訪問localhost 如果網站正常顯示，連結網址 localhost/blogs
      </li>
      <img style="margin:15px" src="https://localhost:44351/uploads/20190402/deploy-test-app-7.jpg">
      <li>
         測試新增一筆記錄
      </li>
      <img style="margin:15px" src="https://localhost:44351/uploads/20190402/deploy-test-app-8.jpg">
      <br>
      <img style="margin:15px" src="https://localhost:44351/uploads/20190402/deploy-test-app-9.jpg">
      <li>
         運作正常的話，會在SQL Server 與 MongoDB 各新增一筆紀錄
      </li>
      <img style="margin:15px" src="https://localhost:44351/uploads/20190402/deploy-test-app-10.jpg">
      <li>
         到SSMS確認SQL Server 建立了這個測試網站資料庫
      </li>
      <img style="margin:15px" src="https://localhost:44351/uploads/20190402/deploy-test-app-11.jpg">
      <li>
         查看MongoDB也建立了這個測試網站資料庫
      </li>
      <img style="margin:15px" src="https://localhost:44351/uploads/20190402/deploy-test-app-12.jpg">
   </ul>
</template>

<script>

export default {
   name: 'DeployTestApp',
	data () {
		return {
			
		}
	},
	methods: {
		
	}
}
</script>


