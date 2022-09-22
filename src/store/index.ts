import useLoginStore from './modules/login'
export default function useStore(){
  return {
    login:useLoginStore()
  }
}