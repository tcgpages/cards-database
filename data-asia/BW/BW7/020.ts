import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "マナフィ"
	},
	"illustrator": "Naoki Saito",
	"rarity": "Rare",
	"category": "Pokemon",
	"dexId": [
		490
	],
	"hp": 70,
	"types": [
		"Water"
	],
	"stage": "Basic",
	"description": {
		"ja": "生まれたときから 備わっている 不思議な 力を 使うと どんな ポケモンとも 心が 通い合う。"
	},
	"abilities": [
		{
			"type": "Ability",
			"name": {
				"ja": "さいごのねがい"
			},
			"effect": {
				"ja": "このポケモンが、相手のポケモンからワザのダメージを受けてきぜつしたとき、自分の山札から好きなカードを1枚選び、手札に加える。そして山札を切る。"
			}
		}
	],
	"attacks": [
		{
			"name": {
				"ja": "かいゆう"
			},
			"effect": {
				"ja": "コインを3回投げ、オモテの数ぶん、自分のトラッシュから水エネルギーを選び、ベンチポケモンに好きなようにつける。"
			},
			"cost": [
				"Water"
			]
		}
	],
	"weaknesses": [
		{
			"type": "Lightning",
			"value": "×2"
		}
	],
	"retreat": 1,
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
