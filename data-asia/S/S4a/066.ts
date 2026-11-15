import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "皮可西",
		ja: "ピクシー"
	},

	illustrator: "miki kudo",

	category: "Pokemon",

	hp: 110,

	types: [
		"Psychic"
	],

	description: {
		'zh-tw': "妖精的一種。極少出現在人類面前。一感覺到有人就會立刻逃走。",
		ja: "妖精の 仲間で めったに 人前に 出てこない。 気配を 感じて すぐに 逃げてしまうようだ。"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "調皮",
				ja: "ちゃめっけ"
			},
			effect: {
				'zh-tw': "在自己的回合，當從手牌使出這張卡並完成進化時，可使用1次。選擇1個對手的戰鬥寶可夢身上附加的能量，放回對手的牌庫上方。",
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手のバトルポケモンについているエネルギーを1個選び、相手の山札の上にもどす。"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "月亮踢",
				ja: "ムーンキック"
			},
			damage: 60,
			cost: [
				"Psychic",
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

	retreat: 2,

	regulationMark: "D",

	rarity: "None",

	dexId: [
		36
	]
}

export default card
