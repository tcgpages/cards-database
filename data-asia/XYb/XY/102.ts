import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ルギア"
	},
	illustrator: "TOKIYA",
	rarity: "None",
	category: "Pokemon",
	hp: 120,
	types: [
		"Colorless"
	],
	stage: "Basic",
	dexId: [
		249
	],
	description: {
		ja: "海の神様と 伝えられる ポケモン。 嵐の 夜 姿を 見たという 話が 伝えられる。"
	},
	abilities: [
		{
			name: {
				ja: "プレッシャー"
			},
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、相手のバトルポケモンが使うワザのダメージは、すべて「-20」される。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "ライジングバーン"
			},
			effect: {
				ja: "相手のバトルポケモンが「ポケモンEX」なら、60ダメージを追加。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: "60+"
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
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
