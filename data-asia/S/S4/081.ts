import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "堅盾劍怪VMAX",
		ja: "ギルガルドVMAX"
	},

	illustrator: "aky CG Works",

	category: "Pokemon",

	hp: 320,

	types: [
		"Metal"
	],

	stage: "VMAX",

	attacks: [
		{
			name: {
				'zh-tw': "極巨斬擊",
				ja: "ダイザンゲキ"
			},
			effect: {
				'zh-tw': "增加自己已經獲得的獎賞卡的張數×30點傷害。",
				ja: "自分がすでにとったサイドの枚数×30ダメージ追加。"
			},
			damage: "160+",
			cost: [
				"Metal",
				"Metal",
				"Colorless"
			]
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

	rarity: "Holo Rare VMAX",

	suffix: "VMAX",

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
