import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "列陣兵",
		ja: "タイレーツ"
	},

	illustrator: "Misa Tsutsui",

	category: "Pokemon",

	hp: 90,

	types: [
		"Fighting"
	],

	description: {
		'zh-tw': "列陣兵由１個頭頭和５個跟班組成。頭頭的命令不可違抗。",
		ja: "ヘイチョーと 呼ばれる １匹と ヘイと 呼ばれる ５匹で ひとつ。 ヘイチョーの 命令は 絶対。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "呼朋引伴",
				ja: "なかまをよぶ"
			},
			effect: {
				'zh-tw': "從自己的牌庫選擇最多2張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
				ja: "自分の山札からたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "團隊攻擊",
				ja: "チームアタック"
			},
			effect: {
				'zh-tw': "造成自己的備戰區的，名稱中有「列陣兵」的寶可夢的數量×30點傷害。",
				ja: "自分のベンチの、名前に「タイレーツ」とつくポケモンの数×30ダメージ。"
			},
			damage: "30×",
			cost: [
				"Colorless",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],

	retreat: 1,

	regulationMark: "D",

	rarity: "None",

	dexId: [
		870
	]
}

export default card
