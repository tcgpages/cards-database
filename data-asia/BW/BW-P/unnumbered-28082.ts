import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ビクトリーカップ"
	},
	variants: [{ type: "holo", stamp: ["1st-place"] }],
	rarity: "Promo",
	illustrator: "5ban Graphics",
	category: "Trainer",
	trainerType: "Item",
	effect: {
		ja: "コインを1回投げオモテなら、自分の山札からポケモンを1枚選び、相手に見せてから、手札に加える。そして山札を切る。"
	}
}

export default card
