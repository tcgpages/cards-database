import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ナゲキ"
	},
	rarity: "Promo",
	illustrator: "match",
	category: "Pokemon",
	hp: 90,
	types: [
		"Fighting"
	],
	stage: "Basic",
	dexId: [
		538
	],
	description: {
		ja: "帯を 締めると パワーアップする。 野生の ナゲキは つる草を 編んで 自分の 帯を 作る。"
	},
	attacks: [
		{
			name: {
				ja: "けさがため"
			},
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このワザを受けた相手のバトルポケモンは、ワザを使えない。"
			},
			cost: [
				"Fighting",
				"Colorless"
			],
			damage: 30
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 2
}

export default card
