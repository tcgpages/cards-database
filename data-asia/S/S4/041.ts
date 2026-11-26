import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "胡地V",
		ja: "フーディンV"
	},

	illustrator: "Ayaka Yoshida",

	category: "Pokemon",

	hp: 190,

	types: [
		"Psychic"
	],

	dexId: [
		65
	],
	stage: "Basic",

	suffix: "V",

	attacks: [
		{
			name: {
				'zh-tw': "意念之匙",
				ja: "しねんのさじ"
			},
			effect: {
				'zh-tw': "將3個傷害指示物以任意方式放置於對手的寶可夢身上。",
				ja: "ダメカン3個を、相手のポケモンに好きなようにのせる。"
			},
			cost: [
				"Psychic"
			]
		},
		{
			name: {
				'zh-tw': "意志統治者",
				ja: "マインドルーラー"
			},
			effect: {
				'zh-tw': "造成對手的手牌的張數×30點傷害。",
				ja: "相手の手札の枚数×30ダメージ。"
			},
			damage: "30×",
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
