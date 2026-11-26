import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ドリュウズ"
	},
	rarity: "Promo",
	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 120,
	types: [
		"Fighting"
	],
	stage: "Stage1",
	dexId: [
		530
	],
	description: {
		ja: "鋼に 進化した ドリルは 鉄板を つらぬく 破壊力。 トンネル工事で 大活躍する。"
	},
	attacks: [
		{
			name: {
				ja: "きょうかドリル"
			},
			effect: {
				ja: "このポケモンに「ポケモンのどうぐ」がついているなら、30ダメージを追加。"
			},
			cost: [
				"Fighting",
				"Colorless",
				"Colorless"
			],
			damage: "50+"
		},
		{
			name: {
				ja: "マッハクロー"
			},
			effect: {
				ja: "このワザのダメージは抵抗力の計算をしない。"
			},
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: 70
		}
	],
	evolveFrom: {
		ja: "モグリュー"
	},
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		}
	],
	retreat: 4
}

export default card
