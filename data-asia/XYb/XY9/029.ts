import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "ゲッコウガ"
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: [
		"Water"
	],
	stage: "Stage2",
	dexId: [
		658
	],
	description: {
		ja: "忍者のように 神出鬼没。 素早い 動きで 翻弄しつつ 水の 手裏剣で 切り裂く。"
	},
	attacks: [
		{
			name: {
				ja: "かげぬい"
			},
			effect: {
				ja: "次の相手の番の終わりまで、相手の場・手札・トラッシュのカードに書かれている特性は、すべてなくなる。（新しく場に出したカードもふくむ。）"
			},
			cost: [
				"Colorless"
			],
			damage: 40
		},
		{
			name: {
				ja: "げっこうぎり"
			},
			effect: {
				ja: "のぞむなら、このポケモンについている水エネルギーを1個選び、手札にもどしてよい。その場合、20ダメージを追加。"
			},
			cost: [
				"Water"
			],
			damage: "60+"
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],
	retreat: 0,
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
