// ステップ管理
const steps = {
    1: {
        message: '「J:COM通訳センターの○○でございます。〇〇様でお間違いないでしょうか？」',
        options: ['はい', 'いいえ'],
        next: {
            'はい': 2,
            'いいえ': 99
        }
    },
    2: {
        message: '念のため、お名前のフルネームを確認させていただいております。〇〇〇〇様でお間違いないでしょうか？',
        options: ['はい', 'いいえ'],
        next: {
            'はい': 3,
            'いいえ': 99
        }
    },
    3: {
        message: 'いつもJ:COMサービスをご利用いただきありがとうございます。\nただいま、J:COMご利用中のお客様向けに特別なご案内を差し上げております。\n今、お時間はよろしいでしょうか？',
        options: ['はい', 'いいえ'],
        next: {
            'はい': 4,
            'いいえ': 99
        }
    },
    4: {
        message: '現在どちらの携帯キャリアをお使いですか？',
        options: ['docomo', 'au', 'SoftBank', '楽天モバイル', 'Y!mobile', 'UQモバイル', 'mineo', 'IIJmio', 'ahamo', 'povo', 'LINEMO', 'J:COM', 'その他', '不明'],
        next: {
            '*': 5
        }
    },
    5: {
        message: '月額の利用料金は、だいたいいくらくらいですか？',
        options: ['千円以下', '約2,000円', '約3,000円', '約5,000円', '6,000円以上', '不明'],
        next: {
            '*': 6
        }
    },
    6: {
        message: 'ご利用中の月間データ容量はどのくらいですか？',
        options: ['1GB', '3GB', '5GB', '10GB', '20GB', '無制限'],
        next: {
            '*': 7
        }
    },
    7: {
        message: '本人確認に必要な在留カードをお持ちですか？',
        options: ['あり', 'なし'],
        next: {
            '*': 8
        }
    },
    8: {
        message: 'ご利用中の端末はどちらの製品ですか？',
        options: ['国内製', '海外製'],
        next: {
            '国内製': 10,
            '海外製': 9
        }
    },
    9: {
        message: 'ご利用の端末はSIMフリーでしょうか？',
        options: ['SIMフリー', 'SIMロック', '不明'],
        next: {
            '*': 10
        }
    },
    10: {
        message: '念のため、端末が切替可能か確認いたします。お使いの端末のモデル名は分かりますでしょうか？',
        options: ['はい', 'いいえ'],
        next: {
            'はい': 11,
            'いいえ': 15
        }
    },
    11: {
        message: 'ありがとうございます。端末チェッカーで確認しますので、少々お待ちください.\nhttps://r.jcom.jp/zjkAzTm',
        options: ['切替可能', '切替不可'],
        next: {
            '切替可能': 12,
            '切替不可': 13
        }
    },
    12: {
        message: '端末は問題なく切り替えができることを確認いたしました。',
        options: [],
        next: {
            '*': 15
        }
    },
    13: {
        message: 'お客様の端末は切替不可の機種です。契約後8日以内であればクーリングオフが可能ですが、引き続きご案内をご希望されますか？',
        options: ['はい', 'いいえ'],
        next: {
            'はい': 14,
            'いいえ': 99
        }
    },
    14: {
        message: '海外製端末など一部非対応機種がありますのでご了承ください。',
        options: [],
        next: {
            '*': 15
        }
    },
    15: {
        message: 'ここからは簡単にJ:COM MOBILEの料金プランをご案内させていただきます。\nいつもJ:COMをご利用いただき誠にありがとうございます。\n本日は、J:COMをお使いの皆様へ、特別に携帯電話料金プランをご案内させていただきます。\n\n現在のプロモーションでは、**通常料金のままでデータ容量が増量される**内容です。\n\n例えば、1GBプランの場合、月額980円のままで**5GB**までお使いいただけます。\n（※お客様の現在のデータ容量に応じて、適切な価格帯の例を提示）',
        options: ['はい', 'いいえ'],
        next: {
            'はい': 17,
            'いいえ': 99
        }
    },
    16: {
        message: '',
        options: [],
        next: {}
    },
    17: {
        message: 'ここまでのご案内で、ご不安な点やご不明なことはございますか？',
        options: ['はい', 'いいえ'],
        next: {
            'はい': 17,
            'いいえ': 20
        }
    },
    20: {
        message: 'お電話番号をそのままご利用いただくには、現在のキャリアで『MNP予約番号』の取得が必要となります。\n現在お使いの携帯会社のマイページやアプリにログインできる状態ですか？（IDとパスワードはご記憶でしょうか？）',
        options: ['ログインできる', 'ログインできない'],
        next: {
            'ログインできる': 22,
            'ログインできない': 23
        }
    },
    21: {
        message: '',
        options: [],
        next: {}
    },
    22: {
        message: 'マイページにログインし、MNP予約番号発行の項目に進んでください。取得できたらご連絡ください。',
        options: [],
        next: {
            '*': 24
        }
    },
    23: {
        message: 'ログイン方法や再発行についてはスタッフがサポートいたします。',
        options: [],
        next: {
            '*': 24
        }
    },
    24: {
        message: 'MNP予約番号を取得できましたね。次に、ご契約の手続きに進みましょう。',
        options: [],
        next: {
            '*': 99
        }
    },
    99: {
        message: 'ご案内が終了いたしました。何かご不明な点がございましたら、お気軽にお申し付けください。',
        options: [],
        next: {}
    }
};

// よくある質問（No消しQ&A）の表示制御関数
function toggleFAQ(show) {
    const faqContainer = document.querySelector('.faq-container');
    if (faqContainer) {
        faqContainer.style.display = show ? 'block' : 'none';
    }
}

// よくある質問（No消しQ&A）を表示する関数
function showFAQ() {
    const faqContainer = document.querySelector('.faq-content');
    
    if (faqContainer) {
        faqContainer.innerHTML = `
            <p>1. 料金プランの詳細は？</p>
            <p>2. 契約後のサポートは？</p>
            <p>3. 端末の対応状況は？</p>
        `;
    }
}

// メッセージを表示する関数
function showMessage(message) {
    const messageContent = document.querySelector('.message-content');
    if (messageContent) {
        // マークダウンをHTMLに変換
        const convertedMessage = message
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // **太字**を<strong>に変換
            .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>'); // [リンク](URL)を<a>に変換
        
        messageContent.innerHTML = convertedMessage;
        console.log('メッセージを表示:', message);
    }
}

// 選択肢を更新する関数
function updateOptions(options) {
    const container = document.querySelector('.selection-options');
    const yesButton = document.querySelector('.option-btn.yes');
    const noButton = document.querySelector('.option-btn.no');
    
    if (!container) {
        console.error('選択肢のコンテナが見つかりません');
        return;
    }
    
    // コンテナの内容をクリア
    container.innerHTML = '';
    
    // 新しい選択肢を追加
    options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'selection-btn';
        button.textContent = option;
        button.dataset.option = option;
        button.addEventListener('click', handleSelectionClick);
        container.appendChild(button);
        console.log(`選択肢追加: ${option}`);
    });
    
    // ステップ4以降のみ選択肢を表示
    container.style.display = options.length > 0 ? 'block' : 'none';
    
    // YES/NOボタンの表示制御
    if (yesButton && noButton) {
        // 複数選択肢がある場合はYES/NOボタンを非表示
        if (options.length > 2) {
            yesButton.style.display = 'none';
            noButton.style.display = 'none';
        }
    }
}

// 選択ボタンのクリックハンドラー
function handleSelectionClick(e) {
    const button = e.currentTarget;
    console.log(`クリックされたボタン: ${button.textContent}`);
    
    // ステップの存在確認
    if (!steps[currentStep]) {
        console.error(`現在のステップ${currentStep}が見つかりません`);
        return;
    }
    
    // 選択肢の存在確認
    if (!steps[currentStep].next[button.textContent] && !steps[currentStep].next['*']) {
        console.error(`選択肢${button.textContent}の遷移先が定義されていません`);
        return;
    }
    
    // 次のステップを取得
    const nextStep = steps[currentStep].next[button.textContent] || steps[currentStep].next['*'];
    
    // 次のステップの存在確認
    if (!steps[nextStep]) {
        console.error(`次のステップ${nextStep}が見つかりません`);
        return;
    }
    
    if (nextStep === 99) {
        // 終了ステップの場合
        showMessage(steps[99].message);
    } else if (nextStep === 12) {
        // ステップ12（切替可能）の場合、次に進む
        currentStep = nextStep;
        showMessage(steps[currentStep].message);
        // ステップ15に進む
        currentStep = 15;
        showMessage(steps[currentStep].message);
        // 選択肢を更新
        updateOptions(steps[currentStep].options);
        // よくある質問を非表示
        toggleFAQ(false);
    } else if (nextStep === 17) {
        // ステップ17（よくある質問）の場合
        currentStep = nextStep;
        showMessage(steps[currentStep].message);
        // よくある質問を表示
        showFAQ();
        // 「はい」を選択した場合、同じステップにとどまる
        if (button.textContent === 'はい') {
            currentStep = 17;
        } else {
            // 「いいえ」を選択した場合、ステップ20に進む
            currentStep = 20;
            showMessage(steps[currentStep].message);
            // よくある質問を非表示
            toggleFAQ(false);
        }
    } else if (nextStep === 22 || nextStep === 23) {
        // ステップ22（ログインできる）または23（ログインできない）の場合
        currentStep = nextStep;
        showMessage(steps[currentStep].message);
        // 次のステップに進む
        currentStep = 24;
        showMessage(steps[currentStep].message);
    } else {
        // その他のステップ
        currentStep = nextStep;
        showMessage(steps[currentStep].message);
        // ステップ4以降で選択肢を表示
        if (currentStep >= 4) {
            updateOptions(steps[currentStep].options);
        }
    }
}

// 現在のステップ
let currentStep = 1;

// 選択履歴
let selections = {};

// 初期表示
showMessage(steps[currentStep].message);
// ステップ1-3では選択肢を非表示
if (currentStep >= 4) {
    updateOptions(steps[currentStep].options);
}

// YES/NOボタンのイベントリスナーを追加
const yesButton = document.querySelector('.option-btn.yes');
const noButton = document.querySelector('.option-btn.no');

if (yesButton && noButton) {
    yesButton.addEventListener('click', handleSelectionClick);
    noButton.addEventListener('click', handleSelectionClick);
    console.log('イベントリスナーを追加しました');
} else {
    console.error('YES/NOボタンが見つかりません');
}
