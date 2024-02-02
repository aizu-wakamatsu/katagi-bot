# katagi-bot
なんでも上手のカタギさん

## 概要

Slackのチャットで`/katagi #チャンネル [発言]`の形式でコマンドを打つとカタギさんが自分の代わりに発言してくれるbot

入力中表示で中の人がバレるのを防ぐため、宛先チャンネルと違う場所でコマンドをたたく事を強く推奨します。


## 設定メモ

### [GAS] スクリプトプロパティの設定

- `TOKEN_SLACK_OAUTHS`にSlack側の`Bot User OAuth Token`を入れる
- `TOKEN_SLACKS`にSlack側の`Verification Token`を入れる

#### Slack側設定画面におけるトークンの場所

- `Bot User OAuth Token` : `Features/OAuth & Permissions` > `OAuth Tokens for Your Workspace`
- `Verification Token` : `Settings/Basic Information` > `App Credentials`

### [Slack] スコープの設定

Slack側設定画面の`Features/OAuth & Permissions` > `Scopes` > `Bot Token Scopes`で以下を有効化する
- `chat:write`
- `chat:write.customize`
- `chat:write.public`
- `commands`

### [Slack] その他

gas/slack/manifest.ymlを参照
