import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,
	name: {
		ja: "ギルガルドVMAX"
	},
	illustrator: "aky CG Works",
	rarity: "Hyper rare",
	category: "Pokemon",
	hp: 320,
	types: [
		"Metal"
	],
	dexId: [
		681
	],
	evolveFrom: {
		ja: "ギルガルドV"
	},
	stage: "VMAX",
	attacks: [
		{
			name: {
				ja: "ダイザンゲキ"
			},
			effect: {
				ja: "自分がすでにとったサイドの枚数×30ダメージ追加。"
			},
			cost: [
				"Metal",
				"Metal",
				"Colorless"
			],
			damage: "160+"
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		}
	],
	retreat: 3,
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
