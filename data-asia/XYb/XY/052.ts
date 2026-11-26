import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ランプラー"
	},
	illustrator: "kawayoo",
	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: [
		"Psychic"
	],
	evolveFrom: {
		ja: "ヒトモシ"
	},
	stage: "Stage1",
	dexId: [
		608
	],
	description: {
		ja: "魂を 吸いとり 火を灯す。 人が 死ぬのを 待つため 病院を うろつくようになった。"
	},
	attacks: [
		{
			name: {
				ja: "のろいのしずく"
			},
			effect: {
				ja: "ダメカン3個を、相手のポケモンに好きなようにのせる。"
			},
			cost: [
				"Psychic"
			]
		},
		{
			name: {
				ja: "よるのこうしん"
			},
			effect: {
				ja: "自分のトラッシュにあるワザ「よるのこうしん」を持つポケモンの枚数×20ダメージ。"
			},
			cost: [
				"Psychic",
				"Colorless",
				"Colorless"
			],
			damage: "20×"
		}
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		}
	],
	retreat: 2,
	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
			foil: "mirror"
		}
	]
}

export default card
