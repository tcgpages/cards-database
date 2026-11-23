import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "クリムガン"
	},
	variants: [{ type: "holo" }],
	rarity: "Promo",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 100,
	types: [
		"Dragon"
	],
	stage: "Basic",
	dexId: [
		621
	],
	description: {
		ja: "ドリュウズや イワークが 掘った 狭い トンネルを 走りまわって するどいツメで 獲物を 捕らえる。"
	},
	attacks: [
		{
			name: {
				ja: "ちょうはつ"
			},
			effect: {
				ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "ブーストクロー"
			},
			effect: {
				ja: "次の自分の番、このポケモンが使うワザのダメージは「+30」される。"
			},
			cost: [
				"Fire",
				"Water",
				"Colorless"
			],
			damage: 60
		}
	],
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		}
	],
	retreat: 2
}

export default card
