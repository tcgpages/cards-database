import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "エルレイド"
	},
	illustrator: "Hajime Kusajima",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		475
	],
	hp: 140,
	types: [
		"Fighting"
	],
	stage: "Stage2",
	description: {
		ja: "だれかを 守ろうと したとき ひじを伸ばし 刀のように 変化 させて 激しく 戦う。"
	},
	attacks: [
		{
			name: {
				ja: "しんけいづき"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
			},
			cost: [
				"Fighting"
			],
			damage: 30
		},
		{
			name: {
				ja: "しゅらのやいば"
			},
			effect: {
				ja: "ダメカンがのっている自分のベンチポケモンの数×20ダメージを追加。"
			},
			cost: [
				"Fighting",
				"Colorless",
				"Colorless"
			],
			damage: "60+"
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 2,
	evolveFrom: {
		ja: "キルリア"
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
