import wepy from 'wepy'

export default async(params = {}, url) => {
  wx.showNavigationBarLoading()
  let data = params.query || {}
  let res = await wepy.request({
    url: url,
    method: params.method || 'GET',
    data: data,
    header: { 'Content-Type': 'application/json' },
  })
  wx.hideNavigationBarLoading()
  return res
}

// export default function request(
//   {url = '', header = {}, methods = 'GET', data = {} },
//   {success = () => {}, fail = () => {}, complete = () => {} }
// ) {
//   // 请求前
//   wx.showNavigationBarLoading()

//   // 构造请求体
//   const request = {
//     url,
//     method: ['GET', 'POST','PUT', 'DELETE'].indexOf(methods) > -1 ? methods : 'GET',
//     header,
//     data: Object.assign({
//       // todo 设置一些全局的数据
//     }, data)
//   }

//   // 发送请求
//   wepy.request(Object.assign(request, {
//     // 成功回调
//     success: ({statusCode, data}) => {
//       isFunction(success) && success({statusCode, data})
//     },
//     // 失败回调
//     fail: ({statusCode, data}) => {
//       isFunction(fail) && fail({statusCode, data})
//     },
//     // 完成回调
//     complete: (res) => {
//       // 隐藏加载提示
//       wx.hideNavigationBarLoading()
//       isFunction(complete) && complete(res)
//     }
//   }))
// }
