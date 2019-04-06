<template>
   <div>
		<h1>On-Premise 部署前準備</h1>
      <div>
         <a href="#" v-for="(item, index) in menu" :key="index" 
         @click.prevent="select(item)" style="margin-left:30px">
            {{ item.title }}
         </a>
      </div>
      <h5 style="margin-top:30px">
         {{ title }}
      </h5>
      <div v-show="key === 'init-deplpoy'" style="margin-top:30px">
         <ul>
            <li>
               <a href="#install-iis">安裝IIS</a>
            </li>
            <li>
               <a href="#set-firewall">設定防火牆</a>
            </li>
            <li>
               <a href="#install-dotnet-runtime">安裝 .Net Runtime Windows Hosting Bundle</a>
            </li>
            <li>
               <a href="#install-url-rewite">安裝 IIS URL Rewrite</a>
            </li>
            <li>
               <a href="#install-mondodb">安裝 MongoDB</a>
            </li>
            <li>
               <a href="#install-ssms">安裝 SSMS</a>
            </li>
            <li>
               <a href="#sqlserver-init-settings">SQL Server 設定</a>
            </li>
            <li>
               <a href="#testing-app">使用測試網站</a>
            </li>
         </ul>
         <p id="install-iis">
            <iis-install />
         </p>

         <p id="set-firewall">
            <firewall-set />
         </p>

         <p id="install-dotnet-runtime">
            <dotnet-runtime />
         </p>

         <p id="install-url-rewite">
            <url-rewite-install />
         </p>

         <p id="install-mondodb">
            <mondodb-install />
         </p>

         <p id="install-ssms">
            <ssms-install />
         </p>

         <p id="sqlserver-init-settings">
            <ul>
               <li>啟用 SQL Server Authentication</li>
               <sql-server-enable-auth />

               <li>啟用 sa 管理員帳號</li>
                <sql-server-enable-sa />
            </ul>
           
         </p>

         <p id="testing-app">
            <ul>
               <li>使用測試網站</li>
               <deploy-test-app />
            </ul>
            
         </p>
         
      </div>
      <div v-if="key === 'version-update'">
         <ul>
            <li>
               在IIS停止網站服務 
            </li>
            <img style="margin:15px" src="https://localhost:44351/uploads/20190402/shut-down-sites.jpg">

            <li>
               備份現有SQL DB
            </li>
            <sql-backup />

            <li>
               複製備份網站檔案(尤其是設定檔)
            </li>
            <img style="margin:15px" src="https://localhost:44351/uploads/20190402/copy-site-files.jpg">

            <li>
               將原有網站檔案刪除
            </li>
            <img style="margin:15px" src="https://localhost:44351/uploads/20190402/delete-site-files.jpg">
            
         </ul>
      </div>
	</div>
</template>


<script>
import IISInstall from '@/components/deploy/local/iis/Install';
import LocalFirewallSet from '@/components/deploy/local/firewall/Set';
import UrlRewiteInstall from '@/components/deploy/local/prepare/UrlRewiteInstall';
import DotNetRunTime from '@/components/deploy/local/prepare/DotNetRunTime';
import MondoDBInstall from '@/components/mongodb/install/windows/CommunityEdition';
import SSMSInstall from '@/components/sqldb/install/windows/SSMS';
import SqlServerEnableServerAuth from '@/components/sqldb/settings/ServerAuth';
import SqlServerEnableSA from '@/components/sqldb/settings/EnableSA';
import DeployTestApp from '@/components/deploy/local/testing/TestApp';


import SQLBackup from '@/components/sqldb/Backup';

export default {
   name: 'DeployLocalPrepareView',
   components: {
      'sql-backup' : SQLBackup,
      'iis-install': IISInstall,
      'firewall-set': LocalFirewallSet,
      'url-rewite-install' : UrlRewiteInstall,
      'dotnet-runtime' : DotNetRunTime,
      'mondodb-install' : MondoDBInstall,
      'ssms-install' : SSMSInstall,
      'sql-server-enable-auth' : SqlServerEnableServerAuth,
      'sql-server-enable-sa' : SqlServerEnableSA,
      'deploy-test-app' : DeployTestApp
   },
   data(){
      return {
         title: '',
         key: '',

         menu: [
            { key: 'init-deplpoy', title: '初次安裝' },
            { key: 'version-update', title: '安裝更新' }
         ]
      }
   },
   beforeMount(){
      this.key = this.menu[0].key;
      this.title = this.menu[0].title;
	},
   methods: {
      select(item){
         this.key = item.key;
         this.title = item.title;
      }
	}
}
</script>

