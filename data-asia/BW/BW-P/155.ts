import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "テラキオン"
	},
	variants: [{ type: "reverse" }],
	rarity: "Promo",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 130,
	types: [
		"Fighting"
	],
	stage: "Basic",
	dexId: [
		639
	],
	description: {
		ja: "人間 同士の 戦争によって 住処を 失った ポケモンたちを 守るため 人間と 戦った。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "せいぎのこころ"
			},
			effect: {
				ja: "このポケモンが使うワザの、[悪]ポケモンへのダメージは「+50」される。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "はかいのいちげき"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless"
			],
			damage: 80
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],
	retreat: 4
}

export default card
