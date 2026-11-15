import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ブラッキー"
	},
	rarity: "Promo",
	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 100,
	types: [
		"Darkness"
	],
	stage: "Stage1",
	dexId: [
		197
	],
	description: {
		ja: "月の 波動を 体に 浴びると 輪っか模様が ほのかに 輝き 不思議な 力に 目覚めるのだ。"
	},
	attacks: [
		{
			name: {
				ja: "あやしいひかり"
			},
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。"
			},
			cost: [
				"Colorless"
			],
			damage: 20
		},
		{
			name: {
				ja: "シャドーアウト"
			},
			effect: {
				ja: "コインを2回投げ、すべてオモテなら、相手のバトルポケモンについているエネルギーをすべてトラッシュする。"
			},
			cost: [
				"Darkness",
				"Colorless",
				"Colorless"
			],
			damage: 60
		}
	],
	evolveFrom: {
		ja: "ニンフィア"
	},
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
