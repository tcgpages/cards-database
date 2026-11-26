import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "メルメタルGX",
	},

	illustrator: "sadaji",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ハードコート" },
			effect: {
				ja: "このポケモンが受けるワザのダメージは「-30」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "メタルブラスト" },
			damage: "110+",
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについている[鋼]エネルギーの数×20ダメージ追加。",
			},
		},
		{
			name: { ja: "パンツァーフォースGX" },
			cost: ["Metal"],
			effect: {
				ja: "自分のトラッシュにある[鋼]エネルギーを好きなだけ、このポケモンにつける。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 544666,
			},
		},
	],

	evolveFrom: {
		ja: "メルタン",
	},

	retreat: 4,
	regulationMark: "C",
	rarity: "Ultra Rare",
	dexId: [809],

	suffix: "GX",
};

export default card;
