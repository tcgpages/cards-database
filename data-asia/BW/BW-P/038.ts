import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "テラキオン"
	},
	variants: [{ type: "holo" }],
	rarity: "Promo",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 120,
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
	attacks: [
		{
			name: {
				ja: "ロックスマッシュ"
			},
			cost: [
				"Fighting",
				"Colorless"
			],
			damage: 40
		},
		{
			name: {
				ja: "せいなるつるぎ"
			},
			effect: {
				ja: "次の自分の番、このポケモンは「せいなるつるぎ」を使えない。"
			},
			cost: [
				"Fighting",
				"Fighting",
				"Colorless"
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
	retreat: 4
}

export default card
