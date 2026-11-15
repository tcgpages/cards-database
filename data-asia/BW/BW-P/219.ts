import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ゲノセクト"
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
		649
	],
	description: {
		ja: "３億年前に いた ポケモン。 プラズマ団に 改造 され 背中に 砲台を つけられた。"
	},
	attacks: [
		{
			name: {
				ja: "シグナルビーム"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをこんらんにする。"
			},
			cost: [
				"Grass",
				"Colorless"
			],
			damage: 30
		},
		{
			name: {
				ja: "オーバースマッシュ"
			},
			effect: {
				ja: "次の自分の番、このポケモンが使う「オーバースマッシュ」のダメージは「+60」される。"
			},
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless"
			],
			damage: 60
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	retreat: 2
}

export default card
