import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ポリゴンZ"
	},
	variants: [{ type: "holo" }],
	rarity: "Promo",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 130,
	types: [
		"Colorless"
	],
	stage: "Stage2",
	dexId: [
		474
	],
	description: {
		ja: "異次元でも 活躍 できるよう プログラムを 修正 したが ねらい通りには いかなかった。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "プラズマトランス"
			},
			effect: {
				ja: "自分のポケモンについている「プラズマエネルギー」を1個選び、自分の別のポケモンにつけ替える。この特性は、自分の番に何回でも使える。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "トライアタック"
			},
			effect: {
				ja: "コインを3回投げ、オモテの数×50ダメージ。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: "50×"
		}
	],
	evolveFrom: {
		ja: "ポリゴン２"
	},
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 1
}

export default card
