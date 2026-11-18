import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ズルッグ"
	},
	rarity: "Promo",
	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 60,
	types: [
		"Darkness"
	],
	stage: "Basic",
	dexId: [
		559
	],
	description: {
		ja: "頑丈な ずがいこつが 自慢。 いきなり 頭突きを かましてくるが 重さで 自分も フラフラしてる。"
	},
	attacks: [
		{
			name: {
				ja: "ずつき"
			},
			cost: [
				"Darkness"
			],
			damage: 10
		},
		{
			name: {
				ja: "けたぐり"
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
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		}
	],
	retreat: 2
}

export default card
