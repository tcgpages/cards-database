import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ランプラー"
	},
	rarity: "Promo",
	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 70,
	types: [
		"Fire"
	],
	stage: "Stage1",
	dexId: [
		608
	],
	description: {
		ja: "魂を 吸いとり 火を灯す。 人が 死ぬのを 待つため 病院を うろつくようになった。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "フリーフロート"
			},
			effect: {
				ja: "このポケモンにエネルギーがついていないなら、このポケモンのにげるために必要なエネルギーは、すべてなくなる。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "おにび"
			},
			cost: [
				"Fire",
				"Colorless"
			],
			damage: 20
		}
	],
	evolveFrom: {
		ja: "ヒトモシ"
	},
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],
	retreat: 1
}

export default card
