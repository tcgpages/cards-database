import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "ボクレー"
	},
	rarity: "Common",
	illustrator: "sui",
	category: "Pokemon",
	hp: 60,
	types: [
		"Grass"
	],
	stage: "Basic",
	dexId: [
		708
	],
	description: {
		ja: "森で さまよい 命を 落とした 子どもの 魂が 切り株に 宿り ポケモンに 生まれ変わった。"
	},
	attacks: [
		{
			name: {
				ja: "やみあんない"
			},
			effect: {
				ja: "自分のトラッシュからたねポケモンを1枚選び、ベンチに出す。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "タネばくだん"
			},
			cost: [
				"Grass",
				"Colorless"
			],
			damage: 30
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	retreat: 1,
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
