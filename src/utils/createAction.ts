const createAction = (actionType: string) => (payload?: any) => ({
  type: actionType,
  payload: payload,
})

export default createAction
