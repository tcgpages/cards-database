import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "吼鯨王",
		ja: "ホエルオー"
	},

	illustrator: "SATOSHI NAKAI",

	category: "Pokemon",

	hp: 200,

	types: [
		"Water"
	],

	description: {
		'zh-tw': "有時會讓大大的身體在波浪上跳躍，藉此製造出衝擊讓對手昏迷。",
		ja: "大きな 体を 波の上で ジャンプさせ 衝撃を 生みだし 相手を 気絶 させることがある。"
	},

	evolveFrom: {
		ja: "ホエルコ"
	},
	stage: "Stage1",

	attacks: [
		{
			name: {
				'zh-tw': "水炮",
				ja: "ハイドロポンプ"
			},
			effect: {
				'zh-tw': "增加這隻寶可夢身上附加的【水】能量的數量×40點傷害。",
				ja: "このポケモンについている水エネルギーの数×40ダメージ追加。"
			},
			damage: "10+",
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
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

	retreat: 4,

	regulationMark: "D",

	abilities: [
		{
			name: {
				'zh-tw': "水幕",
				ja: "みずのベール"
			},
			effect: {
				'zh-tw': "每次從自己的手牌將能量附於這隻寶可夢身上時，都將這隻寶可夢的特殊狀態全部恢復。",
				ja: "自分の手札からこのポケモンにエネルギーをつけるたび、このポケモンの特殊状態をすべて回復する。"
			},
			type: "Ability"
		}
	],

	rarity: "Rare",

	dexId: [
		321
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
