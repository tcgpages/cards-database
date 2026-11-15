import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ジュナイパー"
	},
	illustrator: "nagimiso",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 140,
	types: [
		"Grass"
	],
	stage: "Stage2",
	dexId: [
		724
	],
	description: {
		ja: "翼に 仕込まれた 矢羽根を 弓矢のように つがえて 放つ。 狙った 的は 外さない。"
	},
	abilities: [
		{
			name: {
				ja: "みつりんめいさい"
			},
			effect: {
				ja: "このポケモンは、相手の「ポケモンV・GX」からワザのダメージを受けない。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "スプリットアロー"
			},
			effect: {
				ja: "相手のベンチポケモン2匹にも、それぞれ20ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
			},
			cost: [
				"Grass",
				"Colorless"
			],
			damage: 90
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	retreat: 2,
	regulationMark: "D",
	variants: [
		{
			type: "holo",
			languages: [
				"ja"
			]
		}
	]
}

export default card
