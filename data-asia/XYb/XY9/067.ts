import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "オドシシ"
	},
	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: [
		"Colorless"
	],
	stage: "Basic",
	dexId: [
		234
	],
	description: {
		ja: "ツノの 曲がり具合が まわりの 空気の 流れを 微妙に 変え 不思議な 空間を 作り出す。"
	},
	attacks: [
		{
			name: {
				ja: "つのでまどわす"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをこんらんにする。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "ビッグチャージ"
			},
			effect: {
				ja: "自分のベンチにM進化ポケモンがいるなら、50ダメージを追加。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: "30+"
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 1,
	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card
