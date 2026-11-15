import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ヤバチャ"
	},
	illustrator: "MAHOU",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 30,
	types: [
		"Psychic"
	],
	stage: "Basic",
	dexId: [
		854
	],
	description: {
		ja: "残され 冷えきった 紅茶に さみしがりやな 魂が 宿り ポケモンに なったと いわれている。"
	},
	attacks: [
		{
			name: {
				ja: "ひっそりのせる"
			},
			effect: {
				ja: "相手のバトルポケモンに、ダメカンを2個のせる。"
			},
			cost: [
				"Colorless"
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
