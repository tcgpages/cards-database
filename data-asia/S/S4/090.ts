import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "空拍洛托姆",
		ja: "ドローンロトム"
	},

	illustrator: "5ban Graphics",

	category: "Trainer",

	effect: {
		'zh-tw': "查看對手的手牌。然後，查看對手的牌庫上方1張卡，回復原樣。",
		ja: "相手の手札を見る。その後、相手の山札を上から1枚見て、もとにもどす。"
	},

	trainerType: "Item",

	regulationMark: "D",

	rarity: "Uncommon",

	variants: [
		{
			type: "normal",
			languages: [
				"ja"
			]
		}
	]
}

export default card
