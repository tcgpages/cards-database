import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "霜奶仙",
		ja: "マホイップ"
	},

	illustrator: "Kagemaru Himeno",

	category: "Pokemon",

	hp: 90,

	types: [
		"Psychic"
	],

	description: {
		'zh-tw': "牠會把自己用鮮奶油裝飾過的樹果送給自己信任的訓練家。",
		ja: "信頼する トレーナーには クリームで デコレーションした 木の実を ふるまって くれるのだ。"
	},

	evolveFrom: {
		ja: "マホミル"
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "甜蜜平分",
				ja: "スイートシェア"
			},
			effect: {
				'zh-tw': "在自己的回合，當從手牌使出這張卡並完成進化時，可使用1次。雙方玩家各從牌庫抽出1張卡。",
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。おたがいのプレイヤーは、それぞれ山札を1枚引く。"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "奇跡閃耀",
				ja: "ワンダーシャイン"
			},
			effect: {
				'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
				ja: "相手のバトルポケモンをこんらんにする。"
			},
			damage: 60,
			cost: [
				"Psychic",
				"Colorless",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		}
	],

	retreat: 1,

	regulationMark: "D",

	rarity: "Uncommon",

	dexId: [
		869
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
