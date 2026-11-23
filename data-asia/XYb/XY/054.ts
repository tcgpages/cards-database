import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "オーロット"
	},
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 110,
	types: [
		"Psychic"
	],
	evolveFrom: {
		ja: "ボクレー"
	},
	stage: "Stage1",
	dexId: [
		709
	],
	description: {
		ja: "ほかの 木々を 自在に 操る。 森を 荒らす 人間は 死ぬまで 森から 出られないようにするのだ。"
	},
	abilities: [
		{
			name: {
				ja: "もりののろい"
			},
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、相手は手札からグッズを出して使えない。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "ウッドスラム"
			},
			effect: {
				ja: "相手のベンチポケモンを2匹選び、そのポケモンにも、それぞれ20ダメージ。［ベンチは弱点・抵抗力の計算をしない。］"
			},
			cost: [
				"Psychic",
				"Colorless",
				"Colorless"
			],
			damage: 60
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
		},
		{
			type: "reverse",
			foil: "mirror"
		}
	]
}

export default card
