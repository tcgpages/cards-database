import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ミジュマル"
	},
	rarity: "Promo",
	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 60,
	types: [
		"Water"
	],
	stage: "Basic",
	dexId: [
		501
	],
	description: {
		ja: "お腹の ホタチは ツメと 同じ 成分で できている。 お腹から 外して 小刀として 使う。"
	},
	attacks: [
		{
			name: {
				ja: "ねむりのはどう"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをねむりにする。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "ふいをつく"
			},
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。"
			},
			cost: [
				"Water",
				"Colorless"
			],
			damage: 30
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
