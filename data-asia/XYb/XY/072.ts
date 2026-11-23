import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ダークライEX"
	},
	illustrator: "Eske Yoshinob",
	rarity: "None",
	category: "Pokemon",
	hp: 180,
	types: [
		"Darkness"
	],
	dexId: [
		491
	],
	stage: "Basic",
	suffix: "EX",
	attacks: [
		{
			name: {
				ja: "あくのはどう"
			},
			effect: {
				ja: "自分の場のポケモンについている悪エネルギーの合計×20ダメージを追加。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: "20+"
		},
		{
			name: {
				ja: "ダークヘッド"
			},
			effect: {
				ja: "相手のバトルポケモンがねむりなら、80ダメージを追加。"
			},
			cost: [
				"Darkness",
				"Colorless",
				"Colorless"
			],
			damage: "80+"
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		}
	],
	retreat: 2,
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
