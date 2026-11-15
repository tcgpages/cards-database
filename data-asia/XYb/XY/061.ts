import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "レジロックEX"
	},
	illustrator: "PLANETA",
	rarity: "None",
	category: "Pokemon",
	hp: 180,
	types: [
		"Fighting"
	],
	stage: "Basic",
	suffix: "EX",
	abilities: [
		{
			name: {
				ja: "レジパワー"
			},
			effect: {
				ja: "このポケモンがいるかぎり、自分の闘ポケモン（「レジロックEX」をのぞく）が使うワザの、相手のバトルポケモンへのダメージは、「+10」される。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "がんばんプレス"
			},
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-20」される。"
			},
			cost: [
				"Fighting",
				"Fighting",
				"Fighting"
			],
			damage: 100
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],
	retreat: 3,
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
