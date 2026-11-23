import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "ドラパルトV"
	},
	rarity: "Double rare",
	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 210,
	types: [
		"Psychic"
	],
	stage: "Basic",
	attacks: [
		{
			name: {
				ja: "かみつく"
			},
			cost: [
				"Psychic"
			],
			damage: 30
		},
		{
			name: {
				ja: "アサルトジェット"
			},
			effect: {
				ja: "この番、このポケモンがベンチからバトル場に出ていたなら、80ダメージ追加。"
			},
			cost: [
				"Psychic",
				"Psychic"
			],
			damage: "60+"
		}
	],
	suffix: "V",
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "－30"
		}
	],
	retreat: 1,
	regulationMark: "D",
	variants: [
		{
			type: "holo"
		}
	],
	dexId: [
		887
	]
}

export default card
