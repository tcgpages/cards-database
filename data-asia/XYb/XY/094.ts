import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "フレフワン"
	},
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 90,
	types: [
		"Fairy"
	],
	stage: "Stage1",
	dexId: [
		683
	],
	description: {
		ja: "さまざまな においを 作り出す。 相手の 嫌がる においを 出して 戦いを 有利に 進めるのだ。"
	},
	abilities: [
		{
			name: {
				ja: "フェアリートランス"
			},
			effect: {
				ja: "自分の場のポケモンについている妖エネルギーを1個選び、自分の別のポケモンにつけ替える。この特性は、自分の番に何回でも使える。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "ようせいのかぜ"
			},
			cost: [
				"Fairy",
				"Fairy",
				"Colorless"
			],
			damage: 60
		}
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		}
	],
	retreat: 2,
	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
			foil: "mirror"
		}
	]
}

export default card
