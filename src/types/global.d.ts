import 'little-state-machine';



export type Requirements = {
   content: string,
   items: string[]
}


export type Role = {
  content: string,
  items: string[]
}


export type JobPost = {
  id: string,
  company: string;
  logo: string;
  logoBackground: string;
  postedAt: number;
  position: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: Requirements;
  role: Role;
  postedById: string;
}


declare module 'little-state-machine' {
  interface GlobalState {
    data: {
      email: string;
      role: string;
      password: string;
    },
    jobPost: {
      company: string;
      logo: string;
      logoBackground: string;
      position: string;
      contract: string;
      location: string;
      website: string;
      apply: string;
      description: string;
      requirements: Requirements;
      role: Role;
      postedById: string;
    }
  }
}