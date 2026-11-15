import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ボルケニオン"
	},
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 130,
	types: [
		"Fire"
	],
	stage: "Basic",
	dexId: [
		721
	],
	description: {
		ja: "背中の アームから 体内の 水蒸気を 噴射する。 山 ひとつ 吹き飛ばす 威力。"
	},
	attacks: [
		{
			name: {
				ja: "パワーヒーター"
			},
			effect: {
				ja: "自分のベンチポケモンを2匹選び、トラッシュから炎エネルギーを、選んだポケモンにそれぞれ1枚ずつつける。"
			},
			cost: [
				"Fire"
			],
			damage: 20
		},
		{
			name: {
				ja: "ばくねつほう"
			},
			cost: [
				"Fire",
				"Fire",
				"Fire"
			],
			damage: 100
		}
	],
	weaknesses: [
		{
			type: "Water",
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
