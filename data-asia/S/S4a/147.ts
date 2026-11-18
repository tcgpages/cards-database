import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "智揮猩",
		ja: "ヤレユータン"
	},

	illustrator: "Shigenori Negishi",

	category: "Pokemon",

	hp: 120,

	types: [
		"Colorless"
	],

	description: {
		'zh-tw': "智揮猩能夠透過揮動由樹葉和體毛所製成的扇子，隨心所欲地指揮寶可夢。",
		ja: "森の 隅々まで 知り尽くし 傷ついた ポケモンが いると 薬草を 探して 治療する。"
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "小聰明",
				ja: "さるぢえ"
			},
			effect: {
				'zh-tw': "在自己的回合時，可使用1次。選擇1張自己的手牌，與牌庫上方的卡互換。",
				ja: "自分の番に1回使える。自分の手札を1枚選び、山札の上のカードと入れ替える。"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "擊倒",
				ja: "はりたおす"
			},
			damage: 70,
			cost: [
				"Colorless",
				"Colorless",
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

	retreat: 2,

	regulationMark: "D",

	rarity: "None",

	dexId: [
		765
	]
}

export default card
