import mock from 'mockjs'
const data  = mock.mock('/mock/login',{
  'code':200,
   'data | 2':[{
    id:'@id',
    token: '@token'
   }],
   'message':'用户登录成功'
})
export default data