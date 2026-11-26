import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "狡猾天狗",
		ja: "ダーテング"
	},

	illustrator: "Uta",

	category: "Pokemon",

	hp: 150,

	types: [
		"Grass"
	],

	description: {
		'zh-tw': "過去被視為森林之神而受到畏懼的寶可夢。有著讀取對手想法並搶先一步行動的能力。",
		ja: "森の 神様と 恐れられていた ポケモン。 相手の 考えを 読み 先回りする 能力を もつ。"
	},

	evolveFrom: {
		ja: "コノハナ"
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "天狗替身",
				ja: "てんぐのかえだま"
			},
			effect: {
				'zh-tw': "只要這隻寶可夢在戰鬥場上，對手的手牌的支援者卡的效果全部改為「從自己的牌庫抽出3張卡」。",
				ja: "このポケモンがバトル場にいるかぎり、相手の手札にあるサポートの効果は、すべて「自分の山札を3枚引く。」になる。"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "圓扇龍捲風",
				ja: "うちわトルネード"
			},
			effect: {
				'zh-tw': "若希望，將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]",
				ja: "のぞむなら、相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］"
			},
			damage: 110,
			cost: [
				"Grass",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],

	retreat: 3,

	regulationMark: "D",

	rarity: "Uncommon",

	dexId: [
		275
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
