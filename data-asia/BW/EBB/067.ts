import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "マッギョ"
	},
	illustrator: "Yuka Morii",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		618
	],
	hp: 100,
	types: [
		"Fighting"
	],
	stage: "Basic",
	description: {
		ja: "海辺の 泥に 埋まって 獲物を 待ち構える。 獲物が 触ったとき 電気を 出して しびれさせるのだ。"
	},
	attacks: [
		{
			name: {
				ja: "だくりゅう"
			},
			effect: {
				ja: "相手のベンチポケモンを1匹選び、そのポケモンにも20ダメージ。［ベンチへのダメージは弱点・抵抗力の計算をしない。］"
			},
			cost: [
				"Fighting"
			],
			damage: 20
		},
		{
			name: {
				ja: "じひびき"
			},
			effect: {
				ja: "次の相手の番、このワザを受けた相手のバトルポケモンは、にげられない。"
			},
			cost: [
				"Fighting",
				"Colorless"
			],
			damage: 40
		}
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Lightning",
			value: "－20"
		}
	],
	retreat: 3,
	variants: [
		{
			type: "normal",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "normal"
		},
		{
			type: "reverse",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "reverse"
		}
	]
}

export default card
