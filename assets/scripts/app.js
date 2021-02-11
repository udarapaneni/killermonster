const attackValue = 10;
const monsterAttactValue = 14;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
  const damage = dealMonsterDamage(attackValue);
  currentMonsterHealth -= damage;
  const playerDamage = dealPlayerDamage(monsterAttactValue);
  currentPlayerHealth -= playerDamage;
  if (currentMonsterHealth <= 0 && currentMonsterHealth > 0) {
    alert('You won!');
  } else if (currentMonsterHealth > 0 && currentPlayerHealth <= 0) {
    alert('You Lost');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert('Its a draw');
  }
}

attackBtn.addEventListener('click', attackHandler);
