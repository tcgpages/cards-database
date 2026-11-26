import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ゾロアーク"
	},
	variants: [{ type: "holo" }],
	rarity: "Promo",
	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 100,
	types: [
		"Darkness"
	],
	stage: "Stage1",
	dexId: [
		571
	],
	description: {
		ja: "いっぺんに 大勢の 人を 化かす 力を 持つ。 幻の 景色を 見せて 住処を 守る。"
	},
	attacks: [
		{
			name: {
				ja: "わるだくみ"
			},
			effect: {
				ja: "自分の山札から好きなカードを1枚選び、手札に加える。そして山札を切る。"
			},
			cost: [
				"Darkness"
			]
		},
		{
			name: {
				ja: "イカサマ"
			},
			effect: {
				ja: "相手のバトルポケモンが持っているワザを1つ選び、このワザとして使う。"
			},
			cost: [
				"Colorless",
				"Colorless"
			]
		}
	],
	evolveFrom: {
		ja: "ゾロア"
	},
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
	retreat: 1
}

export default card
