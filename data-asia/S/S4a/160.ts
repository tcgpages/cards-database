import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "厲害傷藥",
		ja: "すごいきずぐすり"
	},

	illustrator: "Ryo Ueda",

	category: "Trainer",

	effect: {
		'zh-tw': "選擇自己的1隻寶可夢，恢復「120」HP。然後，選擇2個那隻寶可夢身上附加的能量，將其丟棄。（無法對身上沒有附加2個能量的寶可夢使用。）",
		ja: "自分のポケモンを1匹選び、HPを「120」回復する。その後、そのポケモンについているエネルギーを2個選び、トラッシュする。（エネルギーが2個ついていないポケモンには使えない。）"
	},

	trainerType: "Item",

	regulationMark: "D",

	rarity: "None"
}

export default card
