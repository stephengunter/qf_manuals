<template>
   <div>
		<h1 class="h3">Domains 網域設定</h1>
      <table class="table table-bordered" width="100%" cellspacing="0">
         <thead>
				<tr>
					<th>Site</th>
					<th>Domain</th>
					
				</tr>
			</thead>
         <tbody>
				<tr>
					<td>CoreApi</td>
					<td>qfcoreapi.{client_domain}</td>
				</tr>
            <tr>
					<td>SharedApi</td>
					<td>qfsharedapi.{client_domain}</td>
				</tr>
            <tr>
					<td>EdgeApi</td>
					<td>qfedgeapi.{client_domain}</td>
				</tr>
            <tr>
					<td>Core UI</td>
					<td>qfcore.{client_domain}</td>
				</tr>
            <tr>
					<td>Edge UI</td>
					<td>qfedge.{client_domain}</td>
				</tr>
         </tbody>   
      </table>
	</div>
</template>


<script>
export default {
   name: 'SSLView'
}
</script>

