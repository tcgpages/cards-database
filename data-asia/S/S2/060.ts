import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "セキタンザン"
	},
	rarity: "Rare",
	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 160,
	types: [
		"Fighting"
	],
	stage: "Stage2",
	dexId: [
		839
	],
	description: {
		ja: "普段は 穏やかだが 人間が 鉱山を 荒らすと 怒りくるい １５００度の 炎で 焼きつくす。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "タールジェネレート"
			},
			effect: {
				ja: "自分の番に1回使える。自分のトラッシュから[炎]エネルギーと[闘]エネルギーをそれぞれ1枚まで選び、自分のポケモンに好きなようにつける。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "やきなだれ"
			},
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: 130
		}
	],
	evolveFrom: {
		ja: "トロッゴン"
	},
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],
	retreat: 4,
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
