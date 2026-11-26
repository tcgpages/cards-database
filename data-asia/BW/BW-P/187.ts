import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "エーフィ"
	},
	rarity: "Promo",
	illustrator: "The Pokémon Company Art-team",
	category: "Pokemon",
	hp: 90,
	types: [
		"Psychic"
	],
	stage: "Stage1",
	dexId: [
		196
	],
	description: {
		ja: "全身の 体毛は 敏感。 わずかな 空気の 揺れも 感じて これからの 天気を 当ててしまう。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "たいようのけいじ"
			},
			effect: {
				ja: "このポケモンがいるかぎり、エネルギーがついている自分のポケモン全員は、相手のポケモンが使うワザの効果を受けない。[ダメージは受ける。]"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "サイコリポート"
			},
			effect: {
				ja: "相手の手札を見る。"
			},
			cost: [
				"Psychic",
				"Colorless",
				"Colorless"
			],
			damage: 60
		}
	],
	evolveFrom: {
		ja: "イーブイ"
	},
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 1
}

export default card
