import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "コバルオン"
	},
	illustrator: "kirisAki",
	rarity: "None",
	category: "Pokemon",
	hp: 120,
	types: [
		"Metal"
	],
	stage: "Basic",
	dexId: [
		638
	],
	description: {
		ja: "鋼の 心と 体を 持つ。 人が ポケモンを 傷つけたとき 仲間とともに 人を こらしめた。"
	},
	attacks: [
		{
			name: {
				ja: "ファストガード"
			},
			effect: {
				ja: "次の相手の番、このポケモンはたねポケモンからワザのダメージを受けない。次の自分の番、このポケモンは「ファストガード」が使えない。"
			},
			cost: [
				"Metal"
			]
		},
		{
			name: {
				ja: "リベンジバースト"
			},
			effect: {
				ja: "相手がすでにとったサイドの枚数×30ダメージを追加。"
			},
			cost: [
				"Metal",
				"Metal"
			],
			damage: "30+"
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
			type: "Psychic",
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
