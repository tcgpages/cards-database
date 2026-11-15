import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "ハッサム"
	},
	rarity: "Uncommon",
	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 130,
	types: [
		"Metal"
	],
	stage: "Stage1",
	dexId: [
		212
	],
	description: {
		ja: "１度 敵と 判断した ものは 鋼鉄の 硬さを もつ ハサミで 粉々になるまで 殴り続ける。"
	},
	attacks: [
		{
			name: {
				ja: "しゅうげき"
			},
			effect: {
				ja: "この番、このポケモンが「ストライク」から進化していたなら、90ダメージ追加。"
			},
			cost: [
				"Metal"
			],
			damage: "30+"
		},
		{
			name: {
				ja: "ガードクロー"
			},
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。"
			},
			cost: [
				"Metal",
				"Colorless",
				"Colorless"
			],
			damage: 90
		}
	],
	evolveFrom: {
		ja: "ハッサムGX"
	},
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Grass",
			value: "－30"
		}
	],
	retreat: 1,
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
