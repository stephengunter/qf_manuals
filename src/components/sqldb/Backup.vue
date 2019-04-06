<template>
	<div>
		<h1 v-if="show_title">SQL Databse備份</h1>
		<h5>方式1. 建立.bak備份檔案</h5>
		<bak-file />

		<h5>方式2. 直接備份到另一個新的資料庫</h5>
		<from-db />
		
		
	</div>
</template>

<script>

import BakFile from './backup/BakFile';
import FromDB from './backup/FromDB';

export default {
	name: 'SqlDbBackup',
	components: {
		'bak-file' : BakFile,
		'from-db' : FromDB
	},
   props: {
		show_title: {
         type: Boolean,
         default: false
      },
	},
	data () {
		return {
			
		}
	},
	methods: {
		
	}
}
</script>


