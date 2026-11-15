import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ランダムレシーバー"
	},
	"illustrator": "5ban Graphics",
	"category": "Trainer",
	"trainerType": "Item",
	"effect": {
		"ja": "自分の山札を上から1枚ずつオモテにして、最初に出た「サポート」を、相手に見せてから手札に加える。その後、オモテにしたカードをすべて山札にもどし、山札を切る。"
	},
	"rarity": "Secret Rare",
	"variants": [
		{
			"type": "holo",
			"stamp": [
				"1st-edition"
			]
		},
		{
			"type": "holo"
		}
	]
}

export default card
