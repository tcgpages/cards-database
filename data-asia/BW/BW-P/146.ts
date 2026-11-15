import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ギラティナEX"
	},
	rarity: "Promo",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 180,
	types: [
		"Dragon"
	],
	stage: "Basic",
	dexId: [
		487
	],
	attacks: [
		{
			name: {
				ja: "ひきさく"
			},
			effect: {
				ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果の計算をしない。"
			},
			cost: [
				"Grass",
				"Psychic",
				"Colorless"
			],
			damage: 90
		},
		{
			name: {
				ja: "りゅうのはどう"
			},
			effect: {
				ja: "自分の山札を上から3枚トラッシュする。"
			},
			cost: [
				"Grass",
				"Psychic",
				"Colorless",
				"Colorless"
			],
			damage: 130
		}
	],
	suffix: "EX",
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		}
	],
	retreat: 3
}

export default card
