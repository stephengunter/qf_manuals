<template>
   <div>
      <h1>On-Premise 設定檔說明</h1>
      <core-api-local-settings />
      <shared-api-local-settings />
      <edge-api-local-settings />
   </div>
</template>


<script>

import CoreApiLocalSettings from '@/components/settings/local/CoreApi';
import SharedApiLocalSettings from '@/components/settings/local/SharedApi';
import EdgeApiLocalSettings from '@/components/settings/local/EdgeApi';

export default {
   name: 'DeployCloudSettings',
   components: {
      'core-api-local-settings' : CoreApiLocalSettings,
      'shared-api-local-settings' : SharedApiLocalSettings,
      'edge-api-local-settings' : EdgeApiLocalSettings
   },
   data(){
		return {
			
		}
	}
}
</script>

