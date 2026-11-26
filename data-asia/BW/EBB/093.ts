import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "アララギパパ"
	},
	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Trainer",
	trainerType: "Supporter",
	effect: {
		ja: "自分の手札からポケモンを1枚選び、名前を相手に伝えてから、ウラにして置く。その後、相手はそのポケモンの「高さ」を答える。そのカードをオモテにして、正解なら、相手は山札を3枚引く。不正解なら、自分は山札を3枚引く。そして置いたカードを手札にもどす。（「高さ」が書かれていないポケモンは選べない。）"
	},
	variants: [
		{
			type: "normal",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "normal"
		},
		{
			type: "reverse",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "reverse"
		}
	]
}

export default card
