import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "バケッチャ"
	},
	illustrator: "HiRON",
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: [
		"Psychic"
	],
	stage: "Basic",
	dexId: [
		710
	],
	description: {
		ja: "成仏できない 魂を カボチャの 体に 入れている。 日暮れと ともに 動きはじめる。"
	},
	attacks: [
		{
			name: {
				ja: "ぶつかる"
			},
			cost: [
				"Psychic"
			],
			damage: 10
		},
		{
			name: {
				ja: "よるのこうしん"
			},
			effect: {
				ja: "自分のトラッシュにあるワザ「よるのこうしん」を持つポケモンの枚数×20ダメージ。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: "20×"
		}
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		}
	],
	retreat: 2,
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
