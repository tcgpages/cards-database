import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ゾロア"
	},
	rarity: "Promo",
	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 60,
	types: [
		"Darkness"
	],
	stage: "Basic",
	dexId: [
		570
	],
	description: {
		ja: "人や ほかの ポケモンに 化ける。 自分の 正体を 隠すことで 危険から 身を 守っているのだ。"
	},
	attacks: [
		{
			name: {
				ja: "とびつく"
			},
			effect: {
				ja: "コインを1回投げオモテなら、10ダメージを追加。"
			},
			cost: [
				"Darkness",
				"Colorless"
			],
			damage: "20+"
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		}
	],
	retreat: 1
}

export default card
