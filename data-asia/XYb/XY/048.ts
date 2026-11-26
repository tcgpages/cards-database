import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ギラティナ"
	},
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 130,
	types: [
		"Psychic"
	],
	stage: "Basic",
	dexId: [
		487
	],
	description: {
		ja: "暴れ者 ゆえ 追い出されたが 破れた世界と 言われる 場所で 静かに 元の世界を 見ていた。"
	},
	abilities: [
		{
			name: {
				ja: "ひかりをのみこむ"
			},
			effect: {
				ja: "このポケモンがいるかぎり、おたがいの場のBREAK進化ポケモンの特性は、すべてなくなる(引きついだ特性も含む)。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "シャドークロー"
			},
			effect: {
				ja: "相手の手札からオモテを見ないで1枚選び、トラッシュする。"
			},
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
				"Colorless"
			],
			damage: 110
		}
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		}
	],
	retreat: 2,
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
