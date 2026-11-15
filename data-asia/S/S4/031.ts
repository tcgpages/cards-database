import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "皮卡丘VMAX",
		ja: "ピカチュウVMAX"
	},

	illustrator: "aky CG Works",

	category: "Pokemon",

	hp: 310,

	types: [
		"Lightning"
	],

	stage: "VMAX",

	attacks: [
		{
			name: {
				'zh-tw': "超極巨伏特攻擊",
				ja: "キョダイボルテッカー"
			},
			effect: {
				'zh-tw': "若希望，將這隻寶可夢身上附加的能量全部丟棄。這個情況下，增加150點傷害。",
				ja: "のぞむなら、このポケモンについているエネルギーを、すべてトラッシュする。その場合、150ダメージ追加。"
			},
			damage: "120+",
			cost: [
				"Lightning",
				"Lightning",
				"Lightning"
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

	rarity: "Holo Rare VMAX",

	suffix: "VMAX",

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
