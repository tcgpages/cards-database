import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "イベルタル"
	},
	illustrator: "TOKIYA",
	rarity: "None",
	category: "Pokemon",
	hp: 130,
	types: [
		"Darkness"
	],
	stage: "Basic",
	dexId: [
		717
	],
	description: {
		ja: "寿命が つきるとき あらゆる 生き物の 命を 吸いつくし 繭の 姿に 戻るという。"
	},
	abilities: [
		{
			name: {
				ja: "フライトナイト"
			},
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、おたがいの場の「ポケモンのどうぐ」の効果は、すべてなくなる。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "しっこくのやり"
			},
			effect: {
				ja: "相手のベンチの「ポケモンEX」を1匹選び、そのポケモンにも60ダメージ。［ベンチは弱点・抵抗力の計算をしない。］"
			},
			cost: [
				"Darkness",
				"Colorless",
				"Colorless"
			],
			damage: 60
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
