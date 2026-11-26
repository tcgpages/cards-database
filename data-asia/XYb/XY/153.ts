import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "うねりの大海"
	},
	illustrator: "Ryo Ueda",
	rarity: "None",
	category: "Trainer",
	trainerType: "Stadium",
	effect: {
		ja: "おたがいのプレイヤーは、自分の番ごとに1回、自分の水ポケモンと雷ポケモン全員のHPを、それぞれ「30」回復してよい。"
	},
	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
			foil: "mirror"
		}
	]
}

export default card
