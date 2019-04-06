<template>
	<div>
		<h3>EdgeApi  Settings</h3>
		
		<table class="table table-bordered" cellspacing="0">
			  
			<thead>
				<tr>
					<th>Section</th>
					<th>Key</th>
					<th>Type</th>
					<th>Value (Example)</th>
					<th>Description</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th rowspan="3">MongoConnection</th>
					<td>Database</td>
					<td>string</td>
					<td>QuantiumShared</td>
					<td></td>
					
				</tr>
				<tr>
					
					<td>ConnectionString</td>
					<td>string</td>
					<td>mongodb://username:password@localhost:27017</td>
					<td></td>
				
				</tr>
				<tr>
				
					<td>EnabledSSL</td>
					<td>boolean</td>
					<td>true</td>
					<td></td>
				</tr>

				<tr>
					<th>ConnectionStrings</th>
					<td>StorageConnection</td>
					<td>string</td>
					<td>DefaultEndpointsProtocol=https;
						AccountName=accountname;
						AccountKey=accountkey;
						EndpointSuffix=core.chinacloudapi.cn
					</td>
					<td></td>
				</tr>

				<tr>
					<th rowspan="5">AppSettings</th>
					<td>UseShareDatabase</td>
					<td>boolean</td>
					<td>false</td>
					<td></td>
				</tr>

				<tr>
					
					<td>SharedWebApiEndpoint</td>
					<td>string</td>
					<td>https://sharedapi.quantiumfund.com</td>
					<td></td>
				</tr>
				<tr>
					
					<td>COREWebApiEndpoint</td>
					<td>string</td>
					<td>https://coreapi.quantiumfund.com</td>
					<td></td>
				</tr>
				
				<tr>
					<td>AllowCorsOrigins</td>
					<td>string[ ]</td>
					<td>[
						"https://quantiumcore.quantiumfund.com",
						"https://quantiumedge.quantiumfund.com",
						"https://admin.quantiumfund.com"
					]
					</td>
					<td></td>
					
				</tr>
				<tr>
					
					<td>PowerBISettings</td>
					<td>object</td>
					<td>
						{<br>
							"ReportEnvironment": "BETA", <br>
							"Username": "Username",<br>
							"Password": "Password",<br>
							"ApplicationId": "ApplicationId",<br>
							"ApplicationSecret": "ApplicationSecret"<br>
					}
					</td>
					<td></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>

export default {
	name: 'EdgeApiCloudSettings',
	data () {
		return {
			
		}
	},
	methods: {
		
	}
}
</script>


