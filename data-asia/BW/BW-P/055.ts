import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ゴチルゼル"
	},
	rarity: "Promo",
	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 120,
	types: [
		"Psychic"
	],
	stage: "Stage2",
	dexId: [
		576
	],
	description: {
		ja: "星の 配置や 動きから 未来の できごとを 予知する 能力を 持つ。 トレーナーの 寿命も 見える。"
	},
	attacks: [
		{
			name: {
				ja: "ひらてうち"
			},
			cost: [
				"Psychic"
			],
			damage: 30
		},
		{
			name: {
				ja: "ブレインショック"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをこんらんにする。ウラなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			cost: [
				"Psychic",
				"Colorless",
				"Colorless"
			],
			damage: 60
		}
	],
	evolveFrom: {
		ja: "ゴチミル"
	},
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 1
}

export default card
