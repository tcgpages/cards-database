import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "キバゴ"
	},
	rarity: "Promo",
	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 50,
	types: [
		"Colorless"
	],
	stage: "Basic",
	dexId: [
		610
	],
	description: {
		ja: "キバで 樹木に 傷を つけて 縄張りの 目印にする。 キバは 折れても すぐに 生える。"
	},
	attacks: [
		{
			name: {
				ja: "かじりつく"
			},
			effect: {
				ja: "次の相手の番、このワザを受けた相手のバトルポケモンは、にげられない。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 20
		}
	],
	retreat: 1
}

export default card
