import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "マリルリ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Kagemaru Himeno",
	hp: 70,
	types: [
		"Water",
	],
	stage: "Stage1",
	evolveFrom: {
		ja: "マリル",
	},
	dexId: [
		184,
	],
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				ja: "あついしぼう",
			},
			effect: {
				ja: "このポケモンが、{R}ポケモンまたは{W}ポケモンのワザによって受けるダメージは、「-30」される。",
			},
		},
	],
	attacks: [
		{
			name: {
				ja: "バブルこうせん",
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手をマヒにする。",
			},
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			damage: 40,
		},
	],
	weaknesses: [
		{
			type: "Lightning",
		},
	],
	retreat: 1,
	variants: [
		{
			type: "normal",
		},
	],
}

export default card
