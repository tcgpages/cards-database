import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "阿利多斯",
		ja: "アリアドス"
	},

	illustrator: "Shin Nagasawa",

	category: "Pokemon",

	hp: 110,

	types: [
		"Darkness"
	],

	description: {
		'zh-tw': "也有地方會使用阿利多斯的絲來織布。結實的布料廣受好評。",
		ja: "糸を はいて 獲物を 捕らえる。 夜に なると 巣から 離れて 積極的に 狩りを するぞ。"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "蜘蛛網",
				ja: "スパイダーネット"
			},
			effect: {
				'zh-tw': "在自己的回合，當從手牌使出這張卡並完成進化時，可使用1次。選擇對手的備戰區的1隻進化寶可夢，與戰鬥寶可夢互換。",
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手のベンチの進化ポケモンを1匹選び、バトルポケモンと入れ替える。"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "毒針",
				ja: "どくばり"
			},
			effect: {
				'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
				ja: "相手のバトルポケモンをどくにする。"
			},
			damage: 30,
			cost: [
				"Darkness",
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
		168
	]
}

export default card
