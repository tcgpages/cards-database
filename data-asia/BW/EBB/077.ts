import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "レックウザ"
	},
	illustrator: "Shin Nagasawa",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		384
	],
	hp: 120,
	types: [
		"Dragon"
	],
	stage: "Basic",
	description: {
		ja: "雲より はるか上の オゾン層に 生息しているため 地上から 姿を 見ることは できない。"
	},
	attacks: [
		{
			name: {
				ja: "りゅうのはどう"
			},
			effect: {
				ja: "自分の山札を上から2枚トラッシュする。"
			},
			cost: [
				"Lightning"
			],
			damage: 40
		},
		{
			name: {
				ja: "ひきさく"
			},
			effect: {
				ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果の計算をしない。"
			},
			cost: [
				"Fire",
				"Lightning",
				"Colorless"
			],
			damage: 90
		}
	],
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		}
	],
	retreat: 3,
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
