import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ズバット"
	},
	illustrator: "match",
	rarity: "None",
	category: "Pokemon",
	hp: 50,
	types: [
		"Psychic"
	],
	stage: "Basic",
	dexId: [
		41
	],
	description: {
		ja: "口から 出す 超音波で 両目が なくても まわりの 障害物を 察知できる。"
	},
	attacks: [
		{
			name: {
				ja: "ちょくげきひこう"
			},
			effect: {
				ja: "相手のポケモンを1匹選び、10ダメージ。［ベンチは弱点・抵抗力の計算をしない。］"
			},
			cost: [
				"Colorless"
			]
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		}
	],
	retreat: 1,
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
