import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ヒヤッキー"
	},
	rarity: "Promo",
	illustrator: "Sumiyoshi Kizuki",
	category: "Pokemon",
	hp: 90,
	types: [
		"Water"
	],
	stage: "Stage1",
	dexId: [
		516
	],
	description: {
		ja: "頭の ふさに 水を ためる。 貯水量が 減ると しっぽで 水を 吸い上げて 補給する。"
	},
	attacks: [
		{
			name: {
				ja: "くさのちから"
			},
			effect: {
				ja: "このポケモンに[草]エネルギーがついているなら、このポケモンのHPを「20」回復する。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 30
		},
		{
			name: {
				ja: "らんすいりゅう"
			},
			effect: {
				ja: "相手のバトルポケモンについているエネルギーを1個選び、ベンチポケモンにつけ替える。"
			},
			cost: [
				"Water",
				"Colorless",
				"Colorless"
			],
			damage: 60
		}
	],
	evolveFrom: {
		ja: "ヒヤップ"
	},
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	retreat: 1
}

export default card
