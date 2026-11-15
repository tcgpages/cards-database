import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "ミカルゲ"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		442
	],
	hp: 80,
	types: [
		"Darkness"
	],
	stage: "Basic",
	description: {
		ja: "いつも 悪さばかり していたら 不思議な 術で 本体を 要石に 縛りつけられた。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ふういんのさけび"
			},
			effect: {
				ja: "このポケモンがいるかぎり、おたがいのプレイヤーは、手札から「ACE SPEC」のカードを出して使えない。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "オカルトミラー"
			},
			effect: {
				ja: "自分の手札をすべて山札にもどし、山札を切る。その後、相手の手札の枚数ぶん、自分の山札を引く。"
			},
			cost: [
				"Colorless"
			]
		}
	],
	retreat: 1,
	variants: [
		{
			type: "normal",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "normal"
		},
		{
			type: "reverse",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "reverse"
		}
	]
}

export default card
