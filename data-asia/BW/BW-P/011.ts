import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ミネズミ"
	},
	rarity: "Promo",
	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 60,
	types: [
		"Colorless"
	],
	stage: "Basic",
	dexId: [
		504
	],
	description: {
		ja: "ほほの 袋に エサを ため込み 何日も 見張りを 続ける。 しっぽで 仲間に 合図する。"
	},
	attacks: [
		{
			name: {
				ja: "ひっさつまえば"
			},
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。"
			},
			cost: [
				"Colorless"
			],
			damage: 30
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 1
}

export default card
