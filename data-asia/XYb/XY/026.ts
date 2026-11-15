import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ゲッコウガ"
	},
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 130,
	types: [
		"Water"
	],
	stage: "Stage2",
	dexId: [
		658
	],
	description: {
		ja: "水を 圧縮して 手裏剣を 作り出す。 高速回転させて 飛ばすと 金属も 真っ二つ。"
	},
	abilities: [
		{
			name: {
				ja: "みずしゅりけん"
			},
			effect: {
				ja: "自分の手札から水エネルギーを1枚選び、トラッシュする。その後、相手のポケモンを1匹選び、ダメカンを3個のせる。この特性は、自分の番に1回使える。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "かすみぎり"
			},
			effect: {
				ja: "このワザのダメージは、弱点・抵抗力と、相手のバトルポケモンにかかっている効果の計算をしない。"
			},
			cost: [
				"Water"
			],
			damage: 50
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],
	retreat: 1,
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
