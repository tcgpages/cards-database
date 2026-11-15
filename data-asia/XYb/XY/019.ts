import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "オクタン"
	},
	illustrator: "Kyoko Umemoto",
	rarity: "None",
	category: "Pokemon",
	hp: 90,
	types: [
		"Water"
	],
	stage: "Stage1",
	dexId: [
		224
	],
	description: {
		ja: "頑丈な 石頭。 吸盤つきの 脚を 絡ませ ひたすらに 頭で 打ちすえる。"
	},
	abilities: [
		{
			name: {
				ja: "アビスハンド"
			},
			effect: {
				ja: "自分の手札が5枚になるように、山札を引く。この特性は、自分の番に1回使える。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "だきつく"
			},
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。"
			},
			cost: [
				"Water",
				"Water",
				"Colorless"
			],
			damage: 40
		}
	],
	weaknesses: [
		{
			type: "Grass",
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
