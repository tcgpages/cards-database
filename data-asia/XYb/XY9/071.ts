import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "時のパズル"
	},
	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Item",
	effect: {
		ja: "「時のパズル」は同時に2枚まで使え、使った枚数によって効果が変わる。 ◆1枚使ったなら、自分の山札を上から3枚見て、好きな順番に入れ替えて、山札の上にもどす。 ◆2枚使ったなら、自分のトラッシュから好きなカードを2枚選び、相手に見せてから、手札に加える。（この効果は、2枚で1回はたらく。）"
	},
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
