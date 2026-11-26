import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "コバルオン"
	},
	variants: [{ type: "reverse" }],
	rarity: "Promo",
	illustrator: "5ban Graphics",
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
		ja: "ポケモンを 守るため 人間と 争った 伝説の ポケモン。 沈着 冷静な 性格。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "せいぎのこころ"
			},
			effect: {
				ja: "このポケモンが使うワザの、[悪]ポケモンへのダメージは「+50」される。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "アイアンヘッド"
			},
			effect: {
				ja: "ウラが出るまでコインを投げ続け、オモテの数×20ダメージを追加。"
			},
			cost: [
				"Metal",
				"Metal",
				"Colorless"
			],
			damage: "60+"
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
	retreat: 3
}

export default card
