import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ダストダス"
	},
	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	hp: 100,
	types: [
		"Psychic"
	],
	evolveFrom: {
		ja: "ヤブクロン"
	},
	stage: "Stage1",
	dexId: [
		569
	],
	description: {
		ja: "ゴミを 吸いとっては 体内で 新しい 種類の 毒ガスや 毒の 液体を 生みだしている。"
	},
	abilities: [
		{
			name: {
				ja: "ダストオキシン"
			},
			effect: {
				ja: "このポケモンに「ポケモンのどうぐ」がついているなら、おたがいの場・手札・トラッシュのカードに書かれている特性（「ダストオキシン」をのぞく）は、すべてなくなる。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "どぎついボム"
			},
			effect: {
				ja: "相手のバトルポケモンをどくとこんらんにする。"
			},
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: 60
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 3,
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
