import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ゲノセクト"
	},
	variants: [{ type: "holo" }],
	rarity: "Promo",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 110,
	types: [
		"Grass"
	],
	stage: "Basic",
	dexId: [
		649
	],
	description: {
		ja: "３億年前に いた ポケモン。 プラズマ団に 改造 され 背中に 砲台を つけられた。"
	},
	attacks: [
		{
			name: {
				ja: "はかいこうせん"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 30
		},
		{
			name: {
				ja: "ブレイクバズーカ"
			},
			effect: {
				ja: "このポケモンについている[草]エネルギーをすべてトラッシュする。"
			},
			cost: [
				"Grass",
				"Grass",
				"Colorless"
			],
			damage: 100
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	retreat: 2
}

export default card
