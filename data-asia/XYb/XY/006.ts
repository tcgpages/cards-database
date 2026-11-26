import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ジュカインEX"
	},
	illustrator: "Eske Yoshinob",
	rarity: "None",
	category: "Pokemon",
	hp: 170,
	types: [
		"Grass"
	],
	dexId: [
		254
	],
	stage: "Basic",
	suffix: "EX",
	attacks: [
		{
			name: {
				ja: "ねむけどく"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをどくとねむりにする。"
			},
			cost: [
				"Grass"
			],
			damage: 10
		},
		{
			name: {
				ja: "アサシンクロー"
			},
			effect: {
				ja: "相手のバトルポケモンが特殊状態なら、70ダメージを追加。"
			},
			cost: [
				"Grass",
				"Colorless"
			],
			damage: "60+"
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	retreat: 1,
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
