import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "アメモース"
	},
	rarity: "Common",
	illustrator: "chibi",
	category: "Pokemon",
	hp: 90,
	types: [
		"Grass"
	],
	stage: "Stage1",
	dexId: [
		284
	],
	description: {
		ja: "薄い ハネの ような 触角は 湿気を 吸いやすい。 雨の 日は 木の ウロなどで じっと 過ごす。"
	},
	attacks: [
		{
			name: {
				ja: "もようでおどす"
			},
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、手札からエネルギーを出してつけられない。"
			},
			cost: [
				"Colorless"
			],
			damage: 30
		},
		{
			name: {
				ja: "とんぼがえり"
			},
			effect: {
				ja: "このポケモンをベンチポケモンと入れ替える。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 40
		}
	],
	evolveFrom: {
		ja: "アメタマ"
	},
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	retreat: 1,
	regulationMark: "D",
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
