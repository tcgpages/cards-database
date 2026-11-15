import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "セキタンザン"
	},
	illustrator: "nagimiso",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 160,
	types: [
		"Fighting"
	],
	stage: "Stage2",
	dexId: [
		839
	],
	description: {
		ja: "普段は 穏やかだが 人間が 鉱山を 荒らすと 怒りくるい １５００度の 炎で 焼きつくす。"
	},
	abilities: [
		{
			name: {
				ja: "タールジェネレート"
			},
			effect: {
				ja: "自分の番に1回使える。自分のトラッシュから炎エネルギーと闘エネルギーをそれぞれ1枚まで選び、自分のポケモンに好きなようにつける。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "やきなだれ"
			},
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: 130
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],
	retreat: 4,
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
