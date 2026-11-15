import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "カイリキー"
	},
	rarity: "Promo",
	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 140,
	types: [
		"Fighting"
	],
	stage: "Stage2",
	dexId: [
		68
	],
	description: {
		ja: "４本の 力強い 腕は 目にも 止まらぬ 速さで パンチや チョップを たたき込む。"
	},
	attacks: [
		{
			name: {
				ja: "はたきおとす"
			},
			effect: {
				ja: "相手の手札からオモテを見ないで1枚選び、トラッシュする。"
			},
			cost: [
				"Fighting",
				"Colorless",
				"Colorless"
			],
			damage: 60
		},
		{
			name: {
				ja: "きょうかラリアット"
			},
			effect: {
				ja: "このポケモンに「ポケモンのどうぐ」がついているなら、40ダメージを追加。"
			},
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless"
			],
			damage: "80+"
		}
	],
	evolveFrom: {
		ja: "カイリキーGX"
	},
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 3
}

export default card
