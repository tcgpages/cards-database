import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "千面避役",
		ja: "インテレオン"
	},

	illustrator: "Kagemaru Himeno",

	category: "Pokemon",

	hp: 160,

	types: [
		"Water"
	],

	description: {
		'zh-tw': "身上隱藏著多種特殊能力，例如從手指噴射水流，以及用背部的翼膜滑翔等等。",
		ja: "多彩な 機能を 隠し持つ。 指から 水を 噴射して 背中の 皮膜で 風に 乗る。"
	},

	evolveFrom: {
		ja: "ジメレオン"
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "諜報",
				ja: "うらこうさく"
			},
			effect: {
				'zh-tw': "在自己的回合，當從手牌使出這張卡並完成進化時，可使用1次。從自己的牌庫選擇最多2張訓練家卡，在給對手看過後加入手牌。並且重洗牌庫。",
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分の山札からトレーナーズを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "水子彈",
				ja: "アクアバレット"
			},
			effect: {
				'zh-tw': "對手的1隻備戰寶可夢也受到20點傷害。[在備戰區不計算弱點・抵抗力。]",
				ja: "相手のベンチポケモン1匹にも、20ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
			},
			damage: 120,
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
		{ type: "holo", languages: ["ja"] }
	],

	dexId: [
		818
	]
}

export default card
