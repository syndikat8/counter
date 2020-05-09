const INC = "INC"
const RESET = "RESET"
const SET = "SET"
const VALUE_START = "VALUE_START"
const VALUE_MAX = "VALUE_MAX"
const CHANGE_INPUT = "CHANGE_INPUT"


const initialState = {
  counterValue: 3,
  maxValue: 8,
  startValue: 3,
  statusBlock: "block",
  statusUnblock: "unblock"
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INC:
      return {
        ...state, counterValue: state.counterValue + 1
      }
    case RESET:
      return {
        ...state, counterValue: state.startValue
      }
    case SET:
      return {
        ...state,
        counterValue: state.startValue,
        statusBlock: "block",
        statusUnblock: "unblock"
      }
    case VALUE_START:
      return {
        ...state,
        startValue: Number(action.numberStart),
      }
    case VALUE_MAX:
      return {
        ...state,
        maxValue: Number(action.numberMax),
      }
    case CHANGE_INPUT:
      if ((state.startValue || state.maxValue) < 0) {
        return {
          ...state, counterValue: "incorrect value!"
        }
      } else if (state.maxValue === state.startValue) {
        return {
          ...state, counterValue: "incorrect value!"
        }
      } else if (state.maxValue < state.startValue) {
        return {
          ...state, startValue: state.maxValue
        }
      } else {
        return {
          ...state,
          counterValue: "enter values and press 'set'",
          statusBlock: "unblock",
          statusUnblock: "block"
        }
      }
    default:
      return state
  }
}

export const buttonInc = () => ({type: INC})
export const buttonReset = () => ({type: RESET})
export const buttonSet = () => ({type: SET})
export const changeValueStart = (numberStart) => ({type: VALUE_START, numberStart})
export const changeValueMax = (numberMax) => ({type: VALUE_MAX, numberMax})
export const changeInput = () => ({type: CHANGE_INPUT})

export default reducer