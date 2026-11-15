import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "逐電犬V",
		ja: "パルスワンV"
	},

	illustrator: "aky CG Works",

	category: "Pokemon",

	hp: 200,

	types: [
		"Lightning"
	],

	stage: "Basic",

	suffix: "V",

	attacks: [
		{
			name: {
				'zh-tw': "輸電",
				ja: "そうでん"
			},
			effect: {
				'zh-tw': "從自己的牌庫選擇最多2張【雷】能量卡，以任意方式附於備戰寶可夢身上。並且重洗牌庫。",
				ja: "自分の山札から雷エネルギーを2枚まで選び、ベンチポケモンに好きなようにつける。そして山札を切る。"
			},
			cost: [
				"Lightning"
			]
		},
		{
			name: {
				'zh-tw': "雷電風暴",
				ja: "ライトニングストーム"
			},
			effect: {
				'zh-tw': "增加自己的場上寶可夢身上附加的【雷】能量的數量×30點傷害。",
				ja: "自分の場のポケモンについている雷エネルギーの数×30ダメージ追加。"
			},
			damage: "10+",
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
