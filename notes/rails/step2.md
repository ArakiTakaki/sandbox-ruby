# step2

rakeコマンドを覚えよう

Rails5以前ではRakeコマンドとRailskコマンドに分散していた。

しかしながら以下から紹介するコマンドはRails5以後から結合されており、どちらでも動作は可能となっている

(まぁでもどこもかしこもモダンなわけじゃないと思うので、一応rakeで紹介)

## そもそもrakeって？（飛ばしていいかも）

[rake](https://qiita.com/abcb2/items/9905449ab3fcf5d27ace)

## DB系コマンド

| コマンド名      | 解説                   |
| :-------------- | :--------------------- |
| rake db:create  | データベースを作成する |
| rake db:migrate | 設定を反映させる       |
| rake db:seed    | 情報を搬入する         |

## 実際に使ってみよう

`$ rails g model Message message:string`

`$ rake db:migrate`

ここまででテーブルの作成が完了いたしました。

次にseederを定義していきます。

```ruby
# seed.rv
Message.create([
  {message: "よろしくお願いします。"},
  {message: "Hello world"},
  {message: "Ruby楽しい！"}
])
```

`$ rake db:seed`

これで所定のデータが入ります。