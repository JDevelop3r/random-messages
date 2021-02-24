const messages = [
  'Oscar',
  "Jose",
  'Ana',
  "Julia",
  "Manuel",
  "Diego",
  "Valeria"
]

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
}

module.exports = { randomMsg };