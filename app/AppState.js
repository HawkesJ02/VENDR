import { Value } from "./Models/Value.js"
import { Snacks } from "./Models/Snacks.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  // NOTE PUT THINGS HERE!
/** @type {import('./Models/Snacks').Snacks[]} */
  snacks = [
new Snacks(
  {
    name: 'Test Bites',
    price: 2,
    emoji: '๐งช'
  },
),
new Snacks(
  {
    name: 'Yummy Snaccs',
    price: 1.5,
    emoji: '๐ช',
  }
),
new Snacks(
  {
    name: 'Butter Supreme',
    price: 2,
    emoji: '๐ง',
  }
),
new Snacks(
  {
    name: 'Actually Just Gold',
    price: 20,
    emoji: '๐ฅ',
  }
)
  ]

money = 0


}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
