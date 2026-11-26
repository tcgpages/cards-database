import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ヤナッキー"
	},
	rarity: "Promo",
	illustrator: "match",
	category: "Pokemon",
	hp: 90,
	types: [
		"Grass"
	],
	stage: "Stage1",
	dexId: [
		512
	],
	description: {
		ja: "気性が 激しく トゲの ついた しっぽを 振り回して 戦う。 頭の 葉っぱは とても 苦い。"
	},
	attacks: [
		{
			name: {
				ja: "ほのおのちから"
			},
			effect: {
				ja: "このポケモンに[炎]エネルギーがついているなら、相手のバトルポケモンをやけどにする。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 30
		},
		{
			name: {
				ja: "タネばくだん"
			},
			cost: [
				"Grass",
				"Colorless",
				"Colorless"
			],
			damage: 60
		}
	],
	evolveFrom: {
		ja: "ヤナップ"
	},
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
	retreat: 2
}

export default card
