import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "レパルダス"
	},
	rarity: "Promo",
	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 80,
	types: [
		"Darkness"
	],
	stage: "Stage1",
	dexId: [
		510
	],
	description: {
		ja: "神出鬼没な ポケモン。 美しい スタイルと 毛並みが 多くの トレーナーを ひきつける。"
	},
	attacks: [
		{
			name: {
				ja: "だましうち"
			},
			effect: {
				ja: "相手のポケモンを1匹選び、30ダメージ。このワザのダメージは、弱点・抵抗力と、ダメージを受けるポケモンにかかっている効果の計算をしない。"
			},
			cost: [
				"Darkness"
			]
		},
		{
			name: {
				ja: "ツメでえぐる"
			},
			effect: {
				ja: "ダメージを与えるとき、すでに相手のバトルポケモンにダメカンがのっているなら、30ダメージを追加。"
			},
			cost: [
				"Darkness",
				"Colorless",
				"Colorless"
			],
			damage: "50+"
		}
	],
	evolveFrom: {
		ja: "チョロネコ"
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
