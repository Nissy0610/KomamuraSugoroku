//JSON
const data = `{
    "list":[
        { "id": 1, "content": "ボトルフリップ成功でポイントゲット ➕3 ➖1" },
        { "id": 2, "content": "自身のポイントが３の倍数の場合10点減点。それ以外なら3点加点。 ➕3 ➖1" },
        { "id": 3, "content": "相手を指定してじゃんけんに勝ったらポイント追加 ➕3 ➖1" },
        { "id": 4, "content": "相手を指定してトランプを引き合い、数が多い方が加点、少ない方が減点 ➕3 ➖3" },
        { "id": 5, "content": "トランプ３枚引いて21より大きかったら ➕3、小さかったら ➖3" },
        { "id": 6, "content": "腕立て伏せ１０回で3pt" },
        { "id": 7, "content": "スクワット１０回で3pt" },
        { "id": 8, "content": "10秒以内にマリオのキャラクター5人言え ➕3" },
        { "id": 9, "content": "10秒以内にドラえもんのキャラクター5人言え ➕3" },
        { "id": 10, "content": "10秒以内にクレヨンしんちゃんのキャラクター5人言え ➕3" },
        { "id": 11, "content": "筆箱椅子の上に乗せれるかチャレンジ ➕5" },
        { "id": 12, "content": "ポイント ➖3" },
        { "id": 13, "content": "ポイント ➕3" },
        { "id": 14, "content": "相手を指定して指スママス ➕3 ➖1" },
        { "id": 15, "content": "相手を指定してあっち向いてホイマス ➕3 ➖1" },
        { "id": 16, "content": "２０秒間話し続けろ ➕5" },
        { "id": 17, "content": "10秒以内にアニメ５作品言え ➕3" },
        { "id": 18, "content": "10秒以内に映画５作品言え ➕3" },
        { "id": 19, "content": "10秒以内に寿司５ネタ言え ➕3" },
        { "id": 20, "content": "10秒以内にキャンパス内の人の名前5人言え ➕3" },
        { "id": 21, "content": "10秒以内にアンパンマンのキャラクター5人言え ➕3" },
        { "id": 22, "content": "スイカゲーム進化順に言え ➕6 ➖1" },
        { "id": 23, "content": "10秒以内に漫画５作品言え ➕3" },
        { "id": 24, "content": "10秒以内に都道府県５個言え ➕3" },
        { "id": 25, "content": "腕にデコピンされ、一人につき ➕3" },
        { "id": 26, "content": "10秒以内に鬼滅の刃のキャラクター5人言え ➕3" },
        { "id": 27, "content": "１発ギャグ 受けたら ➕25 受けなかったら ➖25 やらないなら ➖3" },
        { "id": 28, "content": "ダジャレ 受けたら ➕30 受けなかったら ➖5 やらないなら ➖1" },
        { "id": 29, "content": "右隣の人とじゃんけん ➕3 ➖1" },
        { "id": 30, "content": "動物のモノマネ ➕6 似てなかったら ➖1" },
        { "id": 31, "content": "10秒以内に有名人5人言え ➕3" },
        { "id": 32, "content": "10秒以内にYouTuber5人言え ➕3" },
        { "id": 33, "content": "１０回ジャンプ ➕3" },
        { "id": 34, "content": "１０秒間１０億円当たったように喜ぶ ➕6" },
        { "id": 35, "content": "１０秒間喜び100% ➕6" },
        { "id": 36, "content": "１０秒間悲しみ100% ➕6" },
        { "id": 37, "content": "１０秒間驚き100% ➕6" },
        { "id": 38, "content": "１０秒間爆笑 ➕5" },
        { "id": 39, "content": "右隣の人の血液型当てろ ➕5 ➖1" },
        { "id": 40, "content": "10秒以内にYouTubeで１億再生超えている動画３個言え ➕3" },
        { "id": 41, "content": "ヒカキンの登録者当てろ ➕5 ➖1" },
        { "id": 42, "content": "右隣の人の身長を当てろ ➕5 ➖1" },
        { "id": 43, "content": "10秒以内にゲーム５作品言え ➕3" },
        { "id": 44, "content": "Mrbeastの登録者を当てろ ➕5 ➖1" },
        { "id": 45, "content": "マジックカードチャレンジ ➕10 ➖3" },
        { "id": 46, "content": "カーンマス（元のマスに戻りもう一度サイコロを触れる「任意」）" },
        { "id": 47, "content": "トランプカード上手くきれるかチャレンジ ➕5 ➖3" },
        { "id": 48, "content": "英語の翻訳当てろチャレンジ ➕5 ➖3" },
        { "id": 49, "content": "片足立ち２０秒間チャレンジ ➕3 ➖1" },
        { "id": 50, "content": "１０秒間連打（５０回以下は ➖3、５０回超えたら ➕3、７０回超えたら ➕5、１００回超えたら ➕10)" },
        { "id": 51, "content": "ホワイトボードに１０秒間お絵描きチャレンジ 他の人が指定したキャラを上手くかけたら ➕5 下手なら ➖3" },
        { "id": 52, "content": "１０秒間変顔チャレンジ 変顔した回数分ポイント追加、MAX10" },
        { "id": 53, "content": "ペン回しチャレンジ ➕5 ➖1" },
        { "id": 54, "content": "床に手をつけろチャレンジ ➕5 ➖3" },
        { "id": 55, "content": "消しゴム落としチャレンジ 優勝者には ➕１０ 最下位は ➖5" },
        { "id": 56, "content": "チキチキチキンレースチャレンジ 優勝者には ➕１０ 最下位は ➖5" },
        { "id": 57, "content": "相手を指定して腕相撲対決チャレンジ ➕5 ➖3" },
        { "id": 58, "content": "相手を指定して指相撲対決チャレンジ ➕5➖3"},
        { "id": 59, "content": "腹筋１０回 ➕3"},
        { "id": 60, "content": "口笛チャレンジ ➕3➖1"},
        { "id": 61, "content": "韻踏みチャレンジ ➕5➖1"},
        { "id": 62, "content": "押し相撲対決チャレンジ ➕5➖3"},
        { "id": 63, "content": "ジェスチャーチャレンジ 他の人がなんのジェスチャーが当てたら➕5失敗したら➖3"},
        { "id": 64, "content": "常識クイズ ➕5➖5"},
        { "id": 65, "content": "運試し（ジャンケンなど） ➕10➖5"},
        { "id": 66, "content": "歌当てチャレンジ ➕5➖1"},
        { "id": 67, "content": "お絵描きジェスチャーチャレンジ ➕5➖3"},
        { "id": 68, "content": "演技力チャレンジ ➕5➖3"},
        { "id": 69, "content": "涙流せるかチャレンジ ➕30"},
        { "id": 70, "content": "早口言葉チャレンジ ➕5➖3"},
        { "id": 71, "content": "あくびチャレンジ １回につき➕3"},
        { "id": 72, "content": "10秒以内にジャンプの漫画５作品言え ➕3"},
        { "id": 73, "content": "将来の夢を言え ➕3"},
        { "id": 74, "content": "アメイジングマス（ここで110ポイント支払うなら参加者全員のポイントを０にする）"},
        { "id": 75, "content": "ラッキーマス(サイコロを振り、サイコロの目分のポイント追加)"},
        { "id": 76, "content": "トキシックマス(みんなのポイントのプラスマイナスが反転する)"},
        { "id": 77, "content": "メディカルマス（自分のポイントがマイナスなら４枚カードをドローしポイント追加するさらに次のターンの獲得ポイントを三倍にする）"},
        { "id": 78, "content": "ネガティブマス（自分のポイントがマイナスの場合スタートに戻るor5回休み）"},
        { "id": 79, "content": "エモートマス（エモートをする） ➕5➖1"},
        { "id": 80, "content": "立場入れ替えマス（指定した相手と立場が入れ替わる）"},
        { "id": 81, "content": "昨日の夕飯を言え➕3➖3"},
        { "id": 82, "content": "今年の干支を当てろ➕3➖3"},
        { "id": 83, "content": "もう一度サイコロを振れる"},
        { "id": 84, "content": "廃棄マス（ポイントを好きなだけ追加できるがその分休む、４ポイント追加ごとに２回休み）"},
        { "id": 85, "content": "家買いマス（５５ポイント支払って家を買う。家には休む、スタートに戻る、脱落するといった効果を家（ここ）に戻ることで無効化する。また、家を買った人はポイントが永遠に下がらない。マイナス効果はもちろん反転などの影響も自分は受けない（ただし相手は反転を受ける（家を買ってない場合））"},
        { "id": 86, "content": "人間ぶっ殺しゾーンマス（ポイント➖３０でスタートに戻り１回休む）"},
        { "id": 87, "content": "分岐点に戻りマス（分岐点に戻れる）"},
        { "id": 88, "content": "10秒以内に犬種５種類言え➕3➖1"},
        { "id": 89, "content": "爆発マス（どこかのマスを爆発させ、何もないマスを変化させる）"},
        { "id": 90, "content": "サイコロゾロ目マス（サイコロ降ってゾロ目だった場合ポイント追加 ➕10➖3"},
        { "id": 91, "content": "ハイエボマス（ポイントを５払うと全員のポイントをマイナス２される。マイナスにさせた数分ポイントを追加）"},
        { "id": 92, "content": "３秒間拍手マス（３秒間拍手した回数分ポイント追加）"},
        { "id": 93, "content": "リンボマス（２５ポイント支払い次のターンは２回サイコロ振れる）"},
        { "id": 94, "content": "ポイント２倍券マス（次止まったマスで２倍ポイントゲットできる）"},
        { "id": 95, "content": "泥棒マス（トランプカードを１枚ドローしポイント追加）"},
        { "id": 96, "content": "10秒以内におかし５種類言え➕3➖1"},
        { "id": 97, "content": "プレイヤー全員褒めろ➕5➖5"},
        { "id": 98, "content": "操りマス（次のターンはサイコロの出目を自由にできる）"},
        { "id": 99, "content": "語尾にゃんマス（３ターンまで語尾ににゃんをつけなければいけない） ➕5　➖5"},
        { "id": 100, "content": "栗松マス（３ターンまで語尾にでやんすをつけなければいけない） ➕5　➖5"},
        { "id": 101, "content": "ヒカキンのモノマネマス（ヒカキンのモノマネをする） ➕5似てなかったら➖3"},
        { "id": 102, "content": "マスオTVの2〜3日前の動画の再生回数を当てろ ➕5違ったら➖3"},
        { "id": 103, "content": "プレイヤー全員の本名を20秒以内に言え➕5"},
        { "id": 104, "content": "好きな絵文字答えろ➕3"},
        { "id": 105, "content": "好きな曲答えろ➕3"},
        { "id": 106, "content": "最近あった良いこと答えろ➕5➖1"},
        { "id": 107, "content": "最近あった悪いこと答えろ➕5➖1"},
        { "id": 108, "content": "３０秒間ツーリストマス（３０秒間いろいろ見てポイント追加）"},
        { "id": 109, "content": "１０秒以内にいろいろなタバコのメーカー名答えろ➕3➖1"},
        { "id": 110, "content": "１５秒間踊れるところに行け➕3"},
        { "id": 111, "content": "車５社言え➕3"},
        { "id": 112, "content": "バイク５社答えろ➕3"},
        { "id": 113, "content": "シャンプー５社答えろ➕3"},
        { "id": 114, "content": "紙５社答えろ➕3"},
        { "id": 115, "content": "ティッシュ５社答えろ➕3"},
        { "id": 116, "content": "トイレットペーパー５社答えろ➕3"},
        { "id": 117, "content": "本５冊答えろ➕3"},
        { "id": 118, "content": "雑誌５冊答えろ➕3"},
        { "id": 119, "content": "アルバム５冊答えろ➕3"},
        { "id": 120, "content": "輪ゴム５つ答えろ➕3"},
        { "id": 121, "content": "ゴムの消しゴム５つ答えろ➕3"},
        { "id": 122, "content": "実を言えばマス（何か言って真実の答えが合ったら１００ポイント追加違ったら１ポイント減）"},
        { "id": 123, "content": "ＣＤ５枚答えろ➕３"},
        { "id": 124, "content": "バンド名５つ答えろ➕3"},
        { "id": 125, "content": "同じメーカー名を答えろ➕3➖1"},
        { "id": 126, "content": "お風呂５種類答えろ➕3"},
        { "id": 127, "content": "全員ハイタッチ➕5➖1"},
        { "id": 128, "content": "全員で回転寿司➕5➖1"},
        { "id": 129, "content": "飛び降りるチャレンジ➕5➖1"},
        { "id": 130, "content": "あてっこチャレンジ➕5➖1"},
        { "id": 131, "content": "デカゴンチャレンジ➕5➖1"},
        { "id": 132, "content": "目隠しチャレンジ➕5➖1"},
        { "id": 133, "content": "３０秒以内に言葉５つ答えろ➕5➖1"},
        { "id": 134, "content": "一番高い場所に登って来い➕5➖1"},
        { "id": 135, "content": "一番低い場所に登って来い➕5➖1"}
    ]
}`

//JSON読み込み
const row = JSON.parse(data)
console.log(row)
console.log(row.list.length)

//JSONから抜いたデータを表示
const elements = document.querySelector('#list')

for(let i = 0; i < row.list.length; i++) {
    console.log(row.list[i].content);
    const createElement = `<li class="border-b-2 border-gray-500 m-2 text-left">${row.list[i].id}.${row.list[i].content}</li>`;
    elements.insertAdjacentHTML('beforeend', createElement);
}