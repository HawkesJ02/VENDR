import { ValuesController } from "./Controllers/ValuesController.js";
import { SnacksController } from "./Controllers/SnacksController.js";
import { MoneyController } from "./Controllers/MoneyController.js";

class App {
  // valuesController = new ValuesController();
  snackscontroller = new SnacksController() 
  moneycontroller = new MoneyController()
}

window["app"] = new App();
