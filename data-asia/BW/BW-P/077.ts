import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ミジュマル"
	},
	rarity: "Promo",
	illustrator: "Ken Sugimori",
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
		ja: "お腹の ホタチで 戦う。 攻撃を 受け止めてから すかさず 切りつけて 反撃するのだ。"
	},
	attacks: [
		{
			name: {
				ja: "みずのはどう"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをねむりにする。"
			},
			cost: [
				"Water",
				"Colorless"
			],
			damage: 20
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
