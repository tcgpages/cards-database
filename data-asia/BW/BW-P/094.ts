import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ワルビアル"
	},
	rarity: "Promo",
	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 140,
	types: [
		"Fighting"
	],
	stage: "Stage2",
	dexId: [
		553
	],
	description: {
		ja: "出会った 獲物は 逃がさない。 自動車の ボディを 食いちぎる 強力な アゴを 持つ。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ブラックアイズ"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。この特性は、このポケモンがバトル場にいるなら、自分の番に1回使える。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "あばれる"
			},
			effect: {
				ja: "コインを1回投げオモテなら、20ダメージを追加。ウラなら、このポケモンにも20ダメージ。"
			},
			cost: [
				"Fighting",
				"Fighting",
				"Colorless"
			],
			damage: "70+"
		}
	],
	evolveFrom: {
		ja: "ワルビル"
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
	retreat: 3
}

export default card
