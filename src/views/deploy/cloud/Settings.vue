<template>
   <div>
      <h1>Cloud 設定檔說明</h1>
      <core-api-cloud-settings />
      <shared-api-cloud-settings />
      <edge-api-cloud-settings />
	</div>
</template>


<script>

import CoreApiCloudSettings from '@/components/settings/cloud/CoreApi';
import SharedApiCloudSettings from '@/components/settings/cloud/SharedApi';
import EdgeApiCloudSettings from '@/components/settings/cloud/EdgeApi';

export default {
   name: 'DeployCloudSettings',
   components: {
      'core-api-cloud-settings' : CoreApiCloudSettings,
      'shared-api-cloud-settings' : SharedApiCloudSettings,
      'edge-api-cloud-settings' : EdgeApiCloudSettings
   },
   data(){
		return {
			
		}
	}
}
</script>

