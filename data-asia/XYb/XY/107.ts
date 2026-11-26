import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ホルビー"
	},
	illustrator: "Hitoshi Ariga",
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: [
		"Colorless"
	],
	dexId: [
		659
	],
	stage: "Basic",
	abilities: [
		{
			name: {
				ja: "Ω（オメガ）連打"
			},
			effect: {
				ja: "このポケモンは、ワザを2回連続で使える。（1回目で相手のバトルポケモンがきぜつしたなら、次のポケモンが出た後、2回目を使う。）"
			},
			type: "Ancient Trait"
		}
	],
	attacks: [
		{
			name: {
				ja: "ほるほる"
			},
			effect: {
				ja: "相手の山札を上から1枚トラッシュする。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "たがやす"
			},
			effect: {
				ja: "自分のトラッシュから好きなカードを1枚選び、相手に見せてから、山札にもどす。そして山札を切る。"
			},
			cost: [
				"Colorless"
			]
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 2,
	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
			foil: "mirror"
		}
	]
}

export default card
