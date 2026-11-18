import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ホワイトキュレム"
	},
	illustrator: "kawayoo",
	rarity: "None",
	category: "Pokemon",
	hp: 130,
	types: [
		"Water"
	],
	stage: "Basic",
	dexId: [
		646
	],
	description: {
		ja: "強力な 冷凍エネルギーを 体内で 作り出すが 漏れ出した 冷気で 体が 凍っている。"
	},
	attacks: [
		{
			name: {
				ja: "もえるつらら"
			},
			effect: {
				ja: "このポケモンに炎エネルギーがついているなら、相手のベンチポケモンを2匹選び、そのポケモンにも、それぞれ20ダメージ。［ベンチは弱点・抵抗力の計算をしない。］"
			},
			cost: [
				"Water",
				"Colorless"
			],
			damage: 40
		},
		{
			name: {
				ja: "ブリザードバーン"
			},
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。"
			},
			cost: [
				"Water",
				"Water",
				"Colorless"
			],
			damage: 130
		}
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
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
