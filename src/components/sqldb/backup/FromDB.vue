<template>
	<ul>
      <li>
         建立一個備份用資料庫
      </li>
      <img style="margin:15px" src="https://localhost:44351/uploads/20190402/create-temp-backup-db.jpg">
      <li>
         在此備份資料庫上執行還原
      </li>
      <img style="margin:15px" src="https://localhost:44351/uploads/20190402/restore-db-1.jpg">
      <li>
         注意來源與目的地資料庫
      </li>
      <img style="margin:15px" src="https://localhost:44351/uploads/20190402/restore-from-db-2.jpg">
      <li>
         執行失敗的話，在選項設定"覆寫現有資料庫"
      </li>
      <img style="margin:15px" src="https://localhost:44351/uploads/20190402/restore-db-option-1.jpg">
   </ul>
</template>

<script>

export default {
   name: 'SqlDbBackupFromDB',
   props: {
		
	},
	data () {
		return {
			
		}
	},
	methods: {
		
	}
}
</script>


