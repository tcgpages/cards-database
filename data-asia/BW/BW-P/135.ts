import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ヤブクロン"
	},
	rarity: "Promo",
	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 60,
	types: [
		"Psychic"
	],
	stage: "Basic",
	dexId: [
		568
	],
	description: {
		ja: "ゴミ袋が 産業廃棄物と 化学変化を 起こした ことで ポケモンとして 生まれ変わった。"
	},
	attacks: [
		{
			name: {
				ja: "かきあつめる"
			},
			effect: {
				ja: "コインを1回投げオモテなら、自分の山札から「ポケモンのどうぐ」を1枚選び、相手に見せてから、手札に加える。そして山札を切る。"
			},
			cost: [
				"Psychic"
			]
		},
		{
			name: {
				ja: "ヘドロなげ"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 20
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 1
}

export default card
