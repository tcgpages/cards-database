import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "メタグロス"
	},
	variants: [{ type: "holo" }],
	rarity: "Promo",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 140,
	types: [
		"Psychic"
	],
	stage: "Stage2",
	dexId: [
		376
	],
	description: {
		ja: "４つの 脳みそが 連なり スーパーコンピューターより すごい 計算で 相手を 分析する。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "プラズマサーチ"
			},
			effect: {
				ja: "自分の山札から「プラズマ団」のカードを1枚選び、相手に見せてから、手札に加える。そして山札を切る。この特性は、自分の番に1回使える。使ったなら、この番に同じ名前の特性は使えない。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "サイコトリップ"
			},
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。"
			},
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: 60
		}
	],
	evolveFrom: {
		ja: "メタング"
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
