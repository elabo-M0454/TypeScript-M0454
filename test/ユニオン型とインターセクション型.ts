//ユニオン型
function judgeNumberOrString1(value: number | string) {
  if (typeof value === "string") {
    console.log(`${value} is string!`);
  } else {
    console.log(`${value} is number!`);
  }
}

//ユニオン型出力
judgeNumberOrString1(265);

//インターセクション型
type Priest = {
  name: string;
  HP: number;
  healMagic: string[];
};

type Mage = {
  name: string;
  HP: number;
  attackMagic: string[];
};

type Sage = Priest & Mage;

function showUsableMagic(character: Sage) {
  console.log(character.attackMagic.concat(character.healMagic));
}

//インターセクション型出力
const ikeda: Sage = {
  name: "ikeda",
  HP: 100,
  attackMagic: ["fire", "bigFire"],
  healMagic: ["heal", "superHeal"],
};
showUsableMagic(ikeda);
