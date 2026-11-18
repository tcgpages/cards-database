import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "メレシー"
	},
	illustrator: "kawayoo",
	rarity: "None",
	category: "Pokemon",
	hp: 90,
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
				ja: "しんぴのまもり"
			},
			effect: {
				ja: "このポケモンは、相手の「ポケモンEX」からワザのダメージや効果を受けない。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "パワージェム"
			},
			cost: [
				"Fighting",
				"Colorless"
			],
			damage: 40
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
