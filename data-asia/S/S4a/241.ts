import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ストリンダー"
	},
	illustrator: "Hideki Ishikawa",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 120,
	types: [
		"Lightning"
	],
	evolveFrom: {
		ja: "エレズン"
	},
	stage: "Stage1",
	dexId: [
		849
	],
	description: {
		ja: "胸の 突起を 掻きむしり 電気を 起こすとき あたりに ギターのような 音が 響く。"
	},
	attacks: [
		{
			name: {
				ja: "リスクテイカー"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手の山札を上から5枚トラッシュする。ウラなら、自分の山札を上から5枚トラッシュする。"
			},
			cost: [
				"Colorless",
				"Colorless"
			]
		},
		{
			name: {
				ja: "でんげき"
			},
			effect: {
				ja: "このポケモンにも30ダメージ。"
			},
			cost: [
				"Lightning",
				"Lightning",
				"Colorless"
			],
			damage: 160
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 2,
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
