import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "タッチ交換！",
	},
	rarity: "Promo",
	category: "Trainer",
	illustrator: "Sumiyoshi Kizuki",
	trainerType: "Item",
	effect: {
		ja: "おたがいのバトルプレイヤーは、それぞれ、自分のパートナーと手札をすべて交換する。（バトルプレイヤーは、かわらない。）\nタッグバトル専用カード",
	},
	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: [
				"battle-road",
			],
		},
	],
}

export default card
