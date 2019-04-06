<template>
	<div>
		<SSMS />
	</div>
</template>

<script>
import EvalutionEdition from '@/components/sqldb/install/windows/EvalutionEdition';
import SSMS from '@/components/sqldb/install/windows/SSMS'

export default {
	name: 'home',
	components: {
		EvalutionEdition,
		SSMS
	},
	beforeMount(){
		
	},
	methods: {

	}
}
</script>
