import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "カビゴン"
	},
	variants: [{ type: "holo" }],
	rarity: "Promo",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 130,
	types: [
		"Colorless"
	],
	stage: "Basic",
	dexId: [
		143
	],
	description: {
		ja: "満腹になると 指すら 動かすのが 面倒に なるので お腹に 乗っても 大丈夫。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "とおせんぼ"
			},
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、相手のバトルポケモンは、にげられない。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "チームインパクト"
			},
			effect: {
				ja: "自分の場にいる「プラズマ団」のポケモンの数×30ダメージ。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: "30×"
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 4
}

export default card
