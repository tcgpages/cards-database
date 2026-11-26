import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "木木梟",
		ja: "モクロー"
	},

	illustrator: "HYOGONOSUKE",

	category: "Pokemon",

	hp: 50,

	types: [
		"Grass"
	],

	description: {
		'zh-tw': "一邊飛行一邊射出刀刃般銳利的羽毛，距離近時會使出猛烈的踢擊。",
		ja: "飛行しながら 切れ味 鋭い 羽根を 飛ばし 近距離では 強烈な キックを 叩きこむ。"
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "天空雜耍",
				ja: "スカイサーカス"
			},
			effect: {
				'zh-tw': "在這個回合，若從自己的手牌使出了「養鳥人」，則這隻寶可夢使用招式所需的能量全部消除。",
				ja: "この番、自分の手札から「とりつかい」を出して使っていたなら、このポケモンがワザを使うためのエネルギーは、すべてなくなる。"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "風礫",
				ja: "かぜのつぶて"
			},
			effect: {
				'zh-tw': "對手的1隻備戰寶可夢受到60點傷害。[在備戰區不計算弱點・抵抗力。]",
				ja: "相手のベンチポケモン1匹に、60ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
			},
			cost: [
				"Colorless",
				"Colorless",
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

	retreat: 1,

	regulationMark: "D",

	rarity: "None",

	variants: [
		{ type: "normal", languages: ["ja"] },
		{ type: "reverse", languages: ["ja"] }
	],

	dexId: [
		722
	]
}

export default card
