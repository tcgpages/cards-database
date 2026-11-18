import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "白蓬蓬V",
		ja: "ワタシラガV"
	},

	illustrator: "5ban Graphics",

	category: "Pokemon",

	hp: 180,

	types: [
		"Grass"
	],

	stage: "Basic",

	suffix: "V",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "歡樂配對",
				ja: "ハッピーマッチ"
			},
			effect: {
				'zh-tw': "在自己的回合，當從手牌將這張卡放置於備戰區時，可使用1次。從自己的棄牌區選擇1張支援者卡，在給對手看過後加入手牌。",
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。自分のトラッシュからサポートを1枚選び、相手に見せて、手札に加える。"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "飄舞",
				ja: "まいあがる"
			},
			effect: {
				'zh-tw': "若希望，將這隻寶可夢與附加的卡，全部放回自己的牌庫並重洗。",
				ja: "のぞむなら、このポケモンと、ついているすべてのカードを、自分の山札にもどして切る。"
			},
			damage: 50,
			cost: [
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
