import { Card } from "../../../interfaces";
import Set from "../DPt-P";

const card: Card = {
	set: Set,
	name: { ja: "勝利のメダル" },
	illustrator: "Yusuke Ishikawa",
	category: "Trainer",
	trainerType: "Item",
	effect: { ja: "コインを2回投げる。\nオモテが1回なら、自分の山札からカードを1枚引く。\nすべてオモテなら、自分の山札の好きなカードを1枚、手札に加える。その後、山札を切る。" },
	variants: [{ type: "holo" }],
	rarity: "Promo",
};

export default card;
