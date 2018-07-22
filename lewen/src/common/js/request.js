import axios from 'axios'
import {
  API_HOT_BOOK
} from './apis'

axios.defaults.withCredentials = true

export function getHotBookList() {
  return new Promise((resolve, reject) => {
    axios.get(API_HOT_BOOK).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
