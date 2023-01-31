import { appState } from "../AppState.js";
import { setHTML } from "../Utils/Writer.js";

function _drawSnacks(){
  console.log('drawing snackies');
  let snack = appState.snacks
  let template = ''
  snack.forEach (s => template += s.snackTemplate )
setHTML('snack-selection', template)
}

export class SnacksController{
  constructor(){
    console.log('snack controller constructor working 😊');
    _drawSnacks()
  }
}