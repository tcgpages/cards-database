import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ガブリアスLV.X" },
	illustrator: "Ryo Ueda",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],
	stage: "LEVEL-UP",
	level: "X",
	evolveFrom: { ja: "ガブリアス" },
	abilities: [
		{
			type: "Poke-POWER",
			name: { ja: "りゅうのはどう" },
			effect: {
				ja: "自分の番に、このカードを手札から出してポケモンをレベルアップさせたとき、1回使える。コインを3回投げ、オモテの数ぶんのダメージカウンターを、相手のベンチポケモン全員に、それぞれのせる。",
			},
		},
	],
	attacks: [
		{
			name: { ja: "そせい" },
			cost: [],
			effect: {
				ja: "自分のトラッシュから「ポケモン（ポケモンLV.Xはのぞく）」を1枚選び、「たねポケモン」としてベンチに出す。その後、のぞむなら、自分のトラッシュの基本エネルギーを3枚まで選び、そのポケモンにつけてよい。",
			},
		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2",
		},
	],
	resistances: [],
	retreat: 0,
	effect: { ja: "このカードは、バトル場のガブリアスに重ねてレベルアップさせる。\nレベルアップ前のワザ・ポケパワーも使うことができ、ポケボディーもはたらく。" },
	variants: [
		{ type: "holo" },
	],
	rarity: "Promo",
	dexId: [445],
};

export default card;
