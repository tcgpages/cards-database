import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "チュリネ"
	},
	rarity: "Promo",
	illustrator: "Sumiyoshi Kizuki",
	category: "Pokemon",
	hp: 50,
	types: [
		"Grass"
	],
	stage: "Basic",
	dexId: [
		548
	],
	description: {
		ja: "頭の 葉っぱを かじると とても 苦いが 疲れた 体を 元気にする 効果が あるのだ。"
	},
	attacks: [
		{
			name: {
				ja: "しびれごな"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
			},
			cost: [
				"Grass"
			]
		},
		{
			name: {
				ja: "いあいぎり"
			},
			cost: [
				"Grass",
				"Colorless"
			],
			damage: 20
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		}
	],
	retreat: 1
}

export default card
