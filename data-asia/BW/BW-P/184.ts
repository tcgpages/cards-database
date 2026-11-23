import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "シャワーズ"
	},
	rarity: "Promo",
	illustrator: "The Pokémon Company Art-team",
	category: "Pokemon",
	hp: 110,
	types: [
		"Water"
	],
	stage: "Stage1",
	dexId: [
		134
	],
	description: {
		ja: "体の 細胞の 作りが 水の 分子に 似ているので 水に 溶けることも できる。"
	},
	attacks: [
		{
			name: {
				ja: "だくりゅう"
			},
			effect: {
				ja: "相手のベンチポケモンを1匹選び、そのポケモンにも20ダメージ。［ベンチへのダメージは弱点・抵抗力の計算をしない。］"
			},
			cost: [
				"Colorless"
			],
			damage: 20
		},
		{
			name: {
				ja: "スパイラルドレイン"
			},
			effect: {
				ja: "このポケモンのHPを「20」回復する。"
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
		ja: "イーブイ"
	},
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	retreat: 2
}

export default card
