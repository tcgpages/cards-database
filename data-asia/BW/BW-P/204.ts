import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ニャース"
	},
	rarity: "Promo",
	illustrator: "Sumiyoshi Kizuki",
	category: "Pokemon",
	hp: 60,
	types: [
		"Colorless"
	],
	stage: "Basic",
	dexId: [
		52
	],
	description: {
		ja: "夜中に 行動する 習性。 キラキラ 光るものを 見つけると 負けないくらい ひとみが 輝く。"
	},
	attacks: [
		{
			name: {
				ja: "ひとやすみ"
			},
			effect: {
				ja: "このポケモンのHPを「20」回復する。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "とびつく"
			},
			effect: {
				ja: "コインを1回投げオモテなら、10ダメージを追加。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: "20+"
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 1
}

export default card
