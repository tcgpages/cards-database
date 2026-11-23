import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 太陽珊瑚",
		ja: "ガラル サニーゴ"
	},

	illustrator: "Mitsuhiro Arita",

	category: "Pokemon",

	hp: 80,

	types: [
		"Psychic"
	],

	description: {
		'zh-tw': "常出現在從前曾是大海的地方。如果不小心錯把牠當成石頭踢，就會遭到牠的詛咒。",
		ja: "大昔 海だった 場所に よく 転がっている。 石ころと 間違えて 蹴ると たたられる。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "詛咒水滴",
				ja: "のろいのしずく"
			},
			effect: {
				'zh-tw': "將3個傷害指示物以任意方式放置於對手的寶可夢身上。",
				ja: "ダメカン3個を、相手のポケモンに好きなようにのせる。"
			},
			cost: [
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

	retreat: 2,

	regulationMark: "D",

	rarity: "None",

	variants: [
		{ type: "normal", languages: ["ja"] },
		{ type: "reverse", languages: ["ja"] }
	],

	dexId: [
		222
	]
}

export default card
