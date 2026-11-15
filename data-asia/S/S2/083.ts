import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "キテルグマ"
	},
	rarity: "Uncommon",
	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 140,
	types: [
		"Colorless"
	],
	stage: "Stage1",
	dexId: [
		760
	],
	description: {
		ja: "仲間と 認めると 愛情を 示すために 抱きしめようとするが 骨を 砕かれるので 危険。"
	},
	attacks: [
		{
			name: {
				ja: "アームハンマー"
			},
			effect: {
				ja: "相手の山札を上から1枚トラッシュする。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: 90
		},
		{
			name: {
				ja: "ビッグスロー"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンと、ついているすべてのカードを、トラッシュする。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless"
			]
		}
	],
	evolveFrom: {
		ja: "キテルグマGX"
	},
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 3,
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
