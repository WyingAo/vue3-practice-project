let BASE_URL = ''
const TIME_OUT = 10000 
switch(process.env.NODE_ENV){
  case 'development':
    BASE_URL = '/api'
    break
  case 'production':
    BASE_URL = 'https://cms-api.tj520.top'
    break
  case 'test':
    BASE_URL = ''
}
console.log(process.env.NODE_ENV,8888)
export {BASE_URL,TIME_OUT}