import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "メレシー"
	},
	illustrator: "Yuka Morii",
	rarity: "None",
	category: "Pokemon",
	hp: 80,
	types: [
		"Fighting"
	],
	stage: "Basic",
	dexId: [
		703
	],
	description: {
		ja: "生まれてから 数億年の間 地底で 眠っていた。 洞窟を 掘ると たまに 出てくる。"
	},
	abilities: [
		{
			name: {
				ja: "エナジーキーパー"
			},
			effect: {
				ja: "このポケモンがいるかぎり、自分のたねポケモンについている基本エネルギーは、相手のワザ・特性・トレーナーズのトラッシュする効果を受けない。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "ストーンエッジ"
			},
			effect: {
				ja: "コインを1回投げオモテなら、30ダメージを追加。"
			},
			cost: [
				"Fighting",
				"Fighting",
				"Colorless"
			],
			damage: "60+"
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],
	retreat: 1,
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
