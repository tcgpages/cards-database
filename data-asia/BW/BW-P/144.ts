import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "レックウザ"
	},
	rarity: "Promo",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 120,
	types: [
		"Dragon"
	],
	stage: "Basic",
	dexId: [
		384
	],
	description: {
		ja: "通常とは 色の 異なる とても 珍しい ポケモン。 出会うことは かなり 難しい。"
	},
	attacks: [
		{
			name: {
				ja: "りゅうのはどう"
			},
			effect: {
				ja: "自分の山札を上から2枚トラッシュする。"
			},
			cost: [
				"Lightning"
			],
			damage: 40
		},
		{
			name: {
				ja: "ひきさく"
			},
			effect: {
				ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果の計算をしない。"
			},
			cost: [
				"Fire",
				"Lightning",
				"Colorless"
			],
			damage: 90
		}
	],
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		}
	],
	retreat: 3
}

export default card
