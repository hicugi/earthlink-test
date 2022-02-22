import { createStore } from 'vuex'
import users from '../helpers/users'

const LOCALSTORAGE_USER_KEY = 'user'
const sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time))

export default createStore({
  state: {
    user: JSON.parse(localStorage.getItem(LOCALSTORAGE_USER_KEY) || 'null')
  },
  mutations: {
    setUser (currentState, newValue) {
      localStorage.setItem(LOCALSTORAGE_USER_KEY, JSON.stringify(newValue))
      currentState.user = newValue
    }
  },

  actions: {
    login ({ commit }, { email, password }) {
      return sleep(1500).then(() => {
        const user = users.find(
          u => u.email === email && u.password === password
        )

        if (!user) {
          throw new Error('User is undefined')
        }
        if (user.status === 403) {
          throw new Error('Access denied')
        }
        if (user.status === 500) {
          throw new Error('Something went wrong')
        }

        commit('setUser', JSON.parse(JSON.stringify(user)))
        return user
      })
    },
    logout ({ commit }) {
      return sleep(500).then(() => {
        commit('setUser', null)
      })
    }
  }
})
