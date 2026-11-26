import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ゾロアーク"
	},
	illustrator: "kawayoo",
	rarity: "None",
	category: "Pokemon",
	hp: 100,
	types: [
		"Darkness"
	],
	evolveFrom: {
		ja: "ゾロア"
	},
	stage: "Stage1",
	dexId: [
		571
	],
	description: {
		ja: "相手を 化かす ことで 群れの 安全を 守ってきた ポケモン。 仲間同士の 結束が 固い。"
	},
	abilities: [
		{
			name: {
				ja: "なりかわる"
			},
			effect: {
				ja: "このポケモンを自分のバトルポケモンと入れ替える。この特性は、このポケモンがベンチにいるなら、自分の番に1回使える。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "マインドジャック"
			},
			effect: {
				ja: "相手のベンチポケモンの数×30ダメージを追加。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: "10+"
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
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
