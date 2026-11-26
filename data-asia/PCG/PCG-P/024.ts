import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ポケモンカード研究所",
	},
	rarity: "Promo",
	category: "Trainer",
	illustrator: "Katsura Tabata",
	trainerType: "Stadium",
	effect: {
		ja: "おたがいのプレイヤーは、それぞれ、自分の番ごとに1回、自分の手札から「ポケモンのカード」を1枚選び出してよい。その場合、そのカードの名前を相手プレイヤーに伝えてから、そのカードをウラにして、おく。その後、相手プレイヤーは、そのカードが持っている「ワザの名前」を1つ答える。ウラにしたカードをオモテにして、正解なら、相手プレイヤーは、相手の山札からカードを1枚ひく。正解でないなら、自分は、自分の山札からカードを1枚ひく。その後、おいたカードを、自分の手札にもどす。",
	},
	variants: [
		{
			type: "normal",
		},
	],
}

export default card
