import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ユキメノコ"
	},
	rarity: "Promo",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 90,
	types: [
		"Water"
	],
	stage: "Stage1",
	dexId: [
		478
	],
	description: {
		ja: "マイナス５０度の 息を 吹きかけ 凍らせた 獲物を 秘密の 場所に 飾っていると 言われる。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "じゅばくのまなざし"
			},
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、相手は手札から特殊エネルギーをポケモンにつけられない。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "ふぶき"
			},
			effect: {
				ja: "相手のベンチポケモン全員にも、それぞれ10ダメージ。［ベンチへのダメージは弱点・抵抗力の計算をしない。］"
			},
			cost: [
				"Water",
				"Colorless"
			],
			damage: 30
		}
	],
	evolveFrom: {
		ja: "ユキメノコex"
	},
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		}
	],
	retreat: 1
}

export default card
