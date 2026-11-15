import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "スワンナ"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 110,
	types: [
		"Colorless"
	],
	stage: "Stage1",
	dexId: [
		581
	],
	description: {
		ja: "夜明けと ともに スワンナたちは 踊りはじめる。 真ん中で 踊る スワンナが 群れの リーダー。"
	},
	abilities: [
		{
			name: {
				ja: "スカイサーカス"
			},
			effect: {
				ja: "この番、自分の手札から「とりつかい」を出して使っていたなら、このポケモンがワザを使うためのエネルギーは、すべてなくなる。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "フェザースラッシュ"
			},
			effect: {
				ja: "のぞむなら、自分の手札を1枚選び、トラッシュする。その場合、70ダメージ追加。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: "70+"
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		}
	],
	retreat: 0,
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
