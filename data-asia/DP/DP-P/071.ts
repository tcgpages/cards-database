import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ゴウカザルLV.X" },
	illustrator: "Shizurow",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	stage: "LEVEL-UP",
	level: "X",
	evolveFrom: { ja: "ゴウカザル" },
	abilities: [
		{
			type: "Poke-POWER",
			name: { ja: "バーニングヘッド" },
			effect: {
				ja: "自分の番に1回使える。自分の山札のカードを上から3枚見て、どれか1枚を手札に加える。その後、残りの2枚をトラッシュ。このパワーは、このポケモンが特殊状態なら使えない。",
			},
		},
	],
	attacks: [
		{
			name: { ja: "だいえんじょう" },
			cost: ["Fire", "Fire"],
			damage: 150,
			effect: {
				ja: "自分のトラッシュの{R}エネルギーを8枚、相手プレイヤーに見せてから、山札にもどす。その後、山札を切る。（{R}エネルギーを8枚もどせないなら、このワザは失敗。）",
			},
		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+30",
		},
	],
	resistances: [],
	retreat: 0,
	effect: { ja: "このカードは、バトル場のゴウカザルに重ねてレベルアップさせる。\nレベルアップ前のワザ・ポケパワーも使うことができ、ポケボディーもはたらく。" },
	variants: [
		{ type: "holo" },
	],
	rarity: "Promo",
	dexId: [392],
};

export default card;
