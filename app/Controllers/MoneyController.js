import { appState } from "../AppState.js";
import { moneyService } from "../Services/SnacksService.js";
import { setText } from "../Utils/Writer.js";


function _draw_money(){
let money = appState.money
setText('money-total', `MONEY: ${money}$`)
}
export class MoneyController {
 moneyAdd(){
  console.log('tester of money controller');
  moneyService.addMoney();
  console.log(appState.money);
  _draw_money()
 }


}