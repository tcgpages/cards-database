import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "ピクシー"
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: [
		"Fairy"
	],
	stage: "Stage1",
	dexId: [
		36
	],
	description: {
		ja: "妖精の 仲間で めったに 人前に 出てこない。 気配を 感じて すぐに 逃げてしまうようだ。"
	},
	attacks: [
		{
			name: {
				ja: "ムーンバリア"
			},
			effect: {
				ja: "次の相手の番、このポケモンは竜ポケモンからワザのダメージや効果を受けない。"
			},
			cost: [
				"Fairy"
			],
			damage: 30
		},
		{
			name: {
				ja: "ローリングアタック"
			},
			effect: {
				ja: "コインを1回投げオモテなら、30ダメージを追加。"
			},
			cost: [
				"Fairy",
				"Colorless",
				"Colorless"
			],
			damage: "50+"
		}
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
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
