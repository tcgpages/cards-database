import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ガラルマッギョ"
	},
	illustrator: "tetsuya koizumi",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 120,
	types: [
		"Metal"
	],
	stage: "Basic",
	dexId: [
		618
	],
	description: {
		ja: "鉄分 たっぷりの 泥の 中で 生息していたため 頑丈な 鋼の 体に 変化した。"
	},
	abilities: [
		{
			name: {
				ja: "トラバサミ"
			},
			effect: {
				ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "ダメージラッシュ"
			},
			effect: {
				ja: "ウラが出るまでコインを投げ、オモテの数×30ダメージ追加。"
			},
			cost: [
				"Metal",
				"Colorless"
			],
			damage: "30+"
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Grass",
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
