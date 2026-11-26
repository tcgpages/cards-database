import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蒼響V",
		ja: "ザシアンV"
	},

	illustrator: "5ban Graphics",

	category: "Pokemon",

	hp: 220,

	types: [
		"Metal"
	],

	dexId: [
		888
	],
	stage: "Basic",

	suffix: "V",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "不撓之劍",
				ja: "ふとうのつるぎ"
			},
			effect: {
				'zh-tw': "在自己的回合時可使用1次，若使用，則自己的回合結束。查看自己的牌庫上方3張卡，選擇其中任意數量的【鋼】能量卡，附於這隻寶可夢身上。將剩餘卡加入手牌。",
				ja: "自分の番に1回使えて、使ったなら、自分の番は終わる。自分の山札を上から3枚見て、その中から鋼エネルギーを好きなだけ選び、このポケモンにつける。残りのカードは手札に加える。"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "無畏聖劍",
				ja: "ブレイブキャリバー"
			},
			effect: {
				'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
				ja: "次の自分の番、このポケモンはワザが使えない。"
			},
			damage: 230,
			cost: [
				"Metal",
				"Metal",
				"Metal"
			]
		}
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		}
	],

	retreat: 2,

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
