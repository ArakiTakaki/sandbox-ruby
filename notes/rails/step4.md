# railsでGraphqlを使用してみる。

[参考記事 - qiita](https://qiita.com/yuta-ushijima/items/6f800f20c83e79e6de64)

## GraphQLとは

非同期に鯖と通信する場合に、従来のRESTFullなAPIの場合fetchnの回数（リクエスト）が非常に膨大になり、不必要なデータを大量に取得する羽目になるが、今回この技術を使用することにより、１リクエストのQueryに様々なパラメータを入れることにより、アクセスの回数を１回で必要な情報を全部持ってくることが可能となる。

詰まる話軽い

とくに流行っているというわけでもないが、自宅の開発にて、GithubAPI v4を使用してみようと考えているため、デモンストレーションをかねてgraphqlを使用してみようと思う

## 導入手順

1. `Gemfile`に`gem 'graphql`を追記する
2. `$ bundle`を実行し、Gemをアップデートする。
3. `$ rails g graphql:install`を行う
4. `$ brew cask install graphiql`macにGraphQLをインストール
