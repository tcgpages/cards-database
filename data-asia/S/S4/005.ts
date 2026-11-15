import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鐵面忍者",
		ja: "テッカニン"
	},

	illustrator: "Tomokazu Komiya",

	category: "Pokemon",

	hp: 60,

	types: [
		"Grass"
	],

	description: {
		'zh-tw': "一直聽牠的叫聲會讓人頭痛不止。會以肉眼無法看清的速度移動。",
		ja: "鳴き声を 聴き つづけると 頭痛が 治まらなくなる。 見えない ほどの 速さで 動く。"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "脫殼",
				ja: "からぬけ"
			},
			effect: {
				'zh-tw': "在自己的回合，當從手牌使出這張卡並完成進化時，可使用1次。從自己的牌庫選擇1張「脫殼忍者」卡，放置於備戰區。並且重洗牌庫。",
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分の山札から「ヌケニン」を1枚選び、ベンチに出す。そして山札を切る。"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "吸取",
				ja: "すいとる"
			},
			effect: {
				'zh-tw': "將這隻寶可夢恢復「30」HP。",
				ja: "このポケモンのHPを「30」回復する。"
			},
			damage: 30,
			cost: [
				"Grass"
			]
		}
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],

	retreat: 0,

	regulationMark: "D",

	rarity: "Uncommon",

	dexId: [
		291
	],

	variants: [
		{
			type: "normal",
			languages: [
				"ja"
			]
		}
	]
}

export default card
