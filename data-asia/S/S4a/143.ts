import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "奇諾栗鼠",
		ja: "チラチーノ"
	},

	illustrator: "Shibuzoh.",

	category: "Pokemon",

	hp: 90,

	types: [
		"Colorless"
	],

	description: {
		'zh-tw': "潔癖使得牠連一絲灰塵都無法容忍，會把自己身上滲出的油塗在巢上保持清潔。",
		ja: "塵ひとつ 許せない 潔癖。 体から 染み出る 油を 巣に 塗りつけ コーティングする。"
	},

	evolveFrom: {
		ja: "チラーミィ"
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "安排",
				ja: "やりくり"
			},
			effect: {
				'zh-tw': "在自己的回合時，若將自己的1張手牌丟棄，則可使用1次。從自己的牌庫抽出2張卡。",
				ja: "自分の番に、自分の手札を1枚トラッシュするなら、1回使える。自分の山札を2枚引く。"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "能量支援",
				ja: "エネアシスト"
			},
			effect: {
				'zh-tw': "從自己的棄牌區選擇1張基本能量卡，附於備戰寶可夢身上。",
				ja: "自分のトラッシュから基本エネルギーを1枚選び、ベンチポケモンにつける。"
			},
			damage: 40,
			cost: [
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

	rarity: "None",

	variants: [
		{ type: "normal", languages: ["ja"] },
		{ type: "reverse", languages: ["ja"] }
	],

	dexId: [
		573
	]
}

export default card
