import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "エアームド"
	},
	variants: [{ type: "holo" }],
	rarity: "Promo",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 90,
	types: [
		"Metal"
	],
	stage: "Basic",
	dexId: [
		227
	],
	description: {
		ja: "頑丈で 重そうな 鉄の 体だが 薄くて 軽いので 時速３００キロで とべる。"
	},
	attacks: [
		{
			name: {
				ja: "ジェットフレイター"
			},
			effect: {
				ja: "自分の手札から「プラズマ団」のカードを1枚選び、トラッシュする。その後、自分の山札を3枚引く。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "はがねのつばさ"
			},
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-20」される。"
			},
			cost: [
				"Metal",
				"Metal",
				"Colorless"
			],
			damage: 40
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
			type: "Psychic",
			value: "-20"
		}
	],
	retreat: 1
}

export default card
