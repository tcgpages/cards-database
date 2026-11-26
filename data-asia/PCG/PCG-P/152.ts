import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "アクーシャのペラップ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Atsuko Nishida",
	hp: 50,
	types: [
		"Colorless",
	],
	stage: "Basic",
	dexId: [
		441,
	],
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				ja: "どんかん",
			},
			effect: {
				ja: "このポケモンが、「進化ポケモン」のワザによって受けるダメージは、「-20」される。",
			},
		},
	],
	attacks: [
		{
			name: {
				ja: "かぎづめ",
			},
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗する。",
			},
			cost: [
				"Colorless",
			],
			damage: 20,
		},
	],
	weaknesses: [
		{
			type: "Lightning",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	variants: [
		{
			type: "normal",
		},
	],
}

export default card
