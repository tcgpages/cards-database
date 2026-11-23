import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "ダイノーズ"
	},
	rarity: "Uncommon",
	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 140,
	types: [
		"Metal"
	],
	stage: "Stage1",
	dexId: [
		476
	],
	description: {
		ja: "３つの 小さな ユニットを 使い エサを とったり 敵と 戦う。 本体は ほぼ 命令するだけ。"
	},
	attacks: [
		{
			name: {
				ja: "じゅうりょくおとし"
			},
			effect: {
				ja: "相手のバトルポケモンのにげるためのエネルギーの数×30ダメージ追加。"
			},
			cost: [
				"Metal"
			],
			damage: "10+"
		},
		{
			name: {
				ja: "ヘビーインパクト"
			},
			cost: [
				"Metal",
				"Metal",
				"Colorless"
			],
			damage: 120
		}
	],
	evolveFrom: {
		ja: "ノズパス"
	},
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Grass",
			value: "－30"
		}
	],
	retreat: 4,
	regulationMark: "D",
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
