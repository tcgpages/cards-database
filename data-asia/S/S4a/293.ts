import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "チラチーノ"
	},
	illustrator: "kirisAki",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 90,
	types: [
		"Colorless"
	],
	evolveFrom: {
		ja: "チラーミィ"
	},
	stage: "Stage1",
	dexId: [
		573
	],
	description: {
		ja: "塵ひとつ 許せない 潔癖。 体から 染み出る 油を 巣に 塗りつけ コーティングする。"
	},
	abilities: [
		{
			name: {
				ja: "やりくり"
			},
			effect: {
				ja: "自分の番に、自分の手札を1枚トラッシュするなら、1回使える。自分の山札を2枚引く。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "エネアシスト"
			},
			effect: {
				ja: "自分のトラッシュから基本エネルギーを1枚選び、ベンチポケモンにつける。"
			},
			cost: [
				"Colorless"
			],
			damage: 40
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 1,
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
