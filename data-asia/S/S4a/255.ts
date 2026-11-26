import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ブリムオン"
	},
	illustrator: "Akira Komayama",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 150,
	types: [
		"Psychic"
	],
	evolveFrom: {
		ja: "テブリム"
	},
	stage: "Stage2",
	dexId: [
		858
	],
	description: {
		ja: "頭痛になるほどの サイコパワーを 周囲に 放って ほかの 生物を 遠ざけているのだ。"
	},
	abilities: [
		{
			name: {
				ja: "マインドハット"
			},
			effect: {
				ja: "自分の番に1回使える。おたがいのプレイヤーは、それぞれ自分の手札を1枚選び、トラッシュする。（トラッシュは相手から行う。手札がないプレイヤーはトラッシュしない。）"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "むねんのしずく"
			},
			effect: {
				ja: "自分のトラッシュにあるポケモンの枚数ぶんのダメカンを、相手のバトルポケモンにのせる。"
			},
			cost: [
				"Psychic"
			]
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
	retreat: 2,
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
