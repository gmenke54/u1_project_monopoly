//Global Variables Here:
const spc1 = document.getElementById('go');
const spc2 = document.querySelector('#botProps').children[8];
const spc3 = document.querySelector('#botProps').children[7];
const spc4 = document.querySelector('#botProps').children[6];
const spc5 = document.querySelector('#botProps').children[5];
const spc6 = document.querySelector('#botProps').children[4];
const spc7 = document.querySelector('#botProps').children[3];
const spc8 = document.querySelector('#botProps').children[2];
const spc9 = document.querySelector('#botProps').children[1];
const spc10 = document.querySelector('#botProps').children[0];
const spc11 = document.getElementById('jail');
const spc12 = document.querySelector('#leftProps').children[8];
const spc13 = document.querySelector('#leftProps').children[7];
const spc14 = document.querySelector('#leftProps').children[6];
const spc15 = document.querySelector('#leftProps').children[5];
const spc16 = document.querySelector('#leftProps').children[4];
const spc17 = document.querySelector('#leftProps').children[3];
const spc18 = document.querySelector('#leftProps').children[2];
const spc19 = document.querySelector('#leftProps').children[1];
const spc20 = document.querySelector('#leftProps').children[0];
const spc21 = document.getElementById('freePark');
const spc22 = document.querySelector('#topProps').children[0];
const spc23 = document.querySelector('#topProps').children[1];
const spc24 = document.querySelector('#topProps').children[2];
const spc25 = document.querySelector('#topProps').children[3];
const spc26 = document.querySelector('#topProps').children[4];
const spc27 = document.querySelector('#topProps').children[5];
const spc28 = document.querySelector('#topProps').children[6];
const spc29 = document.querySelector('#topProps').children[7];
const spc30 = document.querySelector('#topProps').children[8];
const spc31 = document.getElementById('goJail');
const spc32 = document.querySelector('#rightProps').children[0];
const spc33 = document.querySelector('#rightProps').children[1];
const spc34 = document.querySelector('#rightProps').children[2];
const spc35 = document.querySelector('#rightProps').children[3];
const spc36 = document.querySelector('#rightProps').children[4];
const spc37 = document.querySelector('#rightProps').children[5];
const spc38 = document.querySelector('#rightProps').children[6];
const spc39 = document.querySelector('#rightProps').children[7];
const spc40 = document.querySelector('#rightProps').children[8];
let spacesArr = [
  spc1,
  spc2,
  spc3,
  spc4,
  spc5,
  spc6,
  spc7,
  spc8,
  spc9,
  spc10,
  spc11,
  spc12,
  spc13,
  spc14,
  spc15,
  spc16,
  spc17,
  spc18,
  spc19,
  spc20,
  spc21,
  spc22,
  spc23,
  spc24,
  spc25,
  spc26,
  spc27,
  spc28,
  spc29,
  spc30,
  spc31,
  spc32,
  spc33,
  spc34,
  spc35,
  spc36,
  spc37,
  spc38,
  spc39,
  spc40
];

const ply1HandDisp = document.getElementById('ply1HandDisp');
const ply2HandDisp = document.getElementById('ply2HandDisp');
const ply2BankDisp = document.getElementById('ply2BankDisp');
const ply1BankDisp = document.getElementById('ply1BankDisp');

// let diceStatus = 'on';
const notBox = document.getElementById('noticeBox');
const notMsg = document.getElementById('noticeMessage');

const token1 = document.getElementById('token1');
const token2 = document.getElementById('token2');

const ply1NameBtn = document.getElementById('ply1SubName');
let p1NameInput = document.getElementById('ply1Input').value;

const ply2NameBtn = document.getElementById('ply2SubName');
let p2NameInput = document.getElementById('ply2Input').value;

class player {
  constructor(tokenNum, persName) {
    this.persName = persName;
    this.token = tokenNum;
    this.curPos = 0;
    this.bankAcc = 1500;
    this.propsOwned = [];
    this.propsOwnedSpcs = [];
    this.propsOwnedObjs = [];
    this.totPropsVal = 0;
    this.totVal = 1500;
    this.jailCount = 0;
    this.doublesCount = 0;
  }
}
let p1 = new player(token1, 'Player1');
let p2 = new player(token2, 'Player2');

class colProperty {
  constructor(name, cost, spaceNum, houseCost) {
    this.name = name;
    this.cost = cost;
    this.rent = Math.ceil(this.cost / 13);
    this.spc = spacesArr[spaceNum];
    this.spcNum = spaceNum;
    this.isOwned = false;
    this.houseCost = houseCost;
    this.curHouses = 0;
    this.owner = null;
    this.isMort = false;
  }
}
let medit = new colProperty('Mediteranean Avenue', 60, 1, 50);
let baltic = new colProperty('Baltic Avenue', 60, 3, 50);
let oriental = new colProperty('Oriental Avenue', 100, 6, 50);
let vermont = new colProperty('Vermont Avenue', 100, 8, 50);
let connet = new colProperty('Conneticut Avenue', 120, 9, 50);
let stChar = new colProperty('St. Charles Place', 140, 11, 100);
let states = new colProperty('States Avenue', 140, 13, 100);
let virg = new colProperty('Virginia Avenue', 160, 14, 100);
let stJam = new colProperty('St. James Place', 180, 16, 100);
let tenn = new colProperty('Tennessee Avenue', 180, 18, 100);
let newY = new colProperty('New York Avenue', 200, 19, 100);
let kent = new colProperty('Kentucky Avenue', 220, 21, 150);
let indiana = new colProperty('Indiana Avenue', 220, 23, 150);
let illi = new colProperty('Illinois Avenue', 240, 24, 150);
let atl = new colProperty('Atlantic Avenue', 260, 26, 150);
let vent = new colProperty('Ventor Avenue', 260, 27, 150);
let marv = new colProperty('Marvin Gardens', 280, 29, 150);
let pac = new colProperty('Pacific Avenue', 300, 31, 200);
let norC = new colProperty('North Carolina Avenue', 300, 32, 200);
let penn = new colProperty('Pennsylvania Avenue', 320, 34, 200);
let park = new colProperty('Park Place', 350, 37, 200);
let boardW = new colProperty('Boardwalk', 400, 39, 200);

class rrProperty {
  constructor(name, spaceNum) {
    this.name = name;
    this.cost = 200;
    this.rent = 25;
    this.spc = spacesArr[spaceNum];
    this.spcNum = spaceNum;
    this.isOwned = false;
    this.owner = null;
    this.isMort = false;
  }
}
let readR = new rrProperty('Reading Railroad', 5);
let pennR = new rrProperty('Pennsylvania Railroad', 15);
let boR = new rrProperty('B. & O. Railroad', 25);
let shortR = new rrProperty('Short Line Railroad', 35);

class utilProperty {
  constructor(name, spaceNum) {
    this.name = name;
    this.cost = 150;
    this.rent = 21;
    this.spc = spacesArr[spaceNum];
    this.spcNum = spaceNum;
    this.isOwned = false;
    this.owner = null;
    this.isMort = false;
  }
}
let elec = new utilProperty('Electric Company', 12);
let water = new utilProperty('Water Works', 28);

let propsArr = [
  'go',
  medit,
  'CC',
  baltic,
  'IT',
  readR,
  oriental,
  'chance',
  vermont,
  connet,
  'jail',
  stChar,
  elec,
  states,
  virg,
  pennR,
  stJam,
  'CC',
  tenn,
  newY,
  'Free Parking',
  kent,
  'chance',
  indiana,
  illi,
  boR,
  atl,
  vent,
  water,
  marv,
  'goJail',
  pac,
  norC,
  'CC',
  penn,
  shortR,
  'chance',
  park,
  'LT',
  boardW
];

const rollBtn1 = document.querySelector('#rollBtn1');
const rollBtn2 = document.querySelector('#rollBtn2');
const clearCardBtn = document.querySelector('#clearCardBtn');
const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');
rollBtn2.style.opacity = 0;
yesBtn.style.opacity = 0;
noBtn.style.opacity = 0;

const p1MortBtn = document.querySelector('#p1MortBtn');
const p2MortBtn = document.querySelector('#p2MortBtn');

const p2BuyHouseBtn = document.querySelector('#p2BuyHouseBtn');
const p1BuyHouseBtn = document.querySelector('#p1BuyHouseBtn');

let freeParkPot = 0;
p2MortBtn.style.opacity = 0;
p2BuyHouseBtn.style.opacity = 0;

//////////////////////

//Functions Here:

dispMoney = (ply) => {
  if (ply === p1) {
    ply1BankDisp.innerText = p1.bankAcc;
  } else if (ply === p2) {
    ply2BankDisp.innerText = p2.bankAcc;
  }
  checkWin();
};

dispHand = (ply) => {
  if (ply === p1) {
    ply1HandDisp.innerText = p1.propsOwned;
  } else if (ply === p2) {
    ply2HandDisp.innerText = p2.propsOwned;
  }
};

createNot = (message) => {
  notMsg.innerText = message;
  notBox.style.opacity = 1;
  clearCardBtn.addEventListener('click', () => {
    notBox.style.opacity = 0;
    // add clearTimeout(timeoutID) here referencing the id of the pauseJumpPos ID
  });
};

pauseJumpPos = (ply, newPos) => {
  setTimeout(
    (jumpPos = () => {
      notBox.style.opacity = 0;
      spacesArr[newPos].appendChild(ply.token);
      ply.curPos = newPos;
      checkSpc(ply);
    }),
    3000
  );
};

gainMoney = (ply, amtGain) => {
  ply.bankAcc += amtGain;
  dispMoney(ply);
  ply.totVal += amtGain;
};

buyProp = (ply, prop) => {
  const propName = prop.name;
  const propCost = prop.cost;
  notMsg.innerText = `You landed on ${propName} which costs $${propCost}. Would you like to purchase ${propName}?`;
  notBox.style.opacity = 1;
  yesBtn.style.opacity = 1;
  noBtn.style.opacity = 1;
  clearCardBtn.style.opacity = 0;
  yesBtn.onclick = () => {
    gainMoney(ply, -1 * prop.cost);
    ply.totVal += prop.cost / 2;
    ply.propsOwned.push(prop.name);
    ply.propsOwnedSpcs.push(prop.spc);
    ply.propsOwnedObjs.push(prop);
    dispHand(ply);
    prop.isOwned = true;
    prop.owner = ply;
    yesBtn.style.opacity = 0;
    noBtn.style.opacity = 0;
    clearCardBtn.style.opacity = 1;
    notBox.style.opacity = 0;
  };
  noBtn.onclick = () => {
    notBox.style.opacity = 0;
  };
};

payRent = (curPly, owner, prop) => {
  let propName = prop.name;
  let ownerName = owner.persName;
  let propRent = prop.rent;
  if (prop.isMort === false) {
    gainMoney(curPly, -1 * prop.rent);
    gainMoney(owner, prop.rent);
    createNot(`You landed on ${propName}. Pay ${ownerName} $${propRent}.`);
  } else if (prop.isMort === true) {
    createNot(`You landed on ${propName} but it is mortgaged.`);
  }
};

checkOwned = (ply) => {
  let propIndex = ply.curPos;
  let property = propsArr[propIndex];
  let propIsOwned = property.isOwned;
  let owner = property.owner;
  if (propIsOwned === true && ply !== owner) {
    payRent(ply, owner, property);
  } else if (propIsOwned === false) {
    buyProp(ply, property);
  }
};

checkSpc = (ply) => {
  if (ply.curPos === 0) {
    createNot('You landed on go, collect an extra $200.');
    gainMoney(ply, 200);
  } else if (ply.curPos === 30) {
    createNot('Go directly to jail. Do not pass go. Do not collect $200.');
    //  FIX JAIL LOGIC HERE:
    //  if (ply.curPos !== 10) {
    //   checkSpc(ply);
    // } else {
    //   ply.jailCount += 1;
    pauseJumpPos(ply, 10);
  } else if (ply.curPos === 4) {
    createNot('You landed on income taxes. Pay $200.');
    gainMoney(ply, -200);
    freeParkPot += 200;
  } else if (ply.curPos === 10) {
    createNot('You are just visiting jail.');
  } else if (ply.curPos === 38) {
    createNot('You landed on luxury taxes. Pay $100.');
    gainMoney(ply, -100);
    freeParkPot += 100;
  } else if (ply.curPos === 7 || ply.curPos === 22 || ply.curPos === 36) {
    createNot(
      'You landed on a chance space. You will now jump to a random space on the board. Good luck!'
    );
    let randomSpc = Math.floor(Math.random() * 39);
    pauseJumpPos(ply, randomSpc);
  } else if (ply.curPos === 20) {
    createNot(
      `You landed on Free Parking. Collect the $${freeParkPot} jackpot!`
    );
    gainMoney(ply, freeParkPot);
  } else if (ply.curPos === 2 || ply.curPos === 17 || ply.curPos === 33) {
    let randomGain = Math.ceil(Math.random() * 150);
    let randomLoss = Math.ceil(Math.random() * 100);
    let fateDecider = Math.ceil(Math.random() * 2);
    if (fateDecider === 1) {
      createNot(
        `You landed on Community Chest and today is your lucky day. Collect $${randomGain}!`
      );
      gainMoney(ply, randomGain);
    } else if (fateDecider === 2) {
      createNot(
        `Uh-oh! You landed on Community Chest and it's empty. Pay $${randomLoss}.`
      );
      gainMoney(ply, -1 * randomLoss);
      freeParkPot += randomLoss;
    }
  } else {
    checkOwned(ply);
  }
};

rollDice = (ply) => {
  if (ply === p1) {
    p1MortBtn.style.opacity = 0;
    p2MortBtn.style.opacity = 1;
    p1BuyHouseBtn.style.opacity = 0;
    p2BuyHouseBtn.style.opacity = 1;
  } else if (ply === p2) {
    p2MortBtn.style.opacity = 0;
    p1MortBtn.style.opacity = 1;
    p2BuyHouseBtn.style.opacity = 0;
    p1BuyHouseBtn.style.opacity = 1;
  }
  notBox.style.opacity = 0;
  let dice1 = Math.ceil(Math.random() * 6);
  let dice2 = Math.ceil(Math.random() * 6);
  //Need to add doubles logic here:
  // if (dice1 === dice2) {
  //   ply.doublesCount += 1;
  // }
  let roll = dice1 + dice2;
  alert(`You rolled a ${dice1} and a ${dice2} for a total of ${roll}`);
  // let roll = 21;
  ply.curPos += roll;
  if (ply.curPos >= spacesArr.length) {
    pausePassGo(ply);
  } else {
    spacesArr[ply.curPos].appendChild(ply.token);
    checkSpc(ply);
  }
};

pausePassGo = (ply) => {
  ply.curPos -= 40;
  spacesArr[ply.curPos].appendChild(ply.token);
  createNot('You passed Go. Collect $200.');
  gainMoney(ply, 200);
  setTimeout(
    (passGo = () => {
      checkSpc(ply);
    }),
    3000
  );
};

checkWin = () => {
  if (p1.totVal < 0) {
    setTimeout(() => {
      window.location.href = 'gameover.html' + '#' + p2.persName;
    }, 3000);
  } else if (p2.totVal < 0) {
    setTimeout(() => {
      window.location.href = 'gameover.html' + '#' + p1.persName;
    }, 3000);
  }
};

mortProp = (ply) => {
  createNot('Click on the property you want to mortgage.');
  const propSpcs = ply.propsOwnedSpcs;
  const propObjs = ply.propsOwnedObjs;
  for (let i = 0; i < propSpcs.length; i++) {
    propSpcs[i].onclick = () => {
      if (propObjs[i].isMort === true) {
        createNot(`${propObjs[i].name} is already mortgaged.`);
      } else {
        propObjs[i].isMort = true;
        createNot(
          `${propObjs[i].name} is now mortgaged. Collect $${
            propObjs[i].cost / 2
          }.`
        );
        gainMoney(ply, propObjs[i].cost / 2);
        ply.totVal -= propObjs[i].cost / 2;
      }
    };
  }
};

buyHouse = (ply) => {
  createNot('Click on a property to purchase a house for it.');
  const propSpcs = ply.propsOwnedSpcs;
  const propObjs = ply.propsOwnedObjs;
  for (let i = 0; i < propSpcs.length; i++) {
    propSpcs[i].onclick = () => {
      if (
        propObjs[i].spcNum === 5 ||
        propObjs[i].spcNum === 15 ||
        propObjs[i].spcNum === 25 ||
        propObjs[i].spcNum === 35 ||
        propObjs[i].spcNum === 12 ||
        propObjs[i].spcNum === 28
      ) {
        createNot(
          `You can't build houses on ${propObjs[i].name} because it is not a color set property.`
        );
      } else if (propObjs[i].isMort === true) {
        createNot(
          `${propObjs[i].name} is mortgaged. You must unmortgage it before you can buy a house.`
        );
      } else if (propObjs[i].curHouses >= 5) {
        createNot(
          `${propObjs[i].name} already has the maximum number of houses and costs $${propObjs[i].rent} to land on.`
        );
      } else {
        propObjs[i].curHouses += 1;
        propObjs[i].rent = Math.floor(propObjs[i].rent * 2.5);
        createNot(
          `You purchased a house for ${propObjs[i].name} which now costs $${propObjs[i].rent} to land on.`
        );
        gainMoney(ply, -1 * propObjs[i].houseCost);
      }
    };
  }
};

//////////////////////

// Click Events Here:
rollBtn1.addEventListener('click', () => {
  rollDice(p1);
  rollBtn1.style.opacity = 0;
  rollBtn2.style.opacity = 1;
});

rollBtn2.addEventListener('click', () => {
  rollDice(p2);
  rollBtn2.style.opacity = 0;
  rollBtn1.style.opacity = 1;
});

ply1NameBtn.addEventListener('click', () => {
  p1NameInput = document.getElementById('ply1Input').value;
  p1.persName = p1NameInput;
  document.querySelector('#ply1NameInput').style.opacity = 0;
  document.getElementById('ply1NameDisp').innerText = p1.persName;
  document.getElementById('nameHandDisp1').innerText = p1.persName;
  let firstLet = p1.persName[0];
  document.getElementById('token1').innerText = firstLet.toUpperCase();
});

ply2NameBtn.addEventListener('click', () => {
  p2NameInput = document.getElementById('ply2Input').value;
  p2.persName = p2NameInput;
  document.querySelector('#ply2NameInput').style.opacity = 0;
  document.getElementById('ply2NameDisp').innerText = p2.persName;
  document.getElementById('nameHandDisp2').innerText = p2.persName;
  let firstLet = p2.persName[0];
  document.getElementById('token2').innerText = firstLet.toUpperCase();
});

p1MortBtn.addEventListener('click', () => {
  mortProp(p1);
});

p2MortBtn.addEventListener('click', () => {
  mortProp(p2);
});

p1BuyHouseBtn.addEventListener('click', () => {
  buyHouse(p1);
});

p2BuyHouseBtn.addEventListener('click', () => {
  buyHouse(p2);
});

//////////////////////
