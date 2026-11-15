import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ペンドラー"
	},
	rarity: "Promo",
	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 140,
	types: [
		"Psychic"
	],
	stage: "Stage2",
	dexId: [
		545
	],
	description: {
		ja: "素早い 動きで 敵を 追い詰め 頭の ツノで 攻撃する。 とどめを 刺すまで 容赦しない。"
	},
	attacks: [
		{
			name: {
				ja: "どくどくのつめ"
			},
			effect: {
				ja: "相手のバトルポケモンをどくにする。ポケモンチェックのとき、このどくでのせるダメカンの数は2個になる。"
			},
			cost: [
				"Psychic",
				"Colorless"
			],
			damage: 30
		},
		{
			name: {
				ja: "あらくれホーン"
			},
			effect: {
				ja: "コインを2回投げ、オモテの数×20ダメージを追加。"
			},
			cost: [
				"Psychic",
				"Colorless",
				"Colorless"
			],
			damage: "50+"
		}
	],
	evolveFrom: {
		ja: "ホイーガ"
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
