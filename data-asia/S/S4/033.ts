import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "頑皮雷彈",
		ja: "マルマイン"
	},

	illustrator: "sui",

	category: "Pokemon",

	hp: 90,

	types: [
		"Lightning"
	],

	description: {
		'zh-tw': "因為體內儲存著多到快要滿出來的電能，所以稍微受點刺激就會爆炸。",
		ja: "あふれるほどの 電気エネルギーを 体内に ためこんでいるので 少しの 刺激で 爆発する。"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "能量發電",
				ja: "エネエネはつでん"
			},
			effect: {
				'zh-tw': "若這隻寶可夢在備戰區，則在自己的回合時可使用1次，若使用，則將這隻寶可夢【氣絕】。從自己的牌庫選擇最多2張【雷】能量卡，以任意方式附於自己的【雷】寶可夢身上。並且重洗牌庫。",
				ja: "このポケモンがベンチにいるなら、自分の番に1回使えて、使ったなら、このポケモンをきぜつさせる。自分の山札から雷エネルギーを2枚まで選び、自分の雷ポケモンに好きなようにつける。そして山札を切る。"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "雷電球",
				ja: "ライトニングボール"
			},
			damage: 100,
			cost: [
				"Lightning",
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

	rarity: "Rare",

	dexId: [
		101
	],

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
