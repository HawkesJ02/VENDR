

export class Snacks {
  constructor(data){
this.name = data.name
this.price = data.price
this.emoji = data.emoji
  }

  get snackTemplate() {
    return `
    <div class="col-3 fs-3 text-center" onclick="app.moneycontroller.purchase_item('${this.name}')">
     <div>${this.name}</div>
     <div>${this.price}$</div>
     <div>${this.emoji}</div>
    </div>
    `
  }


}

