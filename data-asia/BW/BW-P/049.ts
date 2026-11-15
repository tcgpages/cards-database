import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ズルッグ"
	},
	rarity: "Promo",
	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 50,
	types: [
		"Darkness"
	],
	stage: "Basic",
	dexId: [
		559
	],
	description: {
		ja: "視線の 合った 相手に いきなり 頭突き 攻撃を 仕掛ける。 とても 硬い 頭がい骨を 持つ。"
	},
	attacks: [
		{
			name: {
				ja: "にらむ"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "とびひざげり"
			},
			cost: [
				"Darkness",
				"Colorless",
				"Colorless"
			],
			damage: 30
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
	retreat: 1
}

export default card
