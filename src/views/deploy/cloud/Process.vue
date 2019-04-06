<template>
   <div>
		<h1>On-Premise 部署過程</h1>
      <p>
         <ul>
            <li>
               上傳新的網站檔案
            </li>
            <img style="margin:15px" src="https://localhost:44351/uploads/20190402/upload-site-files.jpg">

            <li>
               確認上傳後的檔案是否完整
            </li>
            <img style="margin:15px" src="https://localhost:44351/uploads/20190402/confirm-site-files.jpg">

            <li style="color:red">
               修改設定檔.資料庫連線從舊的網站設定檔copy過來。注意有沒有新的設定值。
            </li>
         </ul>
      </p>
	</div>
</template>


<script>

//import SQLBackup from '@/components/sqldb/Backup';

export default {
   name: 'DeployCloudProcess',
   components: {
      //'sql-backup' : SQLBackup
   }
}
</script>

