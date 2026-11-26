import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "サメハダー",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Midori Harada",
	hp: 70,
	types: [
		"Darkness",
	],
	stage: "Stage1",
	evolveFrom: {
		ja: "キバニア",
	},
	dexId: [
		319,
	],
	attacks: [
		{
			name: {
				ja: "にらんでかみつく",
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手をマヒにする。",
			},
			cost: [
				"Darkness",
				"Colorless",
			],
			damage: 20,
		},
		{
			name: {
				ja: "ダークチャージ",
			},
			effect: {
				ja: "自分にダメージカウンターを1個のせる。",
			},
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			damage: 50,
		},
	],
	weaknesses: [
		{
			type: "Grass",
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-30",
		},
	],
	retreat: 0,
	variants: [
		{
			type: "normal",
		},
	],
}

export default card
