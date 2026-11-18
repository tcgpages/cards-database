import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ルカリオ"
	},
	rarity: "Promo",
	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 100,
	types: [
		"Fighting"
	],
	stage: "Stage1",
	dexId: [
		448
	],
	description: {
		ja: "あらゆる ものが だす 波動を 読みとることで １キロ先に いる 相手の 気持ちも 理解できる。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ちょっかん"
			},
			effect: {
				ja: "この特性は、このカードを手札から出して進化させたとき、1回使える。自分の山札を2枚引く。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "ファーストパンチ"
			},
			effect: {
				ja: "コインを1回投げオモテなら、30ダメージを追加。"
			},
			cost: [
				"Fighting",
				"Colorless",
				"Colorless"
			],
			damage: "60+"
		}
	],
	evolveFrom: {
		ja: "ルカリオGX"
	},
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 2
}

export default card
