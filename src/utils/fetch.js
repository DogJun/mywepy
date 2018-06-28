import wepy from 'wepy'
import config from './config'

async function fetch (options = {}) {
  options.url = config.paths.api(options.url)

  return wepy.request({
    ...options
  }).then((res) => {
    console.log(res)
    return res
  }).catch((e) => {
    console.log(e)
    return Promise.reject(e)
    // wepy.showModal(JSON.stringify(e.message))
  })
}

function get (url, data = {}, options = {}) {
  return fetch({
    url,
    data,
    ...options,
    methods: 'GET'
  })
}

function post (url, data = {}, options = {}) {
  options.headers = options.headers || {}
  options.headers['Content-Type'] = 'application/x-www-form-urlencoded'

  return fetch({
    url,
    data,
    ...options,
    methods: 'POST'
  })
}

fetch.get = get
fetch.post = post

export default fetch
