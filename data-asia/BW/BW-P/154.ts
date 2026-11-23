import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ビリジオン"
	},
	variants: [{ type: "reverse" }],
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
				ja: "リーフブレード"
			},
			effect: {
				ja: "コインを1回投げオモテなら、30ダメージを追加。"
			},
			cost: [
				"Grass",
				"Colorless",
				"Colorless"
			],
			damage: "50+"
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
