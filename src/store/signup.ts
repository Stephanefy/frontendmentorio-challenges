import { createStore } from 'little-state-machine'


export const signupStore = createStore({
    data: {
      email: '',
      role: '',
      password: '',
    }
})