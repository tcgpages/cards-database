import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "ビリジオン"
	},
	illustrator: "Atsuko Nishida",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		640
	],
	hp: 110,
	types: [
		"Grass"
	],
	stage: "Basic",
	description: {
		ja: "頭の ツノは 鋭い 刃。 旋風のような 動きで 敵を ほんろうして 素早く 切りつける。"
	},
	attacks: [
		{
			name: {
				ja: "ダブルドロー"
			},
			effect: {
				ja: "自分の山札を2枚引く。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "リーフスラッガー"
			},
			effect: {
				ja: "次の自分の番、このポケモンが使う「リーフスラッガー」のダメージは「+40」される。"
			},
			cost: [
				"Grass",
				"Colorless"
			],
			damage: 40
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Water",
			value: "－20"
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
