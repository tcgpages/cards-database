import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "ダーテング"
	},
	illustrator: "TOKIYA",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: [
		"Darkness"
	],
	stage: "Stage2",
	dexId: [
		275
	],
	description: {
		ja: "葉っぱの ウチワを あおぐと 風速３０メートルの 突風が 巻き起こり 民家を 吹き飛ばす。"
	},
	attacks: [
		{
			name: {
				ja: "まきあげる"
			},
			effect: {
				ja: "コインを3回投げ、1回でもオモテなら、相手の手札を見る。その後、その中のカードをオモテの数ぶん選び、トラッシュする。"
			},
			cost: [
				"Darkness",
				"Colorless"
			]
		},
		{
			name: {
				ja: "てんぐがえし"
			},
			effect: {
				ja: "自分のトラッシュからトレーナーズを1枚選び、相手に見せてから、手札に加える。"
			},
			cost: [
				"Darkness",
				"Colorless",
				"Colorless"
			],
			damage: 60
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
	retreat: 1,
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
