# Step1

| コマンド | 短縮系         | 内容                                 |
| :------- | :------------- | :----------------------------------- |
| rails s  | rails server   | サーバの構築を行う                   |
| rails c  | rails console  | サーバーコンソールを起動する         |
| rails g  | rails generate | 各種ファイルの生成をおこなう         |
| rails t  | rails test     | テストを行う                         |
| bundle   | bundle install | 各種バンドルのインストールを実施する |

## 静的ページの生成を行う

`$ rails generate controller StaticPages home help`

内訳： controllerを通して、StaticPagesを作成する。 中のURLは`home`と`help`があるよ的な

url -> `htpp://{hostname}/static_pages/help` パスカルケースはスネークケースへと変換されるっぽい。

あと基本的にRailsはスネークケースで記述を行う。

## 削除したい時は

`$ rails destroy  controller StaticPages home help`

上記の生成と位置的にも逆なコマンド