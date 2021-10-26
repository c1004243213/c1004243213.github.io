export default myRequest = (option = {}) => {
	return new Promise( (resolve, reject) => {
		uni.request({
			url:BaseUrl + option.url || '',
			data: option.data || {},
			method: option.method || 'GET',
		}).then( res => {
			if(res.data.meta.status !== 200){
				return uni.showToast({
					title:"获取数据失败！"
				})
			}esle{
				resolve(res.data)
			}
		}).catch(err => {
			reject(err)
			return uni.showToast({
				title:"网络请求失败！"
			})
		})
	})
}