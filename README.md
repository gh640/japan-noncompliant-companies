# 厚生労働省 ブラック企業リスト

厚生労働省が公開しているブラック企業の一覧です。

正確には、次の基準で「送検事案」「局長指導事案」となった全国の事案を厚生労働省がまとめた表に掲載されている企業の一覧です。

> ## 掲載する事案
>
> 本省及び局のホームページに掲載する事案は、以下のとおりとする。
>
> - ① 労働基準関係法令違反の疑いで送検し、公表した事案（以下「送検事案」という。）
> - ② 平成29年１月20日付け基発0120第１号「違法な長時間労働や過労死等が複数の事業場で認められた企業の経営トップに対する都道府県労働局長等による指導の実施及び企業名の公表について」に基づき、局長が企業の経営トップに対し指導し、その旨を公表した事案（以下「局長指導事案」という。）
>
> 出典: [労働基準関係法令違反に係る公表事案のホームページ掲載について](http://www.mhlw.go.jp/kinkyu/dl/170510-02.pdf)

ご覧いただく方にはいくつかお断りがあります。

- 上述のとおり、これらの企業は「送検事案」「局長指導事案」として事案が公表された企業です。それ以上の意味はありません。
- 厚生労働省の公式の掲載期間は次のとおり 1 年とされています。

> ## 3 掲載時期及び掲載期間
>
> (3) 掲載期間は、公表日から概ね１年間とし、公表日から１年が経過し最初に到来する月末にホームページから削除するものとする。
>
> ただし、公表日から概ね１年以内であっても、
>
> - ① 送検事案は、ホームページに掲載を続ける必要性がなくなったと認められる場合
> - ② 局長指導事案は、是正及び改善が確認された場合
>
> については、速やかにホームページから削除するものとする。
>
> 出典: [労働基準関係法令違反に係る公表事案のホームページ掲載について](http://www.mhlw.go.jp/kinkyu/dl/170510-02.pdf)

- 繰り返しになりますが、本リストにあがっている企業は単に「送検事案」「局長指導事案」として公表されたものです。世の中には、世間に認知されていなくても顧客や従業員を食い物にする企業・反社会的な行為を行う事業者はたくさんあるので、このリストに載っている企業が最低最悪だというわけではありません（フォロー）。


## 使用データ

データは、厚生労働省公表の PDF ファイル

- [労働基準関係法令違反に係る公表事案 | 厚生労働省](http://www.mhlw.go.jp/kinkyu/dl/170510-01.pdf) (PDF)

の情報を @nyampire さんらが次のリポジトリにまとめられているのですが、

- [GitHub - nyampire/jp_labor_act_illegal_list: TSV dataset of illegal companies from Ministry of Health, Labour and Welfare, Japan](https://github.com/nyampire/jp_labor_act_illegal_list)

その中の tsv ファイル `company_list_20170201_to_20180131.tsv` を使用させていただいています。


## 参考

- [長時間労働削減に向けた取組 | 厚生労働省](http://www.mhlw.go.jp/kinkyu/151106.html)
- [労働基準関係法令違反に係る公表事案 | 厚生労働省](http://www.mhlw.go.jp/kinkyu/dl/170510-01.pdf) (PDF)
- [政府標準利用規約（第 2.0 版）」 | 首相官邸](https://www.kantei.go.jp/jp/singi/it2/cio/dai66/h271224_btn01.pdf) (PDF)
- [GitHub - nyampire/jp_labor_act_illegal_list: TSV dataset of illegal companies from Ministry of Health, Labour and Welfare, Japan](https://github.com/nyampire/jp_labor_act_illegal_list)
- [ブラック・ブラック企業­ | Structure and Representation](http://structure-and-representation.com/works/blackCorporate/)


## 技術者の方向けの情報

このサイトは [vue-webpack-boilerplate](https://github.com/vuejs-templates/webpack) を使用して [Vue.js](vuejs.org) ベースで作成されました。

ホスティングには [GitHub Pages](pages.github.com) を使用しています。

興味があれば自由にフォーク & プルリクエスト等してお使いください。

### ビルドコマンド

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

### 技術スタック

主に使用している OSS ライブラリは次のとおりです。

- UI
    - [vue](https://github.com/vuejs/vue)
    - [vue-router](https://github.com/vuejs/vue-router)
    - [vue-good-table](https://github.com/xaksis/vue-good-table)
- データ管理
    - [vuex](https://github.com/vuejs/vuex)
- csv 処理
    - [d3-fetch](https://github.com/d3/d3-fetch)
- スキャフォールディング / バンドリング / トランスパイリング
    - [vue-cli](https://github.com/vuejs/vue-cli)
    - [webpack](https://github.com/webpack/webpack)
    - [babel](https://github.com/babel/babel)
- パッケージ管理
    - [yarn](https://github.com/yarnpkg/yarn)


## ライセンス

[MIT ライセンス](https://choosealicense.com/licenses/mit/) です。

ただし、 tsv データについては対象外です。

利用ライブラリのライセンスについてはチェックをしていますが、見落としがあるかもしれません。
権利違反にお気づきの方はイシューでご指摘いただけますと幸いです。

同様のデータ利用を検討される場合は、以下の内容もご確認ください。

- 元データ（ tsv データ）のライセンスについて: [nyampire/jp_labor_act_illegal_list](https://github.com/nyampire/jp_labor_act_illegal_list)
- 厚生労働者の公開データの利用規約について: [利用規約 | 厚生労働省](http://www.mhlw.go.jp/chosakuken/)
