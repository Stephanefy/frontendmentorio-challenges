export default function updateAction(state: any, payload: any) {
    console.log('state:',state, 'payload:', payload)
    return {
      ...state,
      data: {
        ...state.data,
        ...payload
      }
    };
  }
  