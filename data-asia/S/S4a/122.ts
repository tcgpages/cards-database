import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "詐唬魔",
		ja: "ギモー"
	},

	illustrator: "Hitoshi Ariga",

	category: "Pokemon",

	hp: 90,

	types: [
		"Darkness"
	],

	description: {
		'zh-tw': "會先裝成要下跪道歉的樣子，然後用後腦勺尖如長矛的頭髮刺向對手。",
		ja: "土下座して 謝る 振りをして 槍のように 尖った 後ろ髪で 突き刺してくる 戦法を 使う。"
	},

	evolveFrom: {
		ja: "ベロバー"
	},
	stage: "Stage1",

	attacks: [
		{
			name: {
				'zh-tw': "咬住",
				ja: "かみつく"
			},
			damage: 30,
			cost: [
				"Darkness"
			]
		},
		{
			name: {
				'zh-tw': "假跪真撞",
				ja: "どげざつき"
			},
			effect: {
				'zh-tw': "這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。",
				ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。"
			},
			damage: 60,
			cost: [
				"Darkness",
				"Colorless",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
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
		860
	]
}

export default card
