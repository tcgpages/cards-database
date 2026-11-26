import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "スリーパー"
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: [
		"Psychic"
	],
	evolveFrom: {
		ja: "スリープ"
	},
	stage: "Stage1",
	dexId: [
		97
	],
	description: {
		ja: "振り子を 目の前で ゆらされると たった今 目覚めたばかりの 人も ３秒後には 眠ってしまう。"
	},
	abilities: [
		{
			name: {
				ja: "グッナイベイビー"
			},
			effect: {
				ja: "おたがいのバトルポケモンを、それぞれねむりにする。この特性は、自分の番に1回使える。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "しねんのずつき"
			},
			cost: [
				"Psychic",
				"Psychic"
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
	retreat: 2,
	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card
