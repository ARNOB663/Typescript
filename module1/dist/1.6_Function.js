"use strict";
{ //Learning funtion
    //Normal funtion
    function add(num1 = 20, num2 = 10) {
        return num1 + num2;
    }
    add(2, 4);
    //Arrow Funtion
    const addArrow = (num1, num2) => num1 + num2;
    //object --> funtion --> method
    const poorUser = {
        name: "Aniruddha",
        balance: 0,
        addBalance(balance) {
            if (balance == 0) {
                return `${this.name} is fokir his balance: ${this.balance}`;
            }
            return `${this.name} has a balance of: ${this.balance + balance}`;
        }
    };
    console.log(poorUser.addBalance(0));
    const arr = [1, 4, 10];
    const newArray = arr.map((Element) => Element * Element);
}
