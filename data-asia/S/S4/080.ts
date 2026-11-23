import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "堅盾劍怪V",
		ja: "ギルガルドV"
	},

	illustrator: "aky CG Works",

	category: "Pokemon",

	hp: 210,

	types: [
		"Metal"
	],

	dexId: [
		681
	],
	stage: "Basic",

	suffix: "V",

	attacks: [
		{
			name: {
				'zh-tw': "劈開",
				ja: "きりさく"
			},
			damage: 50,
			cost: [
				"Metal",
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "音波刀鋒",
				ja: "ソニックエッジ"
			},
			effect: {
				'zh-tw': "這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。",
				ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。"
			},
			damage: 130,
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

	rarity: "Holo Rare V",

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
