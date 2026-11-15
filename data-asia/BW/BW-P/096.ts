import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ミルホッグ"
	},
	rarity: "Promo",
	illustrator: "MAHOU",
	category: "Pokemon",
	hp: 90,
	types: [
		"Colorless"
	],
	stage: "Stage1",
	dexId: [
		505
	],
	description: {
		ja: "ほほ袋に ためた 木の実の タネを 飛ばして 攻撃。 敵を 発見すると しっぽを 立てる。"
	},
	attacks: [
		{
			name: {
				ja: "みるチェック"
			},
			effect: {
				ja: "相手の山札を上から5枚見て、好きな順番に入れ替えて、山札の上にもどす。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "しっぽのいちげき"
			},
			effect: {
				ja: "のぞむなら、ダメージを与える前に、コインを1回投げてよい。オモテなら、60ダメージを追加。ウラなら、このワザは失敗。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: "20+"
		}
	],
	evolveFrom: {
		ja: "ミネズミ"
	},
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 1
}

export default card
