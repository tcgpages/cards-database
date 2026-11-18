import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "ゴロンダ"
	},
	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: [
		"Darkness"
	],
	stage: "Stage1",
	dexId: [
		675
	],
	description: {
		ja: "攻撃を 受けても ひるまずに 突進して 電柱を へし折る パワーの 腕力で ぶちのめす。"
	},
	attacks: [
		{
			name: {
				ja: "すてゼリフ"
			},
			effect: {
				ja: "このポケモンをベンチポケモンと入れ替える。次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-60」される。"
			},
			cost: [
				"Darkness"
			],
			damage: 10
		},
		{
			name: {
				ja: "バスタースイング"
			},
			effect: {
				ja: "このワザのダメージは抵抗力の計算をしない。"
			},
			cost: [
				"Darkness",
				"Darkness",
				"Darkness"
			],
			damage: 90
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
	retreat: 3,
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
