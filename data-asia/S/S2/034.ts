import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "ルクシオ"
	},
	rarity: "Common",
	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 90,
	types: [
		"Lightning"
	],
	stage: "Stage1",
	dexId: [
		404
	],
	description: {
		ja: "鋭い ツメの 先には 強い 電気が 流れており ほんの少し かするだけで 相手を気絶させる。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "トップエントリー"
			},
			effect: {
				ja: "自分の番のはじめに、山札からこのカードを引いたとき、自分のベンチに空きがあるなら、手札に加える前に1回使える。このカードを自分のベンチに出す。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "エレキック"
			},
			cost: [
				"Lightning"
			],
			damage: 30
		}
	],
	evolveFrom: {
		ja: "コリンク"
	},
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 1,
	regulationMark: "D",
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
