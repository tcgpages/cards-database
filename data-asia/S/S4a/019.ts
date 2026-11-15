import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "豐蜜龍",
		ja: "タルップル"
	},

	illustrator: "Akira Komayama",

	category: "Pokemon",

	hp: 90,

	types: [
		"Grass"
	],

	description: {
		'zh-tw': "啃果蟲吃了甜蘋果後進化而成。以蟲寶可夢為食，會從體內發出甜甜的香味引誘牠們上鉤。",
		ja: "甘い りんごを 食べて 進化。 体から 甘い においを だして 餌の 虫ポケモンを 引き寄せる。"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "美味香氣",
				ja: "おいしいかおり"
			},
			effect: {
				'zh-tw': "在自己的回合時，可使用1次。擲1次硬幣若為正面，則選擇對手的備戰區的1隻【基礎】寶可夢，與戰鬥寶可夢互換。",
				ja: "自分の番に1回使える。コインを1回投げオモテなら、相手のベンチのたねポケモンを1匹選び、バトルポケモンと入れ替える。"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "日光束",
				ja: "ソーラービーム"
			},
			damage: 70,
			cost: [
				"Grass",
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

	retreat: 3,

	regulationMark: "D",

	rarity: "None",

	dexId: [
		842
	]
}

export default card
