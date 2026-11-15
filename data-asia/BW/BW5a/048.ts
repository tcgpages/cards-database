import { Card } from "../../../interfaces"
import Set from "../BW5a"

const card: Card = {
	set: Set,

	"name": {
		"ja": "退化スプレー"
	},
	"illustrator": "Ryo Ueda",
	"rarity": "Uncommon",
	"category": "Trainer",
	"trainerType": "Item",
	"effect": {
		"ja": "進化している自分のポケモンを1匹選び、そのポケモンの上から「進化カード」を1枚はがして退化させる。はがしたカードは、手札にもどす。[退化したポケモンは、その番に進化できない。]"
	},
	"variants": [
		{
			"type": "normal",
			"stamp": [
				"1st-edition"
			]
		},
		{
			"type": "normal"
		}
	]
}

export default card
