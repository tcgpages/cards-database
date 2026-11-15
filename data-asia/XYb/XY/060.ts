import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "チャーレム"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "None",
	category: "Pokemon",
	hp: 90,
	types: [
		"Fighting"
	],
	stage: "Stage1",
	abilities: [
		{
			name: {
				ja: "Ω（オメガ）連打"
			},
			effect: {
				ja: "このポケモンは、ワザを2回連続で使える。（1回目で相手のバトルポケモンがきぜつしたなら、次のポケモンが出た後、2回目を使う。）"
			},
			type: "Ancient Trait"
		}
	],
	attacks: [
		{
			name: {
				ja: "めいそう"
			},
			effect: {
				ja: "このポケモンのHPを「30」回復する。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "ヨガキック"
			},
			effect: {
				ja: "このワザのダメージは弱点・抵抗力の計算をしない。"
			},
			cost: [
				"Fighting",
				"Fighting"
			],
			damage: 30
		}
	],
	weaknesses: [
		{
			type: "Psychic",
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
