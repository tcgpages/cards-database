import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "ペラップ"
	},
	rarity: "Common",
	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 70,
	types: [
		"Colorless"
	],
	stage: "Basic",
	dexId: [
		441
	],
	description: {
		ja: "人の 言葉を 覚えて 鳴く。 仲間が 一か所に 集まると みんな 同じ 言葉を 覚える。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ラッキーマッチ"
			},
			effect: {
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。コインを1回投げオモテなら、自分のトラッシュからサポートを1枚選び、相手に見せて、手札に加える。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "かっくう"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 30
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "－30"
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
