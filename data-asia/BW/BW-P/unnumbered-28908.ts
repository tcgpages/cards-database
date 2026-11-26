import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "チャンピオンズフェスティバル"
	},
	variants: [{ type: "normal" }],
	rarity: "Promo",
	illustrator: "Naoki Saito",
	category: "Trainer",
	trainerType: "Stadium",
	effect: {
		ja: "自分の場にポケモンが6匹いるプレイヤーは、自分の番ごとに1回、自分のポケモン全員のHPを、それぞれ「10」回復してよい。 スタジアムは、自分の番に1枚だけ、バトル場の横に出せる。別の名前のスタジアムが場に出たなら、このカードをトラッシュする。"
	}
}

export default card
