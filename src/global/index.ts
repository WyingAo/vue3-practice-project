import { App } from 'vue'
import { registerIcon } from './register-icon'
export function globalRegister (app: App): void {
  app.use(registerIcon)
}