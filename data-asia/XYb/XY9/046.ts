import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "オーロット"
	},
	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: [
		"Psychic"
	],
	stage: "Stage1",
	dexId: [
		709
	],
	description: {
		ja: "根っこを 神経の かわりにして 森の 木を 操る。 体に 住みついた ポケモンには 親切。"
	},
	abilities: [
		{
			name: {
				ja: "ふあんのタネ"
			},
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、相手のたねポケモンが使うワザに必要なエネルギーは、無エネルギー1個ぶん多くなる。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "エナジープレス"
			},
			effect: {
				ja: "相手のバトルポケモンについているエネルギーの数×10ダメージを追加。"
			},
			cost: [
				"Psychic",
				"Colorless",
				"Colorless"
			],
			damage: "70+"
		}
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		}
	],
	retreat: 3,
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
