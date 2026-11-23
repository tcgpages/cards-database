import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ゲノセクト"
	},
	variants: [{ type: "holo" }],
	rarity: "Promo",
	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 100,
	types: [
		"Grass"
	],
	stage: "Basic",
	dexId: [
		649
	],
	description: {
		ja: "３億年前に いた ポケモン。 プラズマ団に 改造 され 背中に 砲台を つけられた。"
	},
	attacks: [
		{
			name: {
				ja: "なかまをよぶ"
			},
			effect: {
				ja: "自分の山札から[草]タイプのたねポケモンを2枚選び、ベンチに出す。そして山札を切る。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "ジェットインパクト"
			},
			effect: {
				ja: "コインを1回投げオモテなら、20ダメージを追加。"
			},
			cost: [
				"Grass",
				"Grass",
				"Colorless"
			],
			damage: "80+"
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	retreat: 1
}

export default card
