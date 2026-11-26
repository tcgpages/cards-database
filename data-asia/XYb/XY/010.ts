import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ブースター"
	},
	illustrator: "sui",
	rarity: "None",
	category: "Pokemon",
	hp: 90,
	types: [
		"Fire"
	],
	evolveFrom: {
		ja: "イーブイ"
	},
	stage: "Stage1",
	dexId: [
		136
	],
	description: {
		ja: "体内に 炎袋があり 深く 息を 吸いこんだあと １７００度の 火を 吐く。"
	},
	abilities: [
		{
			name: {
				ja: "フレアエフェクト"
			},
			effect: {
				ja: "このポケモンがいるかぎり、自分の1進化ポケモン全員は、もとのタイプに加え炎タイプも持つ。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "ヒートブレス"
			},
			effect: {
				ja: "コインを1回投げオモテなら、20ダメージを追加。"
			},
			cost: [
				"Fire",
				"Colorless",
				"Colorless"
			],
			damage: "60+"
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
