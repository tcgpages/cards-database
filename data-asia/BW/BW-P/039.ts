import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ビリジオン"
	},
	rarity: "Promo",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 100,
	types: [
		"Grass"
	],
	stage: "Basic",
	dexId: [
		640
	],
	description: {
		ja: "仲間を 守るため 人間に 戦いを 挑んだ ポケモン。 伝説で 語り継がれている。"
	},
	attacks: [
		{
			name: {
				ja: "ギガドレイン"
			},
			effect: {
				ja: "相手のバトルポケモンに与えたダメージぶん、このポケモンのHPを回復する。"
			},
			cost: [
				"Grass",
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
				"Grass",
				"Grass",
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
			type: "Water",
			value: "-20"
		}
	],
	retreat: 1
}

export default card
