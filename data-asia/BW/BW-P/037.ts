import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "コバルオン"
	},
	rarity: "Promo",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 110,
	types: [
		"Metal"
	],
	stage: "Basic",
	dexId: [
		638
	],
	description: {
		ja: "ポケモンを 守るため 人間と 争った 伝説の ポケモン。 沈着 冷静な 性格。"
	},
	attacks: [
		{
			name: {
				ja: "メタルホーン"
			},
			effect: {
				ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］"
			},
			cost: [
				"Metal",
				"Colorless"
			],
			damage: 30
		},
		{
			name: {
				ja: "せいなるつるぎ"
			},
			effect: {
				ja: "次の自分の番、このポケモンは「せいなるつるぎ」を使えない。"
			},
			cost: [
				"Metal",
				"Metal",
				"Colorless"
			],
			damage: 100
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
	retreat: 2
}

export default card
