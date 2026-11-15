import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "インテレオン"
	},
	illustrator: "nagimiso",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 160,
	types: [
		"Water"
	],
	stage: "Stage2",
	dexId: [
		818
	],
	description: {
		ja: "多彩な 機能を 隠し持つ。 指から 水を 噴射して 背中の 皮膜で 風に 乗る。"
	},
	abilities: [
		{
			name: {
				ja: "うらこうさく"
			},
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分の山札からトレーナーズを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "アクアバレット"
			},
			effect: {
				ja: "相手のベンチポケモン1匹にも、20ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
			},
			cost: [
				"Water",
				"Colorless"
			],
			damage: 120
		}
	],
	weaknesses: [
		{
			type: "Lightning",
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
