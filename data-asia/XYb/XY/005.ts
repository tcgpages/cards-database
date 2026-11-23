import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "アリアドス"
	},
	illustrator: "Hajime Kusajima",
	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: [
		"Grass"
	],
	evolveFrom: {
		ja: "イトマル"
	},
	stage: "Stage1",
	dexId: [
		168
	],
	description: {
		ja: "獲物の 体に 糸を つけて わざと 逃がす。 糸を たどれば 仲間ごと 捕まえられるからだ。"
	},
	abilities: [
		{
			name: {
				ja: "どくのす"
			},
			effect: {
				ja: "おたがいのバトルポケモン（草ポケモンはのぞく）を、それぞれどくにする。この特性は、自分の番に1回使える。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "かこいこむ"
			},
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。"
			},
			cost: [
				"Grass",
				"Colorless"
			],
			damage: 30
		}
	],
	weaknesses: [
		{
			type: "Fire",
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
