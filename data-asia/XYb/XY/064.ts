import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ランドロス"
	},
	illustrator: "PLANETA",
	rarity: "None",
	category: "Pokemon",
	hp: 120,
	types: [
		"Fighting"
	],
	stage: "Basic",
	dexId: [
		645
	],
	description: {
		ja: "ランドロスが 訪れる 土地は 作物が たくさん 実るため 畑の神様 と 言われている。"
	},
	attacks: [
		{
			name: {
				ja: "ちからのさけび"
			},
			effect: {
				ja: "自分のトラッシュから基本エネルギーを1枚選び、ベンチポケモンにつける。"
			},
			cost: [
				"Fighting"
			],
			damage: 20
		},
		{
			name: {
				ja: "スカイラリアット"
			},
			cost: [
				"Fighting",
				"Fighting",
				"Colorless"
			],
			damage: 90
		}
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],
	retreat: 1,
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
