import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ブースター"
	},
	rarity: "Promo",
	illustrator: "The Pokémon Company Art-team",
	category: "Pokemon",
	hp: 90,
	types: [
		"Fire"
	],
	stage: "Stage1",
	dexId: [
		136
	],
	description: {
		ja: "吸い込んだ 息は 体内の 炎袋で １７００度に まで 熱せられて 炎と なる。"
	},
	attacks: [
		{
			name: {
				ja: "すなかけ"
			},
			effect: {
				ja: "次の相手の番、このワザを受けた相手のバトルポケモンがワザを使うとき、相手はコインを1回投げる。ウラならそのワザは失敗。"
			},
			cost: [
				"Colorless"
			],
			damage: 20
		},
		{
			name: {
				ja: "ファイヤースラッシュ"
			},
			effect: {
				ja: "のぞむなら、このポケモンについている[炎]エネルギーを1個選び、トラッシュしてよい。その場合、30ダメージを追加。"
			},
			cost: [
				"Fire",
				"Colorless",
				"Colorless"
			],
			damage: "60+"
		}
	],
	evolveFrom: {
		ja: "イーブイ"
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
