import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "エルフーン"
	},
	rarity: "Promo",
	illustrator: "Mizue",
	category: "Pokemon",
	hp: 80,
	types: [
		"Grass"
	],
	stage: "Stage1",
	dexId: [
		547
	],
	description: {
		ja: "つむじ風に 乗って 現われる。 すきまから 家に 入り込み いたずらを していく ポケモン。"
	},
	attacks: [
		{
			name: {
				ja: "アンコール"
			},
			effect: {
				ja: "相手のバトルポケモンが持っているワザを1つ選ぶ。次の相手の番、このワザを受けた相手のバトルポケモンは、選ばれたワザしか使えない。"
			},
			cost: [
				"Colorless"
			],
			damage: 20
		},
		{
			name: {
				ja: "とんぼがえり"
			},
			effect: {
				ja: "このポケモンをベンチポケモンと入れ替える。"
			},
			cost: [
				"Grass",
				"Grass"
			],
			damage: 40
		}
	],
	evolveFrom: {
		ja: "モンメン"
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
	retreat: 1
}

export default card
