module.exports = {
	devServer: {
		proxy: {
			'/apiModel': {
				target: 'https://app.listaso.com/ApiModel/api/Login/Post',
				pathRewrite: { '^/apiModel': '' }
			},
			'/erpNext': {
				target: 'http://7445.listaso.work/api/resource/BOM?fields=["name","item"]&filters=[["BOM","is_active","=","1"],["BOM","docstatus","=","1"]]',
				pathRewrite: { '^/erpNext': '' }
			}
		}
	}
}