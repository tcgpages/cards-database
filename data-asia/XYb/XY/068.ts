import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ジガルデ"
	},
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 120,
	types: [
		"Fighting"
	],
	stage: "Basic",
	dexId: [
		718
	],
	description: {
		ja: "洞窟の 奥深くで 暮らし 生態系を 破壊する者を 監視していると 言われている。"
	},
	attacks: [
		{
			name: {
				ja: "じひびき"
			},
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。"
			},
			cost: [
				"Fighting",
				"Colorless"
			],
			damage: 30
		},
		{
			name: {
				ja: "ジオストライク"
			},
			effect: {
				ja: "自分のベンチポケモン全員にも、それぞれ10ダメージ。［ベンチは弱点・抵抗力の計算をしない。］"
			},
			cost: [
				"Fighting",
				"Fighting",
				"Colorless"
			],
			damage: 120
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],
	retreat: 2,
	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
			foil: "mirror"
		}
	]
}

export default card
