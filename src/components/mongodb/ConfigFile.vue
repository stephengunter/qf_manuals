<template>
	<ul>
      <li>
         建立 configuration file 內容如下:
      </li>
<div class="highlight"><pre><span></span><span class="l l-Scalar l-Scalar-Plain">systemLog</span><span class="p p-Indicator">:</span>
    <span class="l l-Scalar l-Scalar-Plain">destination</span><span class="p p-Indicator">:</span> <span class="l l-Scalar l-Scalar-Plain">file</span>
    <span class="l l-Scalar l-Scalar-Plain">path</span><span class="p p-Indicator">:</span> <span class="l l-Scalar l-Scalar-Plain">c:\data\log\mongod.log</span>
<span class="l l-Scalar l-Scalar-Plain">storage</span><span class="p p-Indicator">:</span>
    <span class="l l-Scalar l-Scalar-Plain">dbPath</span><span class="p p-Indicator">:</span> <span class="l l-Scalar l-Scalar-Plain">c:\data\db</span>
</pre></div>

      <li>
         存檔路徑 C:\Program Files\MongoDB\Server\4.0 檔案名稱 mongod.cfg
      </li>
      <img style="margin:15px" src="https://localhost:44351/uploads/20190402/mongodb-install-cfg-file.jpg">
   </ul>
</template>

<script>

export default {
	name: 'MongoDBConfigFile',
	data () {
		return {
			
		}
	},
	methods: {
		
	}
}
</script>


