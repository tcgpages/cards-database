import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ドレディア"
	},
	rarity: "Promo",
	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 90,
	types: [
		"Grass"
	],
	stage: "Stage1",
	dexId: [
		549
	],
	description: {
		ja: "美しい 花を 咲かせるのは ベテラントレーナーでも 難しい。 セレブに 人気の ポケモン。"
	},
	attacks: [
		{
			name: {
				ja: "げんわくアロマ"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをどくとマヒにする。ウラなら、相手のバトルポケモンをこんらんにする。"
			},
			cost: [
				"Grass"
			],
			damage: 20
		},
		{
			name: {
				ja: "いあいぎり"
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
		ja: "ヒスイ ドレディア"
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
