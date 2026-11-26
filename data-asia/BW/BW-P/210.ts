import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "コイキング"
	},
	rarity: "Promo",
	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 30,
	types: [
		"Water"
	],
	stage: "Basic",
	dexId: [
		129
	],
	description: {
		ja: "長年 生きた コイキングは 跳ねるだけで 山をも 越えるが 技の威力は 弱いまま。"
	},
	attacks: [
		{
			name: {
				ja: "ぴっちぴち"
			},
			effect: {
				ja: "コインを1回投げウラなら、このポケモンにも10ダメージ。"
			},
			cost: [
				"Colorless"
			],
			damage: 10
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	retreat: 1
}

export default card
