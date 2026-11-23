import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "グレイシア"
	},
	rarity: "Promo",
	illustrator: "The Pokémon Company Art-team",
	category: "Pokemon",
	hp: 90,
	types: [
		"Water"
	],
	stage: "Stage1",
	dexId: [
		471
	],
	description: {
		ja: "体温を コントロールすることで 周囲の 空気を 凍らせて ダイヤモンドダストを 降らせる。"
	},
	attacks: [
		{
			name: {
				ja: "でんこうせっか"
			},
			effect: {
				ja: "コインを1回投げオモテなら、30ダメージを追加。"
			},
			cost: [
				"Colorless"
			],
			damage: "10+"
		},
		{
			name: {
				ja: "エネリフレクト"
			},
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、ベンチポケモンにつけ替える。"
			},
			cost: [
				"Water",
				"Colorless"
			],
			damage: 40
		}
	],
	evolveFrom: {
		ja: "イーブイ"
	},
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		}
	],
	retreat: 1
}

export default card
