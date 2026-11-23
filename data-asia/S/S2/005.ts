import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "ルンパッパ"
	},
	rarity: "Uncommon",
	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 160,
	types: [
		"Grass"
	],
	stage: "Stage2",
	dexId: [
		272
	],
	description: {
		ja: "楽しい 音楽の リズムが ルンパッパの 細胞を 活性化 させて パワーを 発揮するのだ。"
	},
	attacks: [
		{
			name: {
				ja: "アゲアゲラッシュ"
			},
			effect: {
				ja: "自分がすでにとったサイドの枚数×60ダメージ。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: "60×"
		},
		{
			name: {
				ja: "メガドレイン"
			},
			effect: {
				ja: "このポケモンのHPを「30」回復する。"
			},
			cost: [
				"Grass",
				"Colorless",
				"Colorless"
			],
			damage: 120
		}
	],
	evolveFrom: {
		ja: "ハスブレロ"
	},
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	retreat: 2,
	regulationMark: "D",
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
