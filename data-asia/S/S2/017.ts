import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "ランプラー"
	},
	rarity: "Common",
	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 80,
	types: [
		"Fire"
	],
	stage: "Stage1",
	dexId: [
		608
	],
	description: {
		ja: "誰かが 死ぬ 直前に 現れる ことから 死神の使い として 恐れられている。"
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
				ja: "やきなおす"
			},
			effect: {
				ja: "自分のトラッシュから[炎]エネルギーを1枚選び、自分のポケモンにつける。"
			},
			cost: [
				"Fire"
			],
			damage: 20
		}
	],
	evolveFrom: {
		ja: "ヒトモシ"
	},
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],
	retreat: 1,
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
