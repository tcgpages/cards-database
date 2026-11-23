import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "ゴチミル"
	},
	illustrator: "kirisAki",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		575
	],
	hp: 80,
	types: [
		"Psychic"
	],
	stage: "Stage1",
	description: {
		ja: "催眠術で ポケモンや 人を 操る。 眠ったまま ゴチミルに 連れ去られる 昔話が 各地に 残っている。"
	},
	attacks: [
		{
			name: {
				ja: "おうふくビンタ"
			},
			effect: {
				ja: "コインを2回投げ、オモテの数×20ダメージ。"
			},
			cost: [
				"Colorless"
			],
			damage: "20×"
		},
		{
			name: {
				ja: "サイケこうせん"
			},
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。"
			},
			cost: [
				"Psychic",
				"Colorless"
			],
			damage: 20
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 1,
	evolveFrom: {
		ja: "ゴチム"
	},
	variants: [
		{
			type: "normal",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "normal"
		},
		{
			type: "reverse",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "reverse"
		}
	]
}

export default card
