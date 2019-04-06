<template>
   <ul>
	   <li>
      建立 user administrator. 在mongo shell 執行以下指令 (注意設定username與password)
      <pre><span></span><span class="nx">use</span> <span class="nx">admin</span>
<span class="nx">db</span><span class="p">.</span><span class="nx">createUser</span><span class="p">(</span>
<span class="p">{</span>
   <span class="nx">user</span><span class="o">:</span> <span class="s2">"your_username"</span><span class="p">,</span>
   <span class="nx">pwd</span><span class="o">:</span> <span class="s2">"your_password"</span><span class="p">,</span>
   <span class="nx">roles</span><span class="o">:</span> <span class="p">[</span> <span class="p">{</span> <span class="nx">role</span><span class="o">:</span> <span class="s2">"userAdminAnyDatabase"</span><span class="p">,</span> <span class="nx">db</span><span class="o">:</span> <span class="s2">"admin"</span> <span class="p">}</span> <span class="p">]</span>
   <span class="p">}</span>
<span class="p">)</span>
</pre>
      </li>
      <img style="margin:15px" src="https://localhost:44351/uploads/20190402/mongodb-create-auth-user.jpg">
      <li>
         重新開啟mongo shell並使用username與password登入
      </li>
      <img style="margin:15px" src="https://localhost:44351/uploads/20190402/mongodb-test-login.jpg">
      <li>
         切換到test資料庫, 新增測試資料與查詢
      </li>
      
      <div class="highlight"><pre><span><span class="nx">use</span>&nbsp;<span class="nx">test</span>
      </span><span class="nx">db</span><span class="p">.</span><span class="nx">inventory</span><span class="p">.</span><span class="nx">insertOne</span><span class="p">(</span>
   <span class="p">{</span> <span class="nx">item</span><span class="o">:</span> <span class="s2">"canvas"</span><span class="p">,</span> <span class="nx">qty</span><span class="o">:</span> <span class="mi">100</span><span class="p">,</span> <span class="nx">tags</span><span class="o">:</span> <span class="p">[</span><span class="s2">"cotton"</span><span class="p">],</span> <span class="nx">size</span><span class="o">:</span> <span class="p">{</span> <span class="nx">h</span><span class="o">:</span> <span class="mi">28</span><span class="p">,</span> <span class="nx">w</span><span class="o">:</span> <span class="mf">35.5</span><span class="p">,</span> <span class="nx">uom</span><span class="o">:</span> <span class="s2">"cm"</span> <span class="p">}</span> <span class="p">}</span>
<span class="p">)</span>
</pre></div>
<br>
<div class="highlight"><pre><span></span><span class="nx">db</span><span class="p">.</span><span class="nx">inventory</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span> <span class="p">{</span> <span class="nx">item</span><span class="o">:</span> <span class="s2">"canvas"</span> <span class="p">}</span> <span class="p">)</span>
</pre></div> 
      <img style="margin:15px" src="https://localhost:44351/uploads/20190402/mongodb-test-insert.jpg">
   </ul>
</template>

<script>

export default {
   name: 'MongoDBCreateAdminUser',   
	data () {
		return {
			
		}
	},
	methods: {
		
	}
}
</script>


