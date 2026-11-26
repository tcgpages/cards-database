import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "コモルー"
	},
	rarity: "Promo",
	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 80,
	types: [
		"Dragon"
	],
	stage: "Stage1",
	dexId: [
		372
	],
	description: {
		ja: "硬い 殻の 中では 細胞が 変化を 始めている。進化する 瞬間に 殻が はがれ落ちる。"
	},
	attacks: [
		{
			name: {
				ja: "はねとばす"
			},
			effect: {
				ja: "コインを1回投げオモテなら、20ダメージを追加。"
			},
			cost: [
				"Colorless"
			],
			damage: "10+"
		},
		{
			name: {
				ja: "ころがる"
			},
			cost: [
				"Fire",
				"Water",
				"Colorless"
			],
			damage: 50
		}
	],
	evolveFrom: {
		ja: "タツベイ"
	},
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		}
	],
	retreat: 3
}

export default card
