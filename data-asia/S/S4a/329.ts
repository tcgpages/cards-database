import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ザシアンV"
	},
	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 220,
	types: [
		"Metal"
	],
	dexId: [
		888
	],
	stage: "Basic",
	suffix: "V",
	abilities: [
		{
			name: {
				ja: "ふとうのつるぎ"
			},
			effect: {
				ja: "自分の番に1回使えて、使ったなら、自分の番は終わる。自分の山札を上から3枚見て、その中から鋼エネルギーを好きなだけ選び、このポケモンにつける。残りのカードは手札に加える。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "ブレイブキャリバー"
			},
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。"
			},
			cost: [
				"Metal",
				"Metal",
				"Metal"
			],
			damage: 230
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
			type: "Grass",
			value: "-30"
		}
	],
	retreat: 2,
	regulationMark: "D",
	variants: [
		{
			type: "holo",
			languages: [
				"ja"
			]
		}
	]
}

export default card
