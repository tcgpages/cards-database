import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "ホシガリス"
	},
	rarity: "Common",
	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 70,
	types: [
		"Colorless"
	],
	stage: "Basic",
	dexId: [
		819
	],
	description: {
		ja: "ガラルの いたるところに いる。 左右の ほっぺに 木の実を 蓄えていないと 不安。"
	},
	attacks: [
		{
			name: {
				ja: "たいあたり"
			},
			cost: [
				"Colorless"
			],
			damage: 10
		},
		{
			name: {
				ja: "かみつく"
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
