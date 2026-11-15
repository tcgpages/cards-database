import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ゾロア"
	},
	rarity: "Promo",
	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 50,
	types: [
		"Darkness"
	],
	stage: "Basic",
	dexId: [
		570
	],
	description: {
		ja: "相手の 姿に 化けてみせて 驚かせる。 無口な 子供に 化けている ことが 多いらしい。"
	},
	attacks: [
		{
			name: {
				ja: "ひっかく"
			},
			cost: [
				"Colorless"
			],
			damage: 10
		},
		{
			name: {
				ja: "みだれひっかき"
			},
			effect: {
				ja: "コインを3回投げ、オモテの数×10ダメージ。"
			},
			cost: [
				"Darkness",
				"Colorless"
			],
			damage: "10×"
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		}
	],
	retreat: 1
}

export default card
