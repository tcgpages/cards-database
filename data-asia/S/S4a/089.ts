import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "多龍巴魯托VMAX",
		ja: "ドラパルトVMAX"
	},

	illustrator: "aky CG Works",

	category: "Pokemon",

	hp: 320,

	types: [
		"Psychic"
	],

	stage: "VMAX",

	attacks: [
		{
			name: {
				'zh-tw': "撕裂",
				ja: "ひきさく"
			},
			effect: {
				'zh-tw': "這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。",
				ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。"
			},
			damage: 60,
			cost: [
				"Psychic"
			]
		},
		{
			name: {
				'zh-tw': "極巨幻影",
				ja: "ダイファントム"
			},
			effect: {
				'zh-tw': "將5個傷害指示物以任意方式放置於對手的備戰寶可夢身上。",
				ja: "ダメカン5個を、相手のベンチポケモンに好きなようにのせる。"
			},
			damage: 130,
			cost: [
				"Psychic",
				"Psychic"
			]
		}
	],

	weaknesses: [
		{
			type: "Darkness",
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
