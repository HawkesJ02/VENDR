import { appState } from "../AppState.js";

class MoneyService{
  addMoney(){
    console.log('money is add :)');
    appState.money += 0.25;
  }
}

export const moneyService = new MoneyService()