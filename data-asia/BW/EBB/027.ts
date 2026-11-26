import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "エンペルト"
	},
	illustrator: "kawayoo",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		395
	],
	hp: 140,
	types: [
		"Water"
	],
	stage: "Stage2",
	description: {
		ja: "プライドを 傷つける 者は 流氷をも 切断する 翼で 真っ二つに する。"
	},
	attacks: [
		{
			name: {
				ja: "なみのり"
			},
			cost: [
				"Water",
				"Colorless"
			],
			damage: 50
		},
		{
			name: {
				ja: "こうていのいちげき"
			},
			effect: {
				ja: "相手のバトルポケモンの残りHPが、このポケモンの残りHPより多いなら、60ダメージを追加。"
			},
			cost: [
				"Water",
				"Water",
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
	retreat: 2,
	evolveFrom: {
		ja: "ポッタイシ"
	},
	variants: [
		{
			type: "normal",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "normal"
		},
		{
			type: "reverse",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "reverse"
		}
	]
}

export default card
