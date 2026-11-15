import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "リバースバレー"
	},
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Trainer",
	trainerType: "Stadium",
	effect: {
		ja: "このカードは、上下の向きを選んでから場に出す。こちら側のプレイヤーの場にいる鋼ポケモンが、相手のポケモンから受けるワザのダメージは「-10」される。 このカードは、上下の向きを選んでから場に出す。こちら側のプレイヤーの場にいる悪ポケモンが使うワザの、相手のバトルポケモンへのダメージは「+10」される。"
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
