import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ゾロア"
	},
	illustrator: "Hitoshi Ariga",
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: [
		"Darkness"
	],
	stage: "Basic",
	dexId: [
		570
	],
	description: {
		ja: "人や ほかの ポケモンに 化ける。 自分の 正体を 隠すことで 危険から 身を 守っているのだ。"
	},
	attacks: [
		{
			name: {
				ja: "やみよにかける"
			},
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。"
			},
			cost: [
				"Darkness"
			]
		},
		{
			name: {
				ja: "ダークエッジ"
			},
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			cost: [
				"Darkness",
				"Colorless"
			],
			damage: 30
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
	retreat: 1,
	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
			foil: "mirror"
		}
	]
}

export default card
