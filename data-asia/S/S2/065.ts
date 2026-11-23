import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "ミカルゲ"
	},
	rarity: "Uncommon",
	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 60,
	types: [
		"Darkness"
	],
	stage: "Basic",
	dexId: [
		442
	],
	description: {
		ja: "５００年前に 悪さをしたため 要石の ひび割れに 体を つなぎとめられてしまった。"
	},
	attacks: [
		{
			name: {
				ja: "うらみわけ"
			},
			effect: {
				ja: "おたがいの山札を上から1枚ずつトラッシュする。"
			},
			cost: [
				"Darkness"
			]
		},
		{
			name: {
				ja: "むねんのしずく"
			},
			effect: {
				ja: "自分のトラッシュにあるポケモンの枚数ぶんのダメカンを、相手のバトルポケモンにのせる。"
			},
			cost: [
				"Darkness",
				"Colorless"
			]
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],
	retreat: 2,
	regulationMark: "D",
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
