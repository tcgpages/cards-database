import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "レックウザEX"
	},
	illustrator: "Ryota Murayama",
	rarity: "None",
	category: "Pokemon",
	hp: 170,
	types: [
		"Colorless"
	],
	dexId: [
		384
	],
	stage: "Basic",
	suffix: "EX",
	attacks: [
		{
			name: {
				ja: "ライジングバーン"
			},
			effect: {
				ja: "相手のバトルポケモンが「ポケモンEX」なら、50ダメージを追加。"
			},
			cost: [
				"Colorless"
			],
			damage: "10+"
		},
		{
			name: {
				ja: "りゅうのはどう"
			},
			effect: {
				ja: "自分の山札を上から3枚トラッシュする。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: 100
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		}
	],
	retreat: 2,
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
