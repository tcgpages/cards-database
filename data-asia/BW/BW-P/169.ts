import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "あなぬけのヒモ"
	},
	variants: [{ type: "reverse" }],
	rarity: "Promo",
	illustrator: "Ryo Ueda",
	category: "Trainer",
	trainerType: "Item",
	effect: {
		ja: "おたがいのプレイヤーは、それぞれ、自分のバトルポケモンをベンチポケモンと入れ替える。（入れ替えは相手からおこない、ベンチがいないプレイヤーは、入れ替えをしない。）"
	}
}

export default card
