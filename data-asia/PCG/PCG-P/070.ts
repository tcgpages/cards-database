import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "サーナイト",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Kagemaru Himeno",
	hp: 100,
	types: [
		"Psychic",
	],
	stage: "Stage2",
	evolveFrom: {
		ja: "キルリア",
	},
	dexId: [
		282,
	],
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				ja: "ヒーリングダンス",
			},
			effect: {
				ja: "このパワーは、自分の番に1回使うことができる。自分のポケモン1匹のダメージカウンターを、2個とりのぞく。このポケモンが特殊状態なら、または、この番に、すでに別のポケモンの「ヒーリングダンス」を使っていたなら、このパワーを使うことはできない。",
			},
		},
	],
	attacks: [
		{
			name: {
				ja: "サイコパンチ",
			},
			cost: [
				"Psychic",
				"Colorless",
			],
			damage: 30,
		},
		{
			name: {
				ja: "マインドショック",
			},
			effect: {
				ja: "このワザは、相手の弱点・抵抗力に関係なく、ダメージを与える。",
			},
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			damage: 60,
		},
	],
	weaknesses: [
		{
			type: "Psychic",
		},
	],
	retreat: 2,
	variants: [
		{
			type: "normal",
		},
	],
}

export default card
