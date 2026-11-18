import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "具甲武者",
		ja: "グソクムシャ"
	},

	illustrator: "Ryuta Fuse",

	category: "Pokemon",

	hp: 130,

	types: [
		"Grass"
	],

	description: {
		'zh-tw': "為了勝利不擇手段。會看準敵人疏忽的時機，用前腳上的小爪子解決對方。",
		ja: "勝つためには 手段を 問わない。 相手の 隙を ついて 前脚の 小さな ツメで とどめを 刺す。"
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'zh-tw': "逆境斬",
				ja: "ぎゃっきょうぎり"
			},
			effect: {
				'zh-tw': "增加對手的場上的「寶可夢【V】・【GX】」的數量×50點傷害。",
				ja: "相手の場の「ポケモンV・GX」の数×50ダメージ追加。"
			},
			damage: "30+",
			cost: [
				"Colorless",
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "粉碎迴轉",
				ja: "スマッシュターン"
			},
			effect: {
				'zh-tw': "將這隻寶可夢與備戰寶可夢互換。",
				ja: "このポケモンをベンチポケモンと入れ替える。"
			},
			damage: 70,
			cost: [
				"Grass",
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

	retreat: 2,

	regulationMark: "D",

	rarity: "None",

	dexId: [
		768
	]
}

export default card
