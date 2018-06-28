import * as types from './../types'
import { createAction } from 'redux-actions'
import fetch from '@/utils/fetch'

export const test = createAction(types.TEST, () => {
  return fetch.get('/imy/bms/GysApi/common/user-info')
})
