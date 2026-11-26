import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "スカイフィールド"
	},
	illustrator: "Ayaka Yoshida",
	rarity: "None",
	category: "Trainer",
	trainerType: "Stadium",
	effect: {
		ja: "おたがいのプレイヤーがベンチに出せるポケモンの数は、8匹になる。 （このカードがトラッシュされたとき、ベンチに6匹以上いるプレイヤーは、ベンチが5匹になるまでポケモンをトラッシュする。トラッシュするのは、このカードの持ち主から。）"
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
