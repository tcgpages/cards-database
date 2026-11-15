import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "リーフィア"
	},
	rarity: "Promo",
	illustrator: "The Pokémon Company Art-team",
	category: "Pokemon",
	hp: 90,
	types: [
		"Grass"
	],
	stage: "Stage1",
	dexId: [
		470
	],
	description: {
		ja: "基本的に 争わない。 細胞が 植物に 近くなり 体内で 光合成が できる。"
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
				ja: "エネアシスト"
			},
			effect: {
				ja: "自分のトラッシュから基本エネルギーを1枚選び、ベンチポケモンにつける。"
			},
			cost: [
				"Grass",
				"Colorless"
			],
			damage: 40
		}
	],
	evolveFrom: {
		ja: "ブラッキーex"
	},
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		}
	],
	retreat: 1
}

export default card
