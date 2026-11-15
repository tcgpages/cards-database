import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ゼルネアス"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "None",
	category: "Pokemon",
	hp: 120,
	types: [
		"Fairy"
	],
	stage: "Basic",
	dexId: [
		716
	],
	description: {
		ja: "頭の ツノが 七色に 輝くとき 永遠の 命を 分け与えると 言われている。"
	},
	attacks: [
		{
			name: {
				ja: "レインボーフォース"
			},
			effect: {
				ja: "自分のベンチポケモンのタイプの数×30ダメージを追加。"
			},
			cost: [
				"Fairy",
				"Colorless",
				"Colorless"
			],
			damage: "10+"
		},
		{
			name: {
				ja: "パワークリエイション"
			},
			effect: {
				ja: "この番、このポケモンのHPを回復していたなら、80ダメージを追加。"
			},
			cost: [
				"Fairy",
				"Fairy",
				"Colorless",
				"Colorless"
			],
			damage: "80+"
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
	retreat: 2,
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
