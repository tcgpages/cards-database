import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "シンボラー"
	},
	rarity: "Uncommon",
	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 110,
	types: [
		"Psychic"
	],
	stage: "Basic",
	dexId: [
		561
	],
	description: {
		ja: "サイコパワーで 空を 飛ぶ。 古代都市の 守り神 とも その遣いとも いわれている。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "はんげき"
			},
			effect: {
				ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを3個のせる。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "サイコダメージ"
			},
			effect: {
				ja: "相手のバトルポケモンにのっているダメカンの数×10ダメージ追加。"
			},
			cost: [
				"Psychic",
				"Colorless"
			],
			damage: "30+"
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "－30"
		}
	],
	retreat: 1,
	regulationMark: "D",
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
