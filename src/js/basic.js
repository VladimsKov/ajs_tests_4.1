export default function sum(items) {
  let result = 0;
  for (const item of items) {
    result += item;
  }
  return result;
}

//homework

export function warriorHealth(warrior) {
  if (warrior.health > 50) return "healthy";
  if (warrior.health <= 50 && warrior.health >= 15) return "wounded";
  if (warrior.health < 15) return "critical";
}