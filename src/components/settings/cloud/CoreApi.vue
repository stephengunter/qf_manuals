<template>
	<div>
		<h3>CoreApi  Settings</h3>
		
		<table class="table table-bordered" width="100%" cellspacing="0">
			  
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
					<th rowspan="3">ConnectionStrings</th>
					<td>DefaultDbCatalog</td>
					<td>string</td>
					<td>Initial Catalog=QuantiumFund</td>
					<td></td>
					
				</tr>
				<tr>
					
					<td>DefaultConnection</td>
					<td>string</td>
					<td>Server=localhost;User ID=username;Password=password</td>
					<td></td>
				
				</tr>
				<tr>
				
					<td>SignalRConnection</td>
					<td>string</td>
					<td></td>
					<td></td>
				</tr>


				<tr>
					<th rowspan="7">AppSettings</th>
					<td>UseShareDatabase</td>
					<td>boolean</td>
					<td>false</td>
					<td></td>
				</tr>
				<tr>
					
					<td>SharedWebApiEndpoint</td>
					<td>string</td>
					<td>https://sharedwebapi.quantiumfund.com</td>
					<td></td>
				</tr>
				<tr>
					
					<td>AllowCorsOrigins</td>
					<td>string[ ]</td>
					<td>[
						"https://quantiumcore.quantiumfund.com","https://admin.quantiumfund.com"
					]
					</td>
					<td></td>
					
				</tr>
				<tr>
					
					<td>UseOnPremiseNotifyService</td>
					<td>boolean</td>
					<td>true</td>
					<td></td>
				</tr>
				<tr>
					
					<td>CustomReportsSetID</td>
					<td>number</td>
					<td>0</td>
					<td></td>
				</tr>
				<tr>
					
					<td>CustomReportMasterFundId</td>
					<td>number[ ]</td>
					<td>0</td>
					<td></td>
				</tr>
				<tr>
					
					<td>UseWMPAccountingForMaserFundIds</td>
					<td>number[ ]</td>
					<td>90</td>
					<td></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>

export default {
	name: 'CoreApiCloudSettings',
	data () {
		return {
			
		}
	},
	methods: {
		
	}
}
</script>


