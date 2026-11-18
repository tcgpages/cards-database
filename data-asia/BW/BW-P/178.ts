import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "バッフロン"
	},
	rarity: "Promo",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 100,
	types: [
		"Colorless"
	],
	stage: "Basic",
	dexId: [
		626
	],
	description: {
		ja: "見境なく 突進 しており かれらの テリトリーに はいると 列車でも 吹き飛ばされてしまう。"
	},
	attacks: [
		{
			name: {
				ja: "ツールブレイク"
			},
			effect: {
				ja: "相手のバトルポケモンについている「ポケモンのどうぐ」をトラッシュする。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "ぶちかます"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: 70
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 2
}

export default card
