import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ツンベアー"
	},
	rarity: "Promo",
	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 130,
	types: [
		"Water"
	],
	stage: "Stage1",
	dexId: [
		614
	],
	description: {
		ja: "吐く 息を 凍らせて 氷の キバや ツメを 作り 戦う。 北の 寒い 土地で 暮らす。"
	},
	attacks: [
		{
			name: {
				ja: "こごえるかぜ"
			},
			effect: {
				ja: "相手のバトルポケモンをねむりにする。"
			},
			cost: [
				"Water"
			],
			damage: 30
		},
		{
			name: {
				ja: "ばかぢから"
			},
			effect: {
				ja: "のぞむなら、20ダメージを追加してよい。その場合、このポケモンにも20ダメージ。"
			},
			cost: [
				"Water",
				"Water",
				"Colorless"
			],
			damage: "60+"
		}
	],
	evolveFrom: {
		ja: "クマシュン"
	},
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		}
	],
	retreat: 2
}

export default card
