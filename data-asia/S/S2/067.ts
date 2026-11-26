import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "ダストダス"
	},
	rarity: "Uncommon",
	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 120,
	types: [
		"Darkness"
	],
	stage: "Stage1",
	dexId: [
		569
	],
	description: {
		ja: "食った ゴミが 体内で 毒に 変化する。 食う ゴミ しだいで 毒の 主成分も 変わる。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "どくだまり"
			},
			effect: {
				ja: "場にスタジアムが出ているなら、自分の番に1回使える。相手のバトルポケモンをどくにする。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "ヘドロばくだん"
			},
			cost: [
				"Darkness",
				"Colorless",
				"Colorless"
			],
			damage: 80
		}
	],
	evolveFrom: {
		ja: "ヤブクロン"
	},
	weaknesses: [
		{
			type: "Fighting",
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
