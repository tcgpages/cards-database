import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "ニャルマー"
	},
	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: [
		"Colorless"
	],
	stage: "Basic",
	dexId: [
		431
	],
	description: {
		ja: "ご機嫌な ニャルマーは 尻尾で 新体操の リボンのような 美しい 動きを 見せる。"
	},
	attacks: [
		{
			name: {
				ja: "ねこかぶり"
			},
			effect: {
				ja: "相手は相手自身の手札を1枚選び、山札の下にもどす。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "ひっかく"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 20
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 1,
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
