const __DEV__ = process.env.NODE_ENV === 'development'

const SERVER_ENV = process.env.SERVER_ENV

let serverEnv

const env = {
  dev: {
    domain: 'b2bmir.com'
  },
  prod: {
    domain: 'mycaigou.com'
  }
}

// 若设置环境变量SERVER_ENV(dev/prod)，则使用配置，
// 否则根据默认，开发用dev，正式用prod
if (SERVER_ENV) {
  serverEnv = env[SERVER_ENV] || env['dev']
} else {
  serverEnv = __DEV__ ? env['dev'] : env['prod']
}

const paths = {
  ...serverEnv
}

/**
 * 构建url
 * @param {String} url 路径地址
 * @param {String} modules 二级域名
 * @param {String} protocol 协议
 * @return 全路径地址
 */
paths.url = function (url, modules = 'www', protocol = 'https') {
  url = url.indexOf('/') === 0 ? url : `/${url}`
  protocol = protocol ? `${protocol}:` : ''

  return `${protocol}//${modules}.${this.domain}${url}`
}

/**
 * 请求地址
 * @param {String} url 路径地址
 * @param {String} modules 二级域名
 */
paths.api = function (url, modules = 'gys') {
  return paths.url(url, modules)
}

export default paths
