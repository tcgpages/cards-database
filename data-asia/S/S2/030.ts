import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "マルマイン"
	},
	rarity: "Common",
	illustrator: "otumami",
	category: "Pokemon",
	hp: 90,
	types: [
		"Lightning"
	],
	stage: "Stage1",
	dexId: [
		101
	],
	description: {
		ja: "あふれるほどの 電気エネルギーを 体内に ためこんでいるので 少しの 刺激で 爆発する。"
	},
	attacks: [
		{
			name: {
				ja: "たまあつめ"
			},
			effect: {
				ja: "自分の山札からエネルギーを3枚まで選び、相手に見せて、手札に加える。そして山札を切る。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "ボールアタック"
			},
			cost: [
				"Lightning",
				"Colorless"
			],
			damage: 70
		}
	],
	evolveFrom: {
		ja: "マルマインGX"
	},
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 0,
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
