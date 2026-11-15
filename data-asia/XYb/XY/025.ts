import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ゲコガシラ"
	},
	illustrator: "Shin Nagasawa",
	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: [
		"Water"
	],
	stage: "Stage1",
	dexId: [
		657
	],
	description: {
		ja: "身軽さは だれにも 負けない。 ６００メートルを 超える タワーの 天辺まで １分で 登りきる。"
	},
	attacks: [
		{
			name: {
				ja: "みずぶんしん"
			},
			effect: {
				ja: "自分の山札から「ゲコガシラ」を3枚まで選び、ベンチに出す。そして山札を切る。"
			},
			cost: [
				"Water"
			]
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
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
