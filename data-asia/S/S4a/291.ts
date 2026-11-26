import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ジュラルドン"
	},
	illustrator: "Souichirou Gunjima",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 130,
	types: [
		"Metal"
	],
	stage: "Basic",
	dexId: [
		884
	],
	description: {
		ja: "磨きあげた 金属の ような 体は 軽いうえに 硬いが 錆びやすいのが 欠点なのだ。"
	},
	attacks: [
		{
			name: {
				ja: "メタルシャープナー"
			},
			effect: {
				ja: "自分のトラッシュから鋼エネルギーを1枚選び、自分のポケモンにつける。"
			},
			cost: [
				"Colorless"
			],
			damage: 30
		},
		{
			name: {
				ja: "パワービーム"
			},
			cost: [
				"Metal",
				"Metal",
				"Colorless"
			],
			damage: 110
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		}
	],
	retreat: 2,
	regulationMark: "D",
	variants: [
		{
			type: "holo",
			languages: [
				"ja"
			]
		}
	]
}

export default card
