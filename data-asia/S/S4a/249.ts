import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル サニゴーン"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 100,
	types: [
		"Psychic"
	],
	evolveFrom: {
		ja: "ガラル サニーゴ"
	},
	stage: "Stage1",
	dexId: [
		864
	],
	description: {
		ja: "霊力が 高まり 殻から 解き放たれた。 霊体で 核の 魂を 守っている。"
	},
	abilities: [
		{
			name: {
				ja: "ほろびのボディ"
			},
			effect: {
				ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けてきぜつしたとき、自分はコインを1回投げる。オモテなら、ワザを使ったポケモンをきぜつさせる。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "おいつめる"
			},
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。"
			},
			cost: [
				"Psychic",
				"Colorless"
			],
			damage: 60
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
