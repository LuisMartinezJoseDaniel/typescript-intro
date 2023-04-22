const skills: string[] = ["bash", "counter", "Healing"];

interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string;
}

const strider: Character = {
  name: "Strider",
  hp: 100,
  skills: ["bash", "counter", "Healing"],
};

strider.hometown = "Rivendell";

console.table(strider);

export {};
