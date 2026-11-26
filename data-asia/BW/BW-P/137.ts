import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ウォーグル"
	},
	rarity: "Promo",
	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 100,
	types: [
		"Colorless"
	],
	stage: "Stage1",
	dexId: [
		628
	],
	description: {
		ja: "勇猛果敢な 大空の戦士。 体の 傷が 多いほど 仲間から 尊敬されるという。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "おおきなつばさ"
			},
			effect: {
				ja: "相手は相手自身のバトルポケモンをベンチポケモンと入れ替える。この特性は、このポケモンがバトル場にいるなら、自分の番に1回使える。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "ワイルドエッジ"
			},
			effect: {
				ja: "のぞむなら、20ダメージを追加してよい。その場合、このポケモンにも20ダメージ。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: "60+"
		}
	],
	evolveFrom: {
		ja: "ワシボン"
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
	retreat: 2
}

export default card
