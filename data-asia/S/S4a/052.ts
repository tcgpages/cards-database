import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洛托姆",
		ja: "ロトム"
	},

	illustrator: "ryoma uratsuka",

	category: "Pokemon",

	hp: 80,

	types: [
		"Lightning"
	],

	description: {
		'zh-tw': "某位少年的發明促使人們開始製造各種活用洛托姆的機器。",
		ja: "ある 少年の 発明から ロトムを 活かした いろいろな 機械が 作られ始めたのだ。"
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "洛托選擇",
				ja: "ロトチョイス"
			},
			effect: {
				'zh-tw': "在自己的回合，當從手牌將這張卡放置於備戰區時，可使用1次。從自己的牌庫選擇最多2張名稱中有「洛托姆」的物品卡，在給對手看過後加入手牌。並且重洗牌庫。",
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。自分の山札から、名前に「ロトム」とつくグッズを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "電擊",
				ja: "でんきショック"
			},
			effect: {
				'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
			},
			damage: 30,
			cost: [
				"Lightning",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],

	retreat: 1,

	regulationMark: "D",

	rarity: "None",

	dexId: [
		479
	]
}

export default card
