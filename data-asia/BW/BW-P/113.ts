import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "メグロコ"
	},
	variants: [{ type: "reverse" }],
	rarity: "Promo",
	illustrator: "Hajime Kusajima",
	category: "Pokemon",
	hp: 70,
	types: [
		"Darkness"
	],
	stage: "Basic",
	dexId: [
		551
	],
	description: {
		ja: "砂漠の 砂の 中で 生活。 太陽に 暖められた 砂が 体温の 低下を 防ぐのだ。"
	},
	attacks: [
		{
			name: {
				ja: "すなもぐり"
			},
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージを受けない。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "どつく"
			},
			cost: [
				"Darkness",
				"Colorless",
				"Colorless"
			],
			damage: 40
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		}
	],
	retreat: 2
}

export default card
