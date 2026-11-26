import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ドリュウズ"
	},
	rarity: "Promo",
	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 120,
	types: [
		"Fighting"
	],
	stage: "Stage1",
	dexId: [
		530
	],
	description: {
		ja: "地下 １００メートルに 迷路の ような 巣穴を 作る。 地下鉄の トンネルに 穴を 開けてしまう。"
	},
	attacks: [
		{
			name: {
				ja: "あなをほる"
			},
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。"
			},
			cost: [
				"Fighting",
				"Colorless"
			],
			damage: 30
		},
		{
			name: {
				ja: "じしん"
			},
			effect: {
				ja: "自分のベンチポケモン全員にも、それぞれ10ダメージ。［ベンチへのダメージは弱点・抵抗力の計算をしない。］"
			},
			cost: [
				"Fighting",
				"Colorless",
				"Colorless"
			],
			damage: 70
		}
	],
	evolveFrom: {
		ja: "モグリュー"
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
	retreat: 2
}

export default card
