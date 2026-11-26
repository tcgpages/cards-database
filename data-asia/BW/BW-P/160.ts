import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "メロエッタ"
	},
	variants: [{ type: "holo" }],
	rarity: "Promo",
	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 80,
	types: [
		"Psychic"
	],
	stage: "Basic",
	dexId: [
		648
	],
	description: {
		ja: "特殊な 発声法で 歌う メロディは 聞いた 者の 感情を 自在に 操る。"
	},
	attacks: [
		{
			name: {
				ja: "うたう"
			},
			effect: {
				ja: "相手のバトルポケモンをねむりにする。"
			},
			cost: [
				"Psychic"
			]
		},
		{
			name: {
				ja: "サイコバーン"
			},
			cost: [
				"Psychic",
				"Colorless",
				"Colorless"
			],
			damage: 50
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 1
}

export default card
