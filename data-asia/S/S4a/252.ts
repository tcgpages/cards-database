import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ポットデス"
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 60,
	types: [
		"Psychic"
	],
	evolveFrom: {
		ja: "ヤバチャ"
	},
	stage: "Stage1",
	dexId: [
		855
	],
	description: {
		ja: "アンティークの ポットに 棲みつく。 ほとんどが 贋作だが ごくまれに 真作が 見つかる ことも。"
	},
	abilities: [
		{
			name: {
				ja: "ティーブレイク"
			},
			effect: {
				ja: "自分の番に、自分の手札からワザ「マッドパーティ」を持つポケモンを1枚トラッシュするなら、1回使える。自分の山札を2枚引く。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "マッドパーティ"
			},
			effect: {
				ja: "自分のトラッシュにある、ワザ「マッドパーティ」を持つポケモンの数×20ダメージ。"
			},
			cost: [
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
			value: "-30"
		}
	],
	retreat: 1,
	regulationMark: "D",
	variants: [
		{
			type: "holo",
			languages: [
				"ja"
			]
		}
	]
}

export default card
