import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "皮卡丘V",
		ja: "ピカチュウV"
	},

	illustrator: "Saki Hayashiro",

	category: "Pokemon",

	hp: 190,

	types: [
		"Lightning"
	],

	stage: "Basic",

	suffix: "V",

	attacks: [
		{
			name: {
				'zh-tw': "充電",
				ja: "じゅうでん"
			},
			effect: {
				'zh-tw': "從自己的牌庫選擇最多2張【雷】能量卡，附於這隻寶可夢身上。並且重洗牌庫。",
				ja: "自分の山札から雷エネルギーを2枚まで選び、このポケモンにつける。そして山札を切る。"
			},
			cost: [
				"Lightning"
			]
		},
		{
			name: {
				'zh-tw': "十萬伏特",
				ja: "10まんボルト"
			},
			effect: {
				'zh-tw': "將這隻寶可夢身上附加的能量全部丟棄。",
				ja: "このポケモンについているエネルギーを、すべてトラッシュする。"
			},
			damage: 200,
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
