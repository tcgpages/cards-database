import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ゼブライカ"
	},
	rarity: "Promo",
	illustrator: "match",
	category: "Pokemon",
	hp: 90,
	types: [
		"Lightning"
	],
	stage: "Stage1",
	dexId: [
		523
	],
	description: {
		ja: "稲妻のような 瞬発力。 ゼブライカが 全速力で 走ると 雷鳴が 響きわたる。"
	},
	attacks: [
		{
			name: {
				ja: "でんこうせっか"
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
				ja: "ショックボルト"
			},
			effect: {
				ja: "コインを1回投げウラなら、このポケモンについている[雷]エネルギーをすべてトラッシュする。"
			},
			cost: [
				"Lightning",
				"Lightning",
				"Colorless"
			],
			damage: 90
		}
	],
	evolveFrom: {
		ja: "シママ"
	},
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 1
}

export default card
