import TypeObjectStore from '../type' // 引入类型别名

const webUser: TypeObjectStore =
{
  keyPath: 'userId',
  indexs: ['mobile', 'password', 'status']
}

const userObjectStore =
{
  web_user: webUser
}

export default userObjectStore
