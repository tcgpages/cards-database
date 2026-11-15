import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "モルペコ"
	},
	illustrator: "Akira Komayama",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 80,
	types: [
		"Lightning"
	],
	stage: "Basic",
	dexId: [
		877
	],
	description: {
		ja: "いつも お腹を すかせている。 ポケットの ような 袋に 入れた タネを 食べて 電気を つくる。"
	},
	attacks: [
		{
			name: {
				ja: "いちゃもん"
			},
			effect: {
				ja: "相手のバトルポケモンが持っているワザを1つ選ぶ。次の相手の番、このワザを受けたポケモンは、選ばれたワザが使えない。"
			},
			cost: [
				"Colorless"
			],
			damage: 20
		},
		{
			name: {
				ja: "スパーク"
			},
			effect: {
				ja: "相手のベンチポケモン1匹にも、20ダメージ。[ベンチは弱点・抵抗力を計算しない。]"
			},
			cost: [
				"Lightning",
				"Colorless"
			],
			damage: 50
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
