import { JobPost, Requirements, Role } from "../types/global";
import { GlobalState } from "little-state-machine";


export function updateSignUp(state: GlobalState, payload: any) {
    return {
      ...state,
      data: {
        ...state.data,
        ...payload
      }
    };
  }
  
export function updateJobPost(state: GlobalState, payload: JobPost) {
  return {
    ...state,
    jobPost: {
      ...state.jobPost,
      ...payload
    }
  }
}


export function updateRequirements(state: GlobalState, payload: Requirements) {
  return {
    ...state,
    jobPost: {
      ...state.jobPost,
      requirements: {
        ...state.jobPost.requirements,
        content: payload.content,
        items: Object.values(payload.items)
      }
    }
  }
}

export function updateRole(state: GlobalState, payload: Role) {
  return {
    ...state,
    jobPost: {
      ...state.jobPost,
      role: {
        ...state.jobPost.role,
        content: payload.content,
        items: Object.values(payload.items)
      }
    }
  }
}