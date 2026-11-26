import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "アオガラス"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 80,
	types: [
		"Colorless"
	],
	evolveFrom: {
		ja: "ココガラ"
	},
	stage: "Stage1",
	dexId: [
		822
	],
	description: {
		ja: "足で 小石を つかんで 投げたり ロープを 敵に 巻きつけるなど 道具を あつかう 知恵を もつ。"
	},
	attacks: [
		{
			name: {
				ja: "ついばむ"
			},
			effect: {
				ja: "ダメージを与える前に、相手のバトルポケモンについている「ポケモンのどうぐ」をトラッシュする。"
			},
			cost: [
				"Colorless"
			],
			damage: 20
		},
		{
			name: {
				ja: "ドリルくちばし"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 50
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
