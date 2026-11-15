import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "ヌイコグマ"
	},
	rarity: "Common",
	illustrator: "so-taro",
	category: "Pokemon",
	hp: 80,
	types: [
		"Colorless"
	],
	stage: "Basic",
	dexId: [
		759
	],
	description: {
		ja: "ふわふわの 毛並みは 触り心地が 抜群だが うかつに 手を だすと 手痛い 反撃を 受けてしまう。"
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
				ja: "とびつく"
			},
			effect: {
				ja: "コインを1回投げオモテなら、40ダメージ追加。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: "40+"
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 2,
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
