import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ガーメイル" },
	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",
	level: 41,
	evolveFrom: { ja: "ミノムッチ" },
	weight: "23.3 kg",
	abilities: [
		{
			type: "Poke-BODY",
			name: { ja: "かくらんりんぷん" },
			effect: { ja: "自分のポケモン全員のワザは、相手のバトルポケモンの抵抗力に関係なく、ダメージを与える。" },
		},
	],
	attacks: [
		{
			name: { ja: "ちからをかりる" },
			cost: ["Grass"],
			damage: "30×",
			effect: { ja: "自分のベンチの「ミノマダム」のタイプの数×30ダメージ。" },
		},
		{
			name: { ja: "クイックタッチ" },
			cost: ["Grass", "Colorless"],
			damage: 40,
			effect: { ja: "のぞむなら、自分を自分のベンチポケモンと入れ替えてよい。その場合、自分のエネルギーを好きなだけ選び、新しく出したバトルポケモンにつけ替える。" },
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20",
		},
	],
	retreat: 0,
	variants: [
		{ type: "holo" },
	],
	rarity: "Promo",
	dexId: [414],
};

export default card;
