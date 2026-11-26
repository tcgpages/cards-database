import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "スイクン",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Kouki Saitou",
	hp: 70,
	types: [
		"Water",
	],
	stage: "Basic",
	dexId: [
		245,
	],
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				ja: "ミラーコート",
			},
			effect: {
				ja: "このポケモンが、相手のワザによってどくまたはやけどになったとき（このポケモンがきぜつしても）、そのワザを使ったポケモンを、その特殊状態と同じ特殊状態にする。",
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
				"Colorless",
			],
			damage: 20,
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
