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

`$ rails generate model User name:string email:string`

内訳： controllerを通して、StaticPagesを作成する。 中のURLは`home`と`help`があるよ的な

url -> `htpp://{hostname}/static_pages/help` パスカルケースはスネークケースへと変換されるっぽい。

あと基本的にRailsはスネークケースで記述を行う。

## 削除したい時は

`$ rails destroy controller StaticPages home help`

`$ rails destroy model User`

上記の生成と位置的にも逆なコマンド


## テスト開発駆動に関して触れていた記事をまとめる

先に書くケース

- アプリケーションを書くよりも明らかにテストコードの方が短くなる場合(=簡単にかける)のであれば「先に書く」
- セキュリティが重要な課題またはセキュリティ周りのエラーが発生した場合、テストを「先に」書く
- バグを見つけたら、そのバグを再現するテストを「先に」書き、回帰バグを防ぐ体制を整えてから修正に取りかかる
- リファクタリングするときは「先に」テストを書く。特に、エラーを起こしそうなコードや止まってしまいそうなコードを集中的にテストする

後に書くケース

- 動作が固まっていないのであればアプリケーションコードを先に書き、期待する動作を後で記述する。
- すぐにまた変更しそうなコード (HTML構造の細部など) に対するテストは「後で」書く
