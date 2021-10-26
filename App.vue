<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		created() {
			console.log("App组件被加载了~！")
			uni.loadFontFace({
				family: 'Bitstream Vera Serif Bold',
				  source: 'url("https://sungd.github.io/Pacifico.ttf")',
				  success() {
				      console.log('success')
				  },
				  fail(err) {
					  console.log("获取接口失败")
					  console.log(err)
				  }
			})
		}
	}
</script>

<style lang="scss">
	/* 全局字体文件 */
	@font-face {
		font-family: 'icon-font';
		src: url('static/font/font_865816_17gjspmmrkti.ttf') format('truetype');
	}
	
	
	
	/*每个页面公共css */
	 *,  
	 *::before,  
	 *::after {  
	   box-sizing: border-box;  
	   touch-action: pan-y;  
	 }  
	 html {  
	   -webkit-text-size-adjust: 100%;  
	   -webkit-tap-highlight-color: transparent;  
	 }  
	
	 body {  
	   margin: 0;  
	   -webkit-overflow-scrolling: touch;  
	   background-color: #f5f5f5;  
	 }  
	
	 h1, h2, h3, h4, h5, h6, p, ul, ol, dl, input,  
	 button,  
	 select,  
	 optgroup,  
	 textarea{  
	    margin: 0;  
	    padding: 0;  
	 }  
	
	input,   
	textarea,   
	select,   
	button {   
	    font:14px 'PingFangSC-Regular', 'monospace', 'sans', 'serif', 'Microsoft YaHei';   
	}  
	 i {  
	     font-style: normal;  
	 }  
	 ol,  
	 ul,  
	 dl {  
	   list-style: none;  
	 }  
	
	 a {  
	   text-decoration: none;  
	 }  
	
	 input {  
	  background: none;  
	  outline: none;  
	  border: 0px;  
	 }  
	
	 img {  
	   vertical-align: middle;  
	   border-style: none;  
	 }  
	
	 a,  
	 area,  
	 button,  
	 label,  
	 select,  
	 textarea {  
	   -ms-touch-action: manipulation;  
	   touch-action: manipulation;  
	 }  
	
	 table {  
	   border-collapse: collapse;  
	 }  
	
	 label {  
	   display: inline-block;  
	 }  
	
	 button,  
	 html [type="button"],  
	 [type="reset"],  
	 [type="submit"] {  
	   -webkit-appearance: button;  
	 }
</style>
