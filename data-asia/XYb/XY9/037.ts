import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "ドラピオン"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: [
		"Psychic"
	],
	stage: "Stage1",
	dexId: [
		452
	],
	description: {
		ja: "両腕の ツメは 自動車を スクラップにする 破壊力。 ツメの 先から 毒を 出す。"
	},
	attacks: [
		{
			name: {
				ja: "どくのツメ"
			},
			effect: {
				ja: "相手のバトルポケモンをどくにする。"
			},
			cost: [
				"Psychic",
				"Psychic",
				"Colorless"
			],
			damage: 70
		},
		{
			name: {
				ja: "ヘビーインパクト"
			},
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
				"Colorless"
			],
			damage: 130
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 4,
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
