import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "クロバット"
	},
	variants: [{ type: "holo" }],
	rarity: "Promo",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 130,
	types: [
		"Psychic"
	],
	stage: "Stage2",
	dexId: [
		169
	],
	description: {
		ja: "４枚に 増えた 羽を 使い さらに 速く 静かに 飛んで 獲物に 気づかれず 忍びよる。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "よるのめ"
			},
			effect: {
				ja: "自分の山札を1枚引く。この特性は、自分の番に1回使える。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "げきどくのキバ"
			},
			effect: {
				ja: "相手のバトルポケモンをどくにする。ポケモンチェックのとき、このどくでのせるダメカンの数は4個になる。"
			},
			cost: [
				"Psychic",
				"Colorless",
				"Colorless"
			],
			damage: 40
		}
	],
	evolveFrom: {
		ja: "ゴルバット"
	},
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		}
	],
	retreat: 0
}

export default card
