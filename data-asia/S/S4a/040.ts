import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "變澀蜥",
		ja: "ジメレオン"
	},

	illustrator: "Naoki Saito",

	category: "Pokemon",

	hp: 90,

	types: [
		"Water"
	],

	description: {
		'zh-tw': "很有戰略頭腦，會把手掌分泌出的水分做成水彈攻擊敵人。",
		ja: "手のひらから 出る 水分を 丸めて つくった 水の 玉を 使い 頭脳戦を 繰り広げる。"
	},

	evolveFrom: {
		ja: "メッソン"
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "諜報",
				ja: "うらこうさく"
			},
			effect: {
				'zh-tw': "在自己的回合，當從手牌使出這張卡並完成進化時，可使用1次。從自己的牌庫選擇1張訓練家卡，在給對手看過後加入手牌。並且重洗牌庫。",
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分の山札からトレーナーズを1枚選び、相手に見せて、手札に加える。そして山札を切る。"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "水漂",
				ja: "みずきり"
			},
			damage: 30,
			cost: [
				"Water",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],

	retreat: 1,

	regulationMark: "D",

	rarity: "None",

	variants: [
		{ type: "normal", languages: ["ja"] },
		{ type: "reverse", languages: ["ja"] }
	],

	dexId: [
		817
	]
}

export default card
