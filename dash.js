var universalTimer = null;
var multiTimer = null;
var progress = 0;
var dialog = 0;
var swipe = 0;
var cash = [0, 0.01, 1, 10, 100, 1e4, 1e6, 1e9];
var money1 = document.getElementById("money1");
var money2 = document.getElementById("money2");
var money3 = document.getElementById("money3");
var money4 = document.getElementById("money4");
var money5 = document.getElementById("money5");
var money6 = document.getElementById("money6");
var hiring = [0, 1e4, 3e5, 4e6, 1e8];
var people1 = document.getElementById("people1");
var people2 = document.getElementById("people2");
var people3 = document.getElementById("people3");
var people4 = document.getElementById("people4");
var grub = [0, 0, 0, 5e4, 1e6, 1e7, 1e8, 1e9, 5e9];
var food1 = document.getElementById("food1");
var food2 = document.getElementById("food2");
var food3 = document.getElementById("food3");
var food4 = document.getElementById("food4");
var food5 = document.getElementById("food5");
var food6 = document.getElementById("food6");
var snail = [0, 0, 1, 10, 100, 1e3, 1e4, 1e5];
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
            universalTimer = setInterval(calculateMoney, 10); //should be 10
            popUp.style.display = 'none';
            dialog++;
            break;
        case 9:
            popUpText.innerHTML = "We are being crushed! Noooooooooo!";
            popUpButton.innerHTML = "Welp, I am out of here.";
            snail[1] = 1e7;
            universalTimer = setInterval(reversal, 10); //should be 10
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
    snail[0]-= snail[1];
    progress = (snail[0] / 8e9) * 100;
    document.getElementById('circle').value = progress;
    status4.innerHTML = "🐌" + nFormatter(snail[0],2);
    if (progress < 0) {
        snail[0] = 0;
        status4.innerHTML = "🐌" + nFormatter(snail[0],2);
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
    if(cash[0]>= cash[2]) {
    cash[0]-= cash[2];
    cash[1]+= 0.1;
    cash[2] = cash[2] * 1.4;
    money1.innerHTML = "💵" + nFormatter(cash[2], 2);
    status1.innerHTML = "💵: " + nFormatter(cash[0], 2);
    status1.title = nFormatter((cash[1] * 100), 2) + "/s";
    moneyButtons();
    } else {
        cancelMulti();
    }
}

function buyAd() {
    if(cash[0]>= cash[3]) {
    cash[0]-= cash[3];
    cash[1]+= 0.3;
    cash[3] = cash[3] * 1.4;
    money2.innerHTML = "💵" + nFormatter(cash[3], 2);
    status1.innerHTML = "💵: " + nFormatter(cash[0], 2);
    status1.title = nFormatter((cash[1] * 100), 2) + "/s";
    moneyButtons();
    } else {
        cancelMulti();
    }
}

function targetedAd() {
    if (cash[0] >= cash[4]) {
    cash[0]-= cash[4];
    cash[1]+= 0.9;
    cash[4] = cash[4] * 1.4;
    money3.innerHTML = "💵" + nFormatter(cash[4], 2);
    status1.innerHTML = "💵: " + nFormatter(cash[0], 2);
    status1.title = nFormatter((cash[1] * 100), 2) + "/s";
    moneyButtons();
    } else {
        cancelMulti();
    }
}

function podcast() {
    if(cash[0] >= cash[5] && snail[0] >= 1) {
    cash[0]-= cash[5];
    cash[1]+= 810.11;
    cash[5] = cash[5] * 1.4;
    money4.innerHTML = "💵" + nFormatter(cash[5], 2) + "🐌1";
    status1.innerHTML = "💵: " + nFormatter(cash[0], 2);
    status1.title = nFormatter((cash[1] * 100), 2) + "/s";
    moneyButtons();
    } else {
        cancelMulti();
    }
}

function television() {
    if(cash[0] >= cash[6] && snail[0] >= 1e6) {
    cash[0]-= cash[6];
    cash[1]+= 10000.00;
    cash[6] = cash[6] * 1.4;
    money5.innerHTML = "💵" + nFormatter(cash[6], 2) + "🐌1m";
    status1.innerHTML = "💵: " + nFormatter(cash[0], 2);
    status1.title = nFormatter((cash[1] * 100), 2) + "/s";
    moneyButtons();
    } else {
        cancelMulti();
    }
}

function mindRay() {
    if(cash[0] >= cash[7] && snail[0] >= 1e9) {
    cash[0]-= cash[7];
    cash[1]+= 500000.00;
    cash[7] = cash[7] * 1.4;
    money6.innerHTML = "💵" + nFormatter(cash[7], 2) + "🐌1b";
    status1.innerHTML = "💵: " + nFormatter(cash[0], 2);
    status1.title = nFormatter((cash[1] * 100), 2) + "/s";
    moneyButtons();
    } else {
        cancelMulti();
    }
}

function hireOne() {
    if(cash[0] >= hiring[1]) {
    cash[0]-= hiring[1];
    hiring[0]++;
    hiring[1] = hiring[1] * 1.4;
    people1.innerHTML = "💵" + nFormatter(hiring[1], 2);
    status2.innerHTML = "🧍" + hiring[0];
    moneyButtons();
    } else {
        cancelMulti();
    }
}

function hireTwo() {
    if(cash[0] >= hiring[2]) {
    cash[0]-= hiring[2];
    hiring[0]+= 10;
    hiring[2] = hiring[2] * 1.4;
    people2.innerHTML = "💵" + nFormatter(hiring[2], 2);
    status2.innerHTML = "🧍" + hiring[0];
    moneyButtons();
    } else {
        cancelMulti();
    }
}

function hireThree() {
    if(cash[0] >= hiring[3]) {
    cash[0]-= hiring[3];
    hiring[0]+= 20;
    hiring[3] = hiring[3] * 1.4;
    people3.innerHTML = "💵" + nFormatter(hiring[3], 2);
    status2.innerHTML = "🧍" + hiring[0];
    moneyButtons();
    } else {
        cancelMulti();
    }
}

function hireFour() {
    if(cash[0] >= hiring[4]) {
    cash[0]-= hiring[4];
    hiring[0]+= 100;
    hiring[4] = hiring[4] * 1.4;
    people4.innerHTML = "💵" + nFormatter(hiring[4], 2);
    status2.innerHTML = "🧍" + hiring[0];
    moneyButtons();
    } else {
        cancelMulti();
    }
}

function delivery() {
    if(cash[0] >= grub[3] && hiring[0] >= 1) {
    cash[0]-= grub[3];
    hiring[0]--;
    grub[1]+= .0099;
    grub[3] = grub[3] * 1.4;
    food1.innerHTML = "💵" + nFormatter(grub[3], 2) + "🧍1";
    status2.innerHTML = "🧍" + hiring[0];
    status3.innerHTML = "🍄" + nFormatter(grub[0], 2);
    status3.title = nFormatter((grub[1] * 100), 2) + "/s " + "(-" + nFormatter((grub[2] * 100), 2) + ")";
    moneyButtons();
    } else {
        cancelMulti();
    }
}

function supermarket() {
    if(cash[0] >= grub[4] && hiring[0] >= 5) {
    cash[0]-= grub[4];
    hiring[0]-= 5;
    grub[1]+= .099;
    grub[4] = grub[4] * 1.4;
    food2.innerHTML = "💵" + nFormatter(grub[4], 2) + "🧍5";
    status2.innerHTML = "🧍" + hiring[0];
    status3.innerHTML = "🍄" + nFormatter(grub[0], 2);
    status3.title = nFormatter((grub[1] * 100), 2) + "/s " + "(-" + nFormatter((grub[2] * 100), 2) + ")";
    moneyButtons();
    } else {
        cancelMulti();
    }
}

function wholesaler() {
    if(cash[0] >= grub[5] && hiring[0] >= 10) {
    cash[0]-= grub[5];
    hiring[0]-= 10;
    grub[1]+= .99;
    grub[5] = grub[5] * 1.4;
    food3.innerHTML = "💵" + nFormatter(grub[5], 2) + "🧍10";
    status2.innerHTML = "🧍" + hiring[0];
    status3.innerHTML = "🍄" + nFormatter(grub[0], 2);
    status3.title = nFormatter((grub[1] * 100), 2) + "/s " + "(-" + nFormatter((grub[2] * 100), 2) + ")";
    moneyButtons();
    } else {
        cancelMulti();
    }
}

function garden() {
    if(cash[0] >= grub[6] && hiring[0] >= 20) {
    cash[0]-= grub[6];
    hiring[0]-= 20;
    grub[1]+= 9.9;
    grub[6] = grub[6] * 1.4;
    food4.innerHTML = "💵" + nFormatter(grub[6], 2) + "🧍20";
    status2.innerHTML = "🧍" + hiring[0];
    status3.innerHTML = "🍄" + nFormatter(grub[0], 2);
    status3.title = nFormatter((grub[1] * 100), 2) + "/s " + "(-" + nFormatter((grub[2] * 100), 2) + ")";
    moneyButtons();
    } else {
        cancelMulti();
    }
}

function farm() {
    if(cash[0] >= grub[7] && hiring[0] >= 50) {
    cash[0]-= grub[7];
    hiring[0]-= 50;
    grub[1]+= 99.9;
    grub[7] = grub[7] * 1.4;
    food5.innerHTML = "💵" + nFormatter(grub[7], 2) + "🧍50";
    status2.innerHTML = "🧍" + hiring[0];
    status3.innerHTML = "🍄" + nFormatter(grub[0], 2);
    status3.title = nFormatter((grub[1] * 100), 2) + "/s " + "(-" + nFormatter((grub[2] * 100), 2) + ")";
    moneyButtons();
    } else {
        cancelMulti();
    }
}

function industry() {
    if(cash[0] >= grub[8] && hiring[0] >= 100) {
    cash[0]-= grub[8];
    hiring[0]-= 100;
    grub[1]+= 999;
    grub[8] = grub[8] * 1.4;
    food6.innerHTML = "💵" + nFormatter(grub[8], 2) + "🧍100";
    status2.innerHTML = "🧍" + hiring[0];
    status3.innerHTML = "🍄" + grub[0];
    status3.title = nFormatter((grub[1] * 100), 2) + "/s " + "(-" + nFormatter((grub[2] * 100), 2) + ")";
    moneyButtons();
    } else {
        cancelMulti();
    }
}

function terrarium() {
    if(cash[0] >= snail[2]) {
    grub[2]+= (snail[2]/100);
    snail[1]+= 5;
    if (grub[0] + (grub[1] - grub[2]) > 0) {
        grub[0] = grub[0] + (grub[1] - grub[2]);
        snail[0]+= snail[1];
    } else {
        grub[0] = 0;
    }
    snail[2] = snail[2] * 1.4;
    snail1.innerHTML = "🍄" + nFormatter(snail[2], 2) + "/s";
    status4.innerHTML = "🐌" + nFormatter(snail[0],2);
    status4.title = nFormatter((snail[1]* 100), 2) + "/s";
    status3.title = nFormatter((grub[1] * 100), 2) + "/s " + "(-" + nFormatter((grub[2] * 100), 2) + ")";
    moneyButtons();
    } else {
        cancelMulti();
    }
}

function outside() {
    if(cash[0] >= snail[3]) {
    grub[2]+= (snail[3]/100);
    snail[1]+= 10;
    if (grub[0] + (grub[1] - grub[2]) > 0) {
        grub[0] = grub[0] + (grub[1] - grub[2]);
        snail[0]+= snail[1];
    } else {
        grub[0] = 0;
    }
    snail[3] = snail[3] * 1.4;
    snail2.innerHTML = "🍄" + nFormatter(snail[3], 2) + "/s";
    status4.innerHTML = "🐌" + nFormatter(snail[0],2);
    status4.title = nFormatter((snail[1]* 100), 2) + "/s";
    status3.title = nFormatter((grub[1] * 100), 2) + "/s " + "(-" + nFormatter((grub[2] * 100), 2) + ")";
    moneyButtons();
    } else {
        cancelMulti();
    }
}

function snailFarm() {
    if(cash[0] >= snail[4]) {
    grub[2]+= (snail[4]/100);
    snail[1]+= 150;
    if (grub[0] + (grub[1] - grub[2]) > 0) {
        grub[0] = grub[0] + (grub[1] - grub[2]);
        snail[0]+= snail[1];
    } else {
        grub[0] = 0;
    }
    snail[4] = snail[4] * 1.4;
    snail3.innerHTML = "🍄" + nFormatter(snail[4], 2) + "/s";
    status4.innerHTML = "🐌" + nFormatter(snail[0],2);
    status4.title = nFormatter((snail[1]* 100), 2) + "/s";
    status3.title = nFormatter((grub[1] * 100), 2) + "/s " + "(-" + nFormatter((grub[2] * 100), 2) + ")";
    moneyButtons();
    } else {
        cancelMulti();
    }
}

function irrigate() {
    if(cash[0] >= snail[5]) {
    grub[2]+= (snail[5]/100);
    snail[1]+= 3e3;
    if (grub[0] + (grub[1] - grub[2]) > 0) {
        grub[0] = grub[0] + (grub[1] - grub[2]);
        snail[0]+= snail[1];
    } else {
        grub[0] = 0;
    }
    snail[5] = snail[5] * 1.4;
    snail4.innerHTML = "🍄" + nFormatter(snail[5], 2) + "/s";
    status4.innerHTML = "🐌" + nFormatter(snail[0],2);
    status4.title = nFormatter((snail[1]* 100), 2) + "/s";
    status3.title = nFormatter((grub[1] * 100), 2) + "/s " + "(-" + nFormatter((grub[2] * 100), 2) + ")";
    moneyButtons();
    } else {
        cancelMulti();
    }
}

function snailClone() {
    if(cash[0] >= snail[6]) {
    grub[2]+= (snail[6]/100);
    snail[1]+= 5e4;
    if (grub[0] + (grub[1] - grub[2]) > 0) {
        grub[0] = grub[0] + (grub[1] - grub[2]);
        snail[0]+= snail[1];
    } else {
        grub[0] = 0;
    }
    snail[6] = snail[6] * 1.4;
    snail5.innerHTML = "🍄" + nFormatter(snail[6], 2) + "/s";
    status4.innerHTML = "🐌" + nFormatter(snail[0],2);
    status4.title = nFormatter((snail[1]* 100), 2) + "/s";
    status3.title = nFormatter((grub[1] * 100), 2) + "/s " + "(-" + nFormatter((grub[2] * 100), 2) + ")";
    moneyButtons();
    } else {
        cancelMulti();
    }
}

function timeMachine() {
    if(cash[0] >= snail[7]) {
    grub[2]+= (snail[7]/100);
    snail[1]+= 5e5;
    if (grub[0] + (grub[1] - grub[2]) > 0) {
        grub[0] = grub[0] + (grub[1] - grub[2]);
        snail[0]+= snail[1];
    } else {
        grub[0] = 0;
    }
    snail[7] = snail[7] * 1.4;
    snail6.innerHTML = "🍄" + nFormatter(snail[7], 2) + "/s";
    status4.innerHTML = "🐌" + nFormatter(snail[0],2);
    status4.title = nFormatter((snail[1]* 100), 2) + "/s";
    status3.title = nFormatter((grub[1] * 100), 2) + "/s " + "(-" + nFormatter((grub[2] * 100), 2) + ")";
    moneyButtons();
    } else {
        cancelMulti();
    }
}

function calculateMoney() {
    cash[0]+= cash[1];
    if (grub[0] + (grub[1] - grub[2]) > 0) {
        grub[0] = grub[0] + (grub[1] - grub[2]);
        snail[0]+= snail[1];
    } else {
        grub[0] = 0;
    }
    status1.innerHTML = "💵: " + nFormatter(cash[0], 2);
    status3.innerHTML = "🍄" + nFormatter(grub[0], 2);
    status4.innerHTML = "🐌" + nFormatter(snail[0], 2);
    progress = (snail[0] / 8e9) * 100;
    document.getElementById('circle').value = progress;
    moneyButtons();
    if (progress > 100) {
        endGame();
    }
}

function endGame() {
    clearInterval(universalTimer);
    grub[1] = 0;
    grub[2] = 0;
    snail[1] = 0;
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
    snail[1] = 0;
    grub[2] = 0;
    snail1.innerHTML = "🍄1/s";
    snail2.innerHTML = "🍄10/s";
    snail3.innerHTML = "🍄100/s";
    snail4.innerHTML = "🍄1k/s";
    snail5.innerHTML = "🍄10k/s";
    snail6.innerHTML = "🍄100k/s";
    snail[2] = 1;
    snail[3] = 10;
    snail[4] = 100;
    snail[5] = 1e3;
    snail[6] = 1e4;
    snail[7] = 1e5;
    status4.title = nFormatter((snail[1]* 100), 2) + "/s";
    status3.title = nFormatter((grub[1] * 100), 2) + "/s " + "(-" + nFormatter((grub[2] * 100), 2) + ")";
}

function moneyButtons() {
    if (cash[0] >= cash[2])  {
        money1.disabled = false;
    } else {
        money1.disabled = true;
    }
    if (cash[0] >= cash[3]) {
        money2.disabled = false;
    } else {
        money2.disabled = true;
    }
    if (cash[0] >= cash[4])  {
        money3.disabled = false;
    } else {
        money3.disabled = true;
    }
    if (cash[0] >= cash[5] && snail[0] >= 1) {
        money4.disabled = false;
    } else {
        money4.disabled = true;
    }
    if (cash[0] >= cash[6] && snail[0] >= 1e6) {
        money5.disabled = false;
    } else {
        money5.disabled = true;
    }
    if (cash[0] >= cash[7] && snail[0] >= 1e9) {
        money6.disabled = false;
    } else {
        money6.disabled = true;
    }
    if (cash[0] >= hiring[1]) {
        people1.disabled = false;
    } else {
        people1.disabled = true;
    }
    if (cash[0] >= hiring[2]) {
        people2.disabled = false;
    } else {
        people2.disabled = true;
    }
    if (cash[0] >= hiring[3]) {
        people3.disabled = false;
    } else {
        people3.disabled = true;
    }
    if (cash[0] >= hiring[4]) {
        people4.disabled = false;
    } else {
        people4.disabled = true;
    }
    if (cash[0] >= grub[3] && hiring[0] >= 1) {
        food1.disabled = false;
    } else {
        food1.disabled = true;
    }
    if (cash[0] >= grub[4] && hiring[0] >= 5) {
        food2.disabled = false;
    } else {
        food2.disabled = true;
    }
    if (cash[0] >= grub[5] && hiring[0] >= 10) {
        food3.disabled = false;
    } else {
        food3.disabled = true;
    }
    if (cash[0] >= grub[6] && hiring[0] >= 20) {
        food4.disabled = false;
    } else {
        food4.disabled = true;
    }
    if (cash[0] >= grub[7] && hiring[0] >= 50) {
        food5.disabled = false;
    } else {
        food5.disabled = true;
    }
    if (cash[0] >= grub[8] && hiring[0] >= 100) {
        food6.disabled = false;
    } else {
        food6.disabled = true;
    }
    if (grub[0] >= snail[2]) {
        snail1.disabled = false;
    } else {
        snail1.disabled = true;
    }
    if (grub[0] >= snail[3]) {
        snail2.disabled = false;
    } else {
        snail2.disabled = true;
    }
    if (grub[0] >= snail[4]) {
        snail3.disabled = false;
    } else {
        snail3.disabled = true;
    }
    if (grub[0] >= snail[5]) {
        snail4.disabled = false;
    } else {
        snail4.disabled = true;
    }
    if (grub[0] >= snail[6]) {
        snail5.disabled = false;
    } else {
        snail5.disabled = true;
    }
    if (grub[0] >= snail[7]) {
        snail6.disabled = false;
    } else {
        snail6.disabled = true;
    }
    if (grub[2] > 0) {
        snail7.disabled = false;
    } else {
        snail7.disabled = true;
    }
}

function changeCols() {
    if (swipe === 0) {
        swipe = 1;
        status1.style.display = "none";
        status2.style.display = "none";
        status3.style.display = "block";
        status4.style.display = "block";
        moneyLine.style.display = "none";
        peopleLine.style.display = "none";
        foodLine.style.display = "flex";
        snailLine.style.display = "flex";
        document.getElementById("swipeButton").innerHTML= "&lt;&lt;";
    } else {
        swipe = 0;
        status1.style.display = "block";
        status2.style.display = "block";
        status3.style.display = "none";
        status4.style.display = "none";
        moneyLine.style.display = "flex";
        peopleLine.style.display = "flex";
        foodLine.style.display = "none";
        snailLine.style.display = "none";
        document.getElementById("swipeButton").innerHTML= "&gt;&gt;";
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

function handleWidthChange () {
    if (window.innerWidth > 1200) {
        status1.style.display = "flex";
        status2.style.display = "flex";
        status3.style.display = "flex";
        status4.style.display = "flex";
        moneyLine.style.display = "flex";
        peopleLine.style.display = "flex";
        foodLine.style.display = "flex";
        snailLine.style.display = "flex";
    } else if (swipe === 0) {
        status1.style.display = "block";
        status2.style.display = "block";
        status3.style.display = "none";
        status4.style.display = "none";
        moneyLine.style.display = "flex";
        peopleLine.style.display = "flex";
        foodLine.style.display = "none";
        snailLine.style.display = "none";
        document.getElementById("swipeButton").innerHTML= "&gt;&gt;";
    } else {
        status1.style.display = "none";
        status2.style.display = "none";
        status3.style.display = "block";
        status4.style.display = "block";
        moneyLine.style.display = "none";
        peopleLine.style.display = "none";
        foodLine.style.display = "flex";
        snailLine.style.display = "flex";
        document.getElementById("swipeButton").innerHTML= "&lt;&lt;";
    }
  }
  
  let prevWidth = 0;
  
  const observer = new ResizeObserver(entries => {
    for (const entry of entries) {
      const width = entry.borderBoxSize?.[0].inlineSize;
      if (typeof width === 'number' && width !== prevWidth) {
        prevWidth = width;
        handleWidthChange();
      }
    }
  });
  
  observer.observe(document.body, {box: 'border-box'});