import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "チョロネコ"
	},
	rarity: "Promo",
	illustrator: "MAHOU",
	category: "Pokemon",
	hp: 50,
	types: [
		"Darkness"
	],
	stage: "Basic",
	dexId: [
		509
	],
	description: {
		ja: "かわいらしい 仕草で 油断させて その すきに 持ち物を 奪う。 怒ると ツメを 立てて 反撃。"
	},
	attacks: [
		{
			name: {
				ja: "しっぽでまどわす"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをこんらんにする。"
			},
			cost: [
				"Darkness"
			]
		},
		{
			name: {
				ja: "みだれひっかき"
			},
			effect: {
				ja: "コインを3回投げ、オモテの数×10ダメージ。"
			},
			cost: [
				"Darkness",
				"Colorless"
			],
			damage: "10×"
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		}
	],
	retreat: 1
}

export default card
