import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "テッシード"
	},
	illustrator: "Satoshi Shirai",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: [
		"Metal"
	],
	stage: "Basic",
	dexId: [
		597
	],
	description: {
		ja: "洞穴の 天井に 突きささり 岩の 鉄分を 吸いとる。 危険がせまると トゲを 撃ち出す。"
	},
	attacks: [
		{
			name: {
				ja: "かたくなる"
			},
			effect: {
				ja: "次の相手の番、このポケモンは「60」以下のワザのダメージを受けない。"
			},
			cost: [
				"Metal",
				"Colorless"
			]
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
			type: "Psychic",
			value: "-20"
		}
	],
	retreat: 2,
	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card
