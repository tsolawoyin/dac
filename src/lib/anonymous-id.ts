const ID_KEY = "dac_anon_id";
const USERNAME_KEY = "dac_anon_username";

const ADJECTIVES = [
  "Swift", "Brave", "Calm", "Eager", "Keen",
  "Bold", "Wise", "Quick", "Sharp", "Bright",
  "Neat", "Firm", "Cool", "Grand", "Vivid",
];

const ANIMALS = [
  "Falcon", "Tiger", "Eagle", "Otter", "Panda",
  "Heron", "Lynx", "Cobra", "Bison", "Raven",
  "Whale", "Gecko", "Crane", "Moose", "Viper",
];

function generateUsername(): string {
  const adj = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
  const animal = ANIMALS[Math.floor(Math.random() * ANIMALS.length)];
  const num = Math.floor(1000 + Math.random() * 9000); // 4-digit
  return `${adj}${animal}-${num}`;
}

export function getAnonId(): string {
  let id = localStorage.getItem(ID_KEY);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(ID_KEY, id);
  }
  return id;
}

export function getAnonUsername(): string {
  let name = localStorage.getItem(USERNAME_KEY);
  if (!name) {
    name = generateUsername();
    localStorage.setItem(USERNAME_KEY, name);
  }
  return name;
}
