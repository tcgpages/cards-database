import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "シャンデラ"
	},
	rarity: "Rare",
	illustrator: "Taira Akitsu",
	category: "Pokemon",
	hp: 140,
	types: [
		"Fire"
	],
	stage: "Stage2",
	dexId: [
		609
	],
	description: {
		ja: "古びた 洋館に 棲みつく。 腕の 炎を 妖しく 揺らし 相手を 催眠に かけるぞ。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "まもりのともしび"
			},
			effect: {
				ja: "このポケモンがいるかぎり、エネルギーがついている自分のポケモン全員の弱点は、すべてなくなる。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "ミラージュフレア"
			},
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。"
			},
			cost: [
				"Fire",
				"Colorless"
			],
			damage: 110
		}
	],
	evolveFrom: {
		ja: "ランプラー"
	},
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],
	retreat: 2,
	regulationMark: "D",
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
