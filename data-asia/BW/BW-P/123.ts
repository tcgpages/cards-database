import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "キュウコン"
	},
	variants: [{ type: "holo" }],
	rarity: "Promo",
	illustrator: "Hideaki Hakozaki",
	category: "Pokemon",
	hp: 90,
	types: [
		"Fire"
	],
	stage: "Stage1",
	dexId: [
		38
	],
	description: {
		ja: "９本の しっぽには 神秘的な 力が 宿っていると 伝わる。 １０００年 生き続けるらしい。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "かがやくまなざし"
			},
			effect: {
				ja: "この特性は、このカードを手札から出して進化させたとき、1回使える。相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "たたりび"
			},
			effect: {
				ja: "相手のバトルポケモンが受けている特殊状態の数×50ダメージを追加。"
			},
			cost: [
				"Fire"
			],
			damage: "20+"
		}
	],
	evolveFrom: {
		ja: "ロコン"
	},
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],
	retreat: 1
}

export default card
