import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大王銅象",
		ja: "ダイオウドウ"
	},

	illustrator: "Kouki Saitou",

	category: "Pokemon",

	hp: 190,

	types: [
		"Metal"
	],

	description: {
		'zh-tw': "綠色的皮膚非常耐水。在很久以前從其他地區過來，之後便一直與人類一起工作。",
		ja: "緑の皮膚は 水にも 強い。 昔 ほかの土地から やってきて 人と いっしょに 働いた。"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "抗菌皮膚",
				ja: "こうきんスキン"
			},
			effect: {
				'zh-tw': "這隻寶可夢不會陷入特殊狀態。",
				ja: "このポケモンは特殊状態にならない。"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "復仇踩踏",
				ja: "リベンジスタンプ"
			},
			effect: {
				'zh-tw': "若自己的備戰寶可夢身上放置有傷害指示物，則增加120點傷害。",
				ja: "自分のベンチポケモンにダメカンがのっているなら、120ダメージ追加。"
			},
			damage: "120+",
			cost: [
				"Metal",
				"Metal",
				"Colorless",
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

	retreat: 4,

	regulationMark: "D",

	rarity: "None",

	dexId: [
		879
	]
}

export default card
