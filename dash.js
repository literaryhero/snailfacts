var universalTimer = null;
var multiTimer = null;
var progress = 0;
var dialog = 0;
var money = 0;
var moneyUp = 0.01;
var moneyCost1 = 1;
var moneyCost2 = 10;
var moneyCost3 = 100;
var moneyCost4 = 1e4;
var moneyCost5 = 1e6;
var moneyCost6 = 1e9;
var money1 = document.getElementById("money1");
var money2 = document.getElementById("money2");
var money3 = document.getElementById("money3");
var money4 = document.getElementById("money4");
var money5 = document.getElementById("money5");
var money6 = document.getElementById("money6");
var people = 0;
var peopleCost1 = 1e4;
var peopleCost2 = 3e5;
var peopleCost3 = 4e6;
var peopleCost4 = 1e8;
var people1 = document.getElementById("people1");
var people2 = document.getElementById("people2");
var people3 = document.getElementById("people3");
var people4 = document.getElementById("people4");
var food = 0;
var foodUp = 0;
var foodDown = 0;
var foodCost1 = 1e5;
var foodCost2 = 1e6;
var foodCost3 = 1e7;
var foodCost4 = 1e8;
var foodCost5 = 1e9;
var foodCost6 = 5e9;
var food1 = document.getElementById("food1");
var food2 = document.getElementById("food2");
var food3 = document.getElementById("food3");
var food4 = document.getElementById("food4");
var food5 = document.getElementById("food5");
var food6 = document.getElementById("food6");
var snails = 0;
var snailUp = 0;
var snailCost1 = 1;
var snailCost2 = 10;
var snailCost3 = 100;
var snailCost4 = 1e3;
var snailCost5 = 1e4;
var snailCost6 = 1e5;
var snail1 = document.getElementById("snail1");
var snail2 = document.getElementById("snail2");
var snail3 = document.getElementById("snail3");
var snail4 = document.getElementById("snail4");
var snail5 = document.getElementById("snail5");
var snail6 = document.getElementById("snail6");
var status1 = document.getElementById("status1");
var status2 = document.getElementById("status2");
var status3 = document.getElementById("status3");
var status4 = document.getElementById("status4");
var popUp = document.getElementById("popUp");
var popUpText = document.getElementById("popUpText");
var popUpButton = document.getElementById("popUpButton");



function popUpDialog() {
    switch(dialog){
        case 0:
            popUpText.innerHTML = "The clandestine mission behind Snail Facts! is total Snail domination of earth.";
            popUpButton.innerHTML = "Snail...domination?";
            status1.title = "1/s";
            dialog++;
            break;
        case 1:
            popUpText.innerHTML = "Exactly! To help us, you should earn money to hire workers and buy food to raise more snails.";
            popUpButton.innerHTML = "Sounds simple enough...";
            dialog++;
            break;
        case 2:
            popUpText.innerHTML = "Sure it is, but snails eat. A lot. Like really, an incredible amount. Like just huge amounts of food.";
            popUpButton.innerHTML = "...";
            dialog++;
            break;
        case 3:
            popUpText.innerHTML = "So if you make a mistake, you can cull the breeding snails which should solve the food shortage.";
            popUpButton.innerHTML = "Well, that makes sense. Kill the snails.";
            dialog++;
            break;
        case 4:
            popUpText.innerHTML = "Wait, no! You want to raise the snails, not kill them, that's only a last resort!";
            popUpButton.innerHTML = "Touchy...";
            dialog++;
            break;
        case 5:
            popUpText.innerHTML = "For snail domination, we estimate we need one snail for each human on earth, eight billion snails!";
            popUpButton.innerHTML = "But the size difference?";
            dialog++;
            break;
        case 6:
            popUpText.innerHTML = "I said eight billion and I mean eight billion! Now get to work!!";
            popUpButton.innerHTML = "Whatever, bro.";
            dialog++;
            break;
        case 7:
            popUpText.innerHTML = "Oh, one last tip, hold the button down to buy multiple times. Good luck.";
            popUpButton.innerHTML = "Pffft.";
            dialog++;
            break;
        case 8:
            universalTimer = setInterval(calculateMoney, 10);
            popUp.style.display = 'none';
            dialog++;
            break;
        case 9:
            popUpText.innerHTML = "They are being crushed! Noooooooooo!";
            popUpButton.innerHTML = "Welp, I am out of here.";
            snailUp = 1e7;
            universalTimer = setInterval(reversal, 10);
            dialog++;
            break;
        case 10:
            popUpText.innerHTML = "The end. Thanks for playing! :)";
            popUpButton.style.display = 'none';
            dialog++;
            break;
    }

}

function reversal() {
    snails-= snailUp;
    progress = (snails / 8e9) * 100;
    document.getElementById('circle').value = progress;
    status4.innerHTML = "🐌" + nFormatter(snails,2);
    if (progress < 0) {
        snails = 0;
        status4.innerHTML = "🐌" + nFormatter(snails,2);
        clearInterval(universalTimer);
    }

}

function cancelMulti() {
    clearInterval(multiTimer);
}

function tellMulti(funcName) {
    multiTimer = setInterval(function() {window[funcName]();}, 200);
}

function tellFriend() {
    if(money >= moneyCost1) {
    money-= moneyCost1;
    moneyUp+= 0.1;
    moneyCost1 = moneyCost1 * 1.4;
    money1.innerHTML = "💵" + nFormatter(moneyCost1, 2);
    status1.innerHTML = "💵: " + nFormatter(money, 2);
    status1.title = nFormatter((moneyUp * 100), 2) + "/s";
    moneyButtons();
    } else {
        cancelMulti();
    }
}

function buyAd() {
    money-= moneyCost2;
    moneyUp+= 0.3;
    moneyCost2 = moneyCost2 * 1.4;
    money2.innerHTML = "💵" + nFormatter(moneyCost2, 2);
    status1.innerHTML = "💵: " + nFormatter(money, 2);
    status1.title = nFormatter((moneyUp * 100), 2) + "/s";
    moneyButtons();
}

function targetedAd() {
    money-= moneyCost3;
    moneyUp+= 0.9;
    moneyCost3 = moneyCost3 * 1.4;
    money3.innerHTML = "💵" + nFormatter(moneyCost3, 2);
    status1.innerHTML = "💵: " + nFormatter(money, 2);
    status1.title = nFormatter((moneyUp * 100), 2) + "/s";
    moneyButtons();
}

function podcast() {
    money-= moneyCost4;
    people--;
    moneyUp+= 810.11;
    moneyCost4 = moneyCost4 * 1.4;
    money4.innerHTML = "💵" + nFormatter(moneyCost4, 2) + "🧍1";
    status1.innerHTML = "💵: " + nFormatter(money, 2);
    status1.title = nFormatter((moneyUp * 100), 2) + "/s";
    status2.innerHTML = "🧍" + people;
    moneyButtons();
}

function television() {
    money-= moneyCost5;
    people-= 10;
    moneyUp+= 10000.00;
    moneyCost5 = moneyCost5 * 1.4;
    money5.innerHTML = "💵" + nFormatter(moneyCost5, 2) + "🧍10";
    status1.innerHTML = "💵: " + nFormatter(money, 2);
    status1.title = nFormatter((moneyUp * 100), 2) + "/s";
    status2.innerHTML = "🧍" + people;
    moneyButtons();
}

function mindRay() {
    money-= moneyCost6;
    people-= 100;
    moneyUp+= 500000.00;
    moneyCost6 = moneyCost6 * 1.4;
    money6.innerHTML = "💵" + nFormatter(moneyCost6, 2) + "🧍100";
    status1.innerHTML = "💵: " + nFormatter(money, 2);
    status1.title = nFormatter((moneyUp * 100), 2) + "/s";
    status2.innerHTML = "🧍" + people;
    moneyButtons();
}

function hireOne() {
    money-= peopleCost1;
    people++;
    peopleCost1 = peopleCost1 * 1.4;
    people1.innerHTML = "💵" + nFormatter(peopleCost1, 2);
    status2.innerHTML = "🧍" + people;
    moneyButtons();
}

function hireTwo() {
    money-= peopleCost2;
    people+= 10;
    peopleCost2 = peopleCost2 * 1.4;
    people2.innerHTML = "💵" + nFormatter(peopleCost2, 2);
    status2.innerHTML = "🧍" + people;
    moneyButtons();
}

function hireThree() {
    money-= peopleCost3;
    people+= 20;
    peopleCost3 = peopleCost3 * 1.4;
    people3.innerHTML = "💵" + nFormatter(peopleCost3, 2);
    status2.innerHTML = "🧍" + people;
    moneyButtons();
}

function hireFour() {
    money-= peopleCost4;
    people+= 100;
    peopleCost4 = peopleCost4 * 1.4;
    people4.innerHTML = "💵" + nFormatter(peopleCost4, 2);
    status2.innerHTML = "🧍" + people;
    moneyButtons();
}

function delivery() {
    money-= foodCost1;
    foodUp+= .0099;
    foodCost1 = foodCost1 * 1.4;
    food1.innerHTML = "💵" + nFormatter(foodCost1, 2);
    status3.innerHTML = "🍄" + nFormatter(food, 2);
    status3.title = nFormatter((foodUp * 100), 2) + "/s " + "(-" + nFormatter((foodDown * 100), 2) + ")";
    moneyButtons();
}

function supermarket() {
    money-= foodCost2;
    foodUp+= .099;
    foodCost2 = foodCost2 * 1.4;
    food2.innerHTML = "💵" + nFormatter(foodCost2, 2);
    status3.innerHTML = "🍄" + nFormatter(food, 2);
    status3.title = nFormatter((foodUp * 100), 2) + "/s " + "(-" + nFormatter((foodDown * 100), 2) + ")";
    moneyButtons();
}

function wholesaler() {
    money-= foodCost3;
    foodUp+= .99;
    foodCost3 = foodCost3 * 1.4;
    food3.innerHTML = "💵" + nFormatter(foodCost3, 2);
    status3.innerHTML = "🍄" + nFormatter(food, 2);
    status3.title = nFormatter((foodUp * 100), 2) + "/s " + "(-" + nFormatter((foodDown * 100), 2) + ")";
    moneyButtons();
}

function garden() {
    money-= foodCost4;
    people--;
    foodUp+= 9.9;
    foodCost4 = foodCost4 * 1.4;
    food4.innerHTML = "💵" + nFormatter(foodCost4, 2) + "🧍1";
    status2.innerHTML = "🧍" + people;
    status3.innerHTML = "🍄" + nFormatter(food, 2);
    status3.title = nFormatter((foodUp * 100), 2) + "/s " + "(-" + nFormatter((foodDown * 100), 2) + ")";
    moneyButtons();
}

function farm() {
    money-= foodCost5;
    people-= 50;
    foodUp+= 99.9;
    foodCost5 = foodCost5 * 1.4;
    food5.innerHTML = "💵" + nFormatter(foodCost5, 2) + "🧍50";
    status2.innerHTML = "🧍" + people;
    status3.innerHTML = "🍄" + nFormatter(food, 2);
    status3.title = nFormatter((foodUp * 100), 2) + "/s " + "(-" + nFormatter((foodDown * 100), 2) + ")";
    moneyButtons();
}

function industry() {
    money-= foodCost6;
    people-= 100;
    foodUp+= 999;
    foodCost6 = foodCost6 * 1.4;
    food6.innerHTML = "💵" + nFormatter(foodCost6, 2) + "🧍100";
    status2.innerHTML = "🧍" + people;
    status3.innerHTML = "🍄" + food;
    status3.title = nFormatter((foodUp * 100), 2) + "/s " + "(-" + nFormatter((foodDown * 100), 2) + ")";
    moneyButtons();
}

function terrarium() {
    foodDown+= (snailCost1/100);
    snailUp+= 5;
    if (food + (foodUp - foodDown) > 0) {
        food = food + (foodUp - foodDown);
        snails+= snailUp;
    } else {
        food = 0;
    }
    snailCost1 = snailCost1 * 1.4;
    snail1.innerHTML = "🍄" + nFormatter(snailCost1, 2) + "/s";
    status4.innerHTML = "🐌" + nFormatter(snails,2);
    status4.title = nFormatter((snailUp* 100), 2) + "/s";
    status3.title = nFormatter((foodUp * 100), 2) + "/s " + "(-" + nFormatter((foodDown * 100), 2) + ")";
    moneyButtons();
}

function outside() {
    foodDown+= (snailCost2/100);
    snailUp+= 10;
    if (food + (foodUp - foodDown) > 0) {
        food = food + (foodUp - foodDown);
        snails+= snailUp;
    } else {
        food = 0;
    }
    snailCost2 = snailCost2 * 1.4;
    snail2.innerHTML = "🍄" + nFormatter(snailCost2, 2) + "/s";
    status4.innerHTML = "🐌" + nFormatter(snails,2);
    status4.title = nFormatter((snailUp* 100), 2) + "/s";
    status3.title = nFormatter((foodUp * 100), 2) + "/s " + "(-" + nFormatter((foodDown * 100), 2) + ")";
    moneyButtons();
}

function snailFarm() {
    foodDown+= (snailCost3/100);
    snailUp+= 150;
    if (food + (foodUp - foodDown) > 0) {
        food = food + (foodUp - foodDown);
        snails+= snailUp;
    } else {
        food = 0;
    }
    snailCost3 = snailCost3 * 1.4;
    snail3.innerHTML = "🍄" + nFormatter(snailCost3, 2) + "/s";
    status4.innerHTML = "🐌" + nFormatter(snails,2);
    status4.title = nFormatter((snailUp* 100), 2) + "/s";
    status3.title = nFormatter((foodUp * 100), 2) + "/s " + "(-" + nFormatter((foodDown * 100), 2) + ")";
    moneyButtons();
}

function irrigate() {
    foodDown+= (snailCost4/100);
    snailUp+= 3e3;
    if (food + (foodUp - foodDown) > 0) {
        food = food + (foodUp - foodDown);
        snails+= snailUp;
    } else {
        food = 0;
    }
    snailCost4 = snailCost4 * 1.4;
    snail4.innerHTML = "🍄" + nFormatter(snailCost4, 2) + "/s";
    status4.innerHTML = "🐌" + nFormatter(snails,2);
    status4.title = nFormatter((snailUp* 100), 2) + "/s";
    status3.title = nFormatter((foodUp * 100), 2) + "/s " + "(-" + nFormatter((foodDown * 100), 2) + ")";
    moneyButtons();
}

function snailClone() {
    foodDown+= (snailCost5/100);
    snailUp+= 5e4;
    if (food + (foodUp - foodDown) > 0) {
        food = food + (foodUp - foodDown);
        snails+= snailUp;
    } else {
        food = 0;
    }
    snailCost5 = snailCost5 * 1.4;
    snail5.innerHTML = "🍄" + nFormatter(snailCost5, 2) + "/s";
    status4.innerHTML = "🐌" + nFormatter(snails,2);
    status4.title = nFormatter((snailUp* 100), 2) + "/s";
    status3.title = nFormatter((foodUp * 100), 2) + "/s " + "(-" + nFormatter((foodDown * 100), 2) + ")";
    moneyButtons();
}

function timeMachine() {
    foodDown+= (snailCost6/100);
    snailUp+= 5e5;
    if (food + (foodUp - foodDown) > 0) {
        food = food + (foodUp - foodDown);
        snails+= snailUp;
    } else {
        food = 0;
    }
    snailCost6 = snailCost6 * 1.4;
    snail6.innerHTML = "🍄" + nFormatter(snailCost6, 2) + "/s";
    status4.innerHTML = "🐌" + nFormatter(snails,2);
    status4.title = nFormatter((snailUp* 100), 2) + "/s";
    status3.title = nFormatter((foodUp * 100), 2) + "/s " + "(-" + nFormatter((foodDown * 100), 2) + ")";
    moneyButtons();
}

function calculateMoney() {
    money+= moneyUp;
    if (food + (foodUp - foodDown) > 0) {
        food = food + (foodUp - foodDown);
        snails+= snailUp;
    } else {
        food = 0;
    }
    status1.innerHTML = "💵: " + nFormatter(money, 2);
    status3.innerHTML = "🍄" + nFormatter(food, 2);
    status4.innerHTML = "🐌" + nFormatter(snails, 2);
    progress = (snails / 8e9) * 100;
    document.getElementById('circle').value = progress;
    moneyButtons();
    if (progress > 1) {
        endGame();
    }
}

function endGame() {
    clearInterval(universalTimer);
    foodUp = 0;
        foodDown = 0;
        snailUp = 0;
        money1.disabled = true;
        money2.disabled = true;
        money3.disabled = true;
        money4.disabled = true;
        money5.disabled = true;
        money6.disabled = true;
        people1.disabled = true;
        people2.disabled = true;
        people3.disabled = true;
        people4.disabled = true;
        food1.disabled = true;
        food2.disabled = true;
        food3.disabled = true;
        food4.disabled = true;
        food5.disabled = true;
        food6.disabled = true;
        snail1.disabled = true;
        snail2.disabled = true;
        snail3.disabled = true;
        snail4.disabled = true;
        snail5.disabled = true;
        snail6.disabled = true;
        popUpText.innerHTML = "You did it! Eight Billion! I can't believe it! Now to attack the humans!";
        popUpButton.innerHTML = "But the size difference!";
        popUp.style.display = "flex";
}

function cullSnails() {
    snailUp = 0;
    foodDown = 0;
    snail1.innerHTML = "🍄1/s";
    snail2.innerHTML = "🍄10/s";
    snail3.innerHTML = "🍄100/s";
    snail4.innerHTML = "🍄1k/s";
    snail5.innerHTML = "🍄10k/s";
    snail6.innerHTML = "🍄100k/s";
    snailCost1 = 1;
    snailCost2 = 10;
    snailCost3 = 100;
    snailCost4 = 1e3;
    snailCost5 = 1e4;
    snailCost6 = 1e5;
    status4.title = nFormatter((snailUp* 100), 2) + "/s";
    status3.title = nFormatter((foodUp * 100), 2) + "/s " + "(-" + nFormatter((foodDown * 100), 2) + ")";
}

function moneyButtons() {
    if (money >= moneyCost1)  {
        money1.disabled = false;
    } else {
        money1.disabled = true;
    }
    if (money >= moneyCost2) {
        money2.disabled = false;
    } else {
        money2.disabled = true;
    }
    if (money >= moneyCost3)  {
        money3.disabled = false;
    } else {
        money3.disabled = true;
    }
    if (money >= moneyCost4 && people >= 1) {
        money4.disabled = false;
    } else {
        money4.disabled = true;
    }
    if (money >= moneyCost5 && people >= 10) {
        money5.disabled = false;
    } else {
        money5.disabled = true;
    }
    if (money >= moneyCost6 && people >= 100) {
        money6.disabled = false;
    } else {
        money6.disabled = true;
    }
    if (money >= peopleCost1) {
        people1.disabled = false;
    } else {
        people1.disabled = true;
    }
    if (money >= peopleCost2) {
        people2.disabled = false;
    } else {
        people2.disabled = true;
    }
    if (money >= peopleCost3) {
        people3.disabled = false;
    } else {
        people3.disabled = true;
    }
    if (money >= peopleCost4) {
        people4.disabled = false;
    } else {
        people4.disabled = true;
    }
    if (money >= foodCost1) {
        food1.disabled = false;
    } else {
        food1.disabled = true;
    }
    if (money >= foodCost2) {
        food2.disabled = false;
    } else {
        food2.disabled = true;
    }
    if (money >= foodCost3) {
        food3.disabled = false;
    } else {
        food3.disabled = true;
    }
    if (money >= foodCost4 && people >= 1) {
        food4.disabled = false;
    } else {
        food4.disabled = true;
    }
    if (money >= foodCost5 && people >= 50) {
        food5.disabled = false;
    } else {
        food5.disabled = true;
    }
    if (money >= foodCost6 && people >= 100) {
        food6.disabled = false;
    } else {
        food6.disabled = true;
    }
    if (food >= snailCost1) {
        snail1.disabled = false;
    } else {
        snail1.disabled = true;
    }
    if (food >= snailCost2) {
        snail2.disabled = false;
    } else {
        snail2.disabled = true;
    }
    if (food >= snailCost3) {
        snail3.disabled = false;
    } else {
        snail3.disabled = true;
    }
    if (food >= snailCost4) {
        snail4.disabled = false;
    } else {
        snail4.disabled = true;
    }
    if (food >= snailCost5) {
        snail5.disabled = false;
    } else {
        snail5.disabled = true;
    }
    if (food >= snailCost6) {
        snail6.disabled = false;
    } else {
        snail6.disabled = true;
    }
    if (foodDown > 0) {
        snail7.disabled = false;
    } else {
        snail7.disabled = true;
    }
}

function nFormatter(num, digits) {
    if (num <= 1) {
        return(Math.round(num * 100) / 100).toFixed(2);
    } else {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "B" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "Qa" },
      { value: 1e18, symbol: "Qi" },
      { value: 1e21, symbol: "Sx" },
      { value: 1e24, symbol: "Sp" },
      { value: 1e27, symbol: "Oc" },
      { value: 1e30, symbol: "No" }
    ];
    const regexp = /\.0+$|(?<=\.[0-9]*[1-9])0+$/;
    const item = lookup.findLast(item => num >= item.value);
    return item ? (num / item.value).toFixed(digits).replace(regexp, "").concat(item.symbol) : "0";
  }
}