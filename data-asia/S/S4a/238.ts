import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ワンパチ"
	},
	illustrator: "sowsow",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: [
		"Lightning"
	],
	stage: "Basic",
	dexId: [
		835
	],
	description: {
		ja: "走る ときに しっぽの 根元から 電気を 生み出す。 ガラルでは 牧羊犬として 人気。"
	},
	attacks: [
		{
			name: {
				ja: "ほえる"
			},
			effect: {
				ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "バチバチ"
			},
			cost: [
				"Lightning"
			],
			damage: 10
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 1,
	regulationMark: "D",
	variants: [
		{
			type: "holo",
			languages: [
				"ja"
			]
		}
	]
}

export default card
