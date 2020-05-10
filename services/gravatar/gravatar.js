// import defaultAvatar from '@/assets/image/default.png'
import Utils from '../utils/util'
import gravatar from '@/plugins/gravatar'

/**
 * gravatar 头像服务
 */
export default (email) => {
  if (!email) {
    return ''
  }
  if (!Utils.validateEmail(email)) {
    return ''
  }
  return gravatar.url(email, {
    protocol: 'https'
  })
}
