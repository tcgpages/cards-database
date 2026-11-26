import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ヒトモシ"
	},
	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Pokemon",
	hp: 50,
	types: [
		"Psychic"
	],
	stage: "Basic",
	dexId: [
		607
	],
	description: {
		ja: "ヒトモシの 灯す 明かりは 人や ポケモンの 生命力を 吸い取って 燃えているのだ。"
	},
	attacks: [
		{
			name: {
				ja: "ちょっとあぶる"
			},
			effect: {
				ja: "自分の山札から好きなカードを2枚まで選び、トラッシュする。そして山札を切る。"
			},
			cost: [
				"Colorless"
			]
		}
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
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
