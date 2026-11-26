import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ヤレユータン"
	},
	illustrator: "nagimiso",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 120,
	types: [
		"Colorless"
	],
	stage: "Basic",
	dexId: [
		765
	],
	description: {
		ja: "森の 隅々まで 知り尽くし 傷ついた ポケモンが いると 薬草を 探して 治療する。"
	},
	abilities: [
		{
			name: {
				ja: "さるぢえ"
			},
			effect: {
				ja: "自分の番に1回使える。自分の手札を1枚選び、山札の上のカードと入れ替える。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "はりたおす"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: 70
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 2,
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
