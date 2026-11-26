import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "轟擂金剛猩",
		ja: "ゴリランダー"
	},

	illustrator: "Kouki Saitou",

	category: "Pokemon",

	hp: 170,

	types: [
		"Grass"
	],

	description: {
		'zh-tw': "能夠透過打鼓來控制特別的樹樁中的力量，操縱樹根進行戰鬥。",
		ja: "特別な 切り株の パワーを ドラミングで コントロール。 根っこを 操って 戦う。"
	},

	evolveFrom: {
		ja: "バチンキー"
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "怒氣律動",
				ja: "ボルテージビート"
			},
			effect: {
				'zh-tw': "在自己的回合時，可使用1次。從自己的牌庫選擇最多2張【草】能量卡，附於自己的1隻寶可夢身上。並且重洗牌庫。",
				ja: "自分の番に1回使える。自分の山札から草エネルギーを2枚まで選び、自分のポケモン1匹につける。そして山札を切る。"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "頭突",
				ja: "ぶちかます"
			},
			damage: 140,
			cost: [
				"Grass",
				"Grass",
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

	variants: [
		{ type: "holo", languages: ["ja"] }
	],

	dexId: [
		812
	]
}

export default card
