import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "テブリム"
	},
	rarity: "Common",
	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 80,
	types: [
		"Psychic"
	],
	stage: "Stage1",
	dexId: [
		857
	],
	description: {
		ja: "強い 感情を もつ ものは それが 誰であれ 黙らせる。 その手段は じつに 乱暴。"
	},
	attacks: [
		{
			name: {
				ja: "めいそう"
			},
			effect: {
				ja: "このポケモンのHPを「30」回復する。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "ぶんまわす"
			},
			effect: {
				ja: "コインを1回投げオモテなら、30ダメージ追加。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: "30+"
		}
	],
	evolveFrom: {
		ja: "ミブリム"
	},
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "－30"
		}
	],
	retreat: 1,
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
