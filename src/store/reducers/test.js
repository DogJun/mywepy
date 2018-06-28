import { handleActions } from 'redux-actions'
import { TEST } from '../types/test'

export default handleActions({
  [TEST] (state) {
    return {
      ...state,
      testList: ['test1', 'test2', 'test3']
      // testlist: action.payload
    }
  }
}, {
  testList: []
})
