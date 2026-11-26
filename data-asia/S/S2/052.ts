import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "アサナン"
	},
	rarity: "Common",
	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 70,
	types: [
		"Fighting"
	],
	stage: "Basic",
	dexId: [
		307
	],
	description: {
		ja: "１日 １個だけ 木の実を 食べる。 空腹に 耐えることで 心が 研ぎ澄まされていく。"
	},
	attacks: [
		{
			name: {
				ja: "ヨガショック"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
			},
			cost: [
				"Colorless"
			],
			damage: 10
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 1,
	regulationMark: "D",
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
