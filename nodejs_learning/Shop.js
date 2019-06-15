class Shop {

    constructor(shopName){
        this._shopName = shopName
    }

    greeting(){
        console.log(this._shopName + ' Xin chao qui khach!')
    }

    seeStuffs(){
        console.log('Moi qui khach xem hang')
    }

    sayGoodBye(){
        console.log('Tam biet qui khach!')
    }
}
let shop = new Shop('Automation Test shop');
module.exports = shop;