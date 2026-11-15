import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ゴルーグ"
	},
	rarity: "Promo",
	illustrator: "match",
	category: "Pokemon",
	hp: 120,
	types: [
		"Fighting"
	],
	stage: "Stage1",
	dexId: [
		623
	],
	description: {
		ja: "マッハの スピードで 空を 飛ぶ。 胸の 封印を はがすと エネルギーが 暴走してしまう。"
	},
	attacks: [
		{
			name: {
				ja: "メガトンパンチ"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 30
		},
		{
			name: {
				ja: "ばくれつパンチ"
			},
			effect: {
				ja: "コインを1回投げオモテなら、30ダメージを追加し、相手のバトルポケモンをこんらんにする。"
			},
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless"
			],
			damage: "60+"
		}
	],
	evolveFrom: {
		ja: "メガゴルーグex"
	},
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		}
	],
	retreat: 4
}

export default card
