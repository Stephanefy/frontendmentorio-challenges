import { createStore } from 'little-state-machine'


export const signupStore = createStore({
    data: {
      email: '',
      role: '',
      password: '',
    },
    jobPost: {
      company: '',
      logo: '',
      logoBackground: '',
      position: '',
      contract: '',
      location: '',
      website: '',
      apply: '',
      description: '',
      requirements: {
        content: '',
        items: []
      },
      role: {
        content: '',
        items: []
      },
      postedById: ''
    },
    
},{
  name: 'devjob-store',
  storageType: window.localStorage,
  persist: 'action'

})