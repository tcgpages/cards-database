import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "爆音怪",
		ja: "バクオング"
	},

	illustrator: "Shigenori Negishi",

	category: "Pokemon",

	hp: 160,

	types: [
		"Colorless"
	],

	description: {
		'zh-tw': "戰鬥時發出的吼聲會像地震一樣把地面震得不停搖晃。",
		ja: "戦いのときに 出す うなり声は まるで 地震の ように 地面を グラグラと 揺らす。"
	},

	evolveFrom: {
		ja: "ドゴーム"
	},
	stage: "Stage2",

	attacks: [
		{
			name: {
				'zh-tw': "輪唱",
				ja: "りんしょう"
			},
			effect: {
				'zh-tw': "造成自己的場上的，持有「輪唱」招式的寶可夢的數量×50點傷害。",
				ja: "自分の場の、ワザ「りんしょう」を持つポケモンの数×50ダメージ。"
			},
			damage: "50×",
			cost: [
				"Colorless",
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "巨聲",
				ja: "ハイパーボイス"
			},
			damage: 120,
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],

	retreat: 3,

	regulationMark: "D",

	rarity: "Uncommon",

	dexId: [
		295
	],

	variants: [
		{
			type: "normal",
			languages: [
				"ja"
			]
		}
	]
}

export default card
