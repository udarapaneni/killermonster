const attackValue = 10;
const strongAttackValue = 17;
const monsterAttactValue = 14;
const heal_value = 20;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackMonster(mode) {
  let maxDamage;
  if (mode === attackValue) {
    maxDamage = attackValue;
  } else if (mode === strongAttackValue) {
    maxDamage = strongAttackValue;
  }
  const damage = dealMonsterDamage(mode);
  currentMonsterHealth -= damage;
  const playerDamage = dealPlayerDamage(monsterAttactValue);
  currentPlayerHealth -= playerDamage;
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You won!');
  } else if (currentMonsterHealth > 0 && currentPlayerHealth <= 0) {
    alert('You Lost');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert('Its a draw');
  }
}

function attackHandler() {
  attackMonster(attackValue);
}

function strongAttackHandler() {
  attackMonster(strongAttackValue);
}

function healPlayerHandler() {
  increasePlayerHealth(heal_value);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
