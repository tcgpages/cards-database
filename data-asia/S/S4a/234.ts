import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "コオリッポ"
	},
	illustrator: "Shigenori Negishi",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 120,
	types: [
		"Water"
	],
	stage: "Basic",
	dexId: [
		875
	],
	description: {
		ja: "とても 寒い 場所から 流れ 流されて やってきた。 氷で 顔を つねに 冷やして いるのだ。"
	},
	abilities: [
		{
			name: {
				ja: "アイスフェイス"
			},
			effect: {
				ja: "このポケモンのHPがまんたんの状態なら、このポケモンが相手のポケモンから受けるワザのダメージは「-60」される。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "ふぶき"
			},
			effect: {
				ja: "相手のベンチポケモン全員にも、それぞれ10ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
			},
			cost: [
				"Water",
				"Colorless",
				"Colorless"
			],
			damage: 70
		}
	],
	weaknesses: [
		{
			type: "Metal",
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
