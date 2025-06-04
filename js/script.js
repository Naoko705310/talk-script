// ステップ管理
const steps = {
    1: {
        title: 'お電話確認',
        message: '「J:COM通訳センターの○○でございます。〇〇様でお間違いないでしょうか？」',
        options: ['はい', 'いいえ'],
        next: {
            'はい': 2,
            'いいえ': 99
        }
    },
    2: {
        title: 'お名前の確認',
        message: '念のため、お名前のフルネームを確認させていただいております。〇〇〇〇様でお間違いないでしょうか？',
        options: ['はい', 'いいえ'],
        next: {
            'はい': 3,
            'いいえ': 99
        }
    },
    3: {
        title: 'お時間の確認',
        message: 'いつもJ:COMサービスをご利用いただきありがとうございます。\nただいま、J:COMご利用中のお客様向けに特別なご案内を差し上げております。\n今、お時間はよろしいでしょうか？',
        options: ['はい', 'いいえ'],
        next: {
            'はい': 4,
            'いいえ': 98
        }
    },
    4: {
        title: '携帯会社の確認',
        message: '差し支えなければ、現在ご利用のキャリア（携帯会社）を教えていただけますか？',
        options: ['docomo', 'au', 'SoftBank', '楽天モバイル', 'Y!mobile', 'UQモバイル', 'mineo', 'IIJmio', 'ahamo', 'povo', 'LINEMO', 'J:COM', 'その他', '不明'],
        next: {
            '*': 5
        }
    },
    5: {
        title: '利用料金の確認',
        message: '月額の利用料金は、だいたいいくらくらいですか？',
        options: ['千円以下', '約2,000円', '約3,000円', '約5,000円', '6,000円以上', '不明'],
        next: {
            '*': 6
        }
    },
    6: {
        title: 'データ容量の確認',
        message: 'ご利用中の月間データ容量はどのくらいですか？',
        options: ['1GB', '3GB', '5GB', '10GB', '20GB', '無制限'],
        next: {
            '*': 7
        }
    },
    7: {
        title: '本人確認の確認',
        message: '本人確認に必要な在留カードをお持ちですか？',
        options: ['はい', 'いいえ'],
        next: {
            '*': 8
        }
    },
    8: {
        title: '端末購入場所の確認',
        message: 'ご利用中の端末はどちらの製品ですか？',
        options: ['国内製', '海外製'],
        next: {
            '国内製': 10,
            '海外製': 9
        }
    },
    9: {
        title: 'SIMフリー確認',
        message: 'ご利用の端末はSIMフリーでしょうか？',
        options: ['SIMフリー', 'SIMロック', '不明'],
        next: {
            '*': 10
        }
    },
    10: {
        title: '端末モデル確認',
        message: '念のため、端末が切替可能か確認いたします。お使いの端末のモデル名は分かりますでしょうか？',
        options: ['はい', 'いいえ'],
        next: {
            'はい': 11,
            'いいえ': 14
        }
    },
    11: {
        title: '端末チェック',
        message: 'ありがとうございます。端末チェッカーで確認しますので、少々お待ちください.\n\n[端末チェッカーを開く](https://r.jcom.jp/zjkAzTm)',
        options: ['切替可能', '切替不可'],
        next: {
            '切替可能': 12,
            '切替不可': 13
        }
    },
    12: {
        title: '端末切替可能',
        message: '端末は問題なく切り替えができることを確認いたしました。',
        options: [],
        next: {
            '*': 15
        }
    },
    13: {
        title: '端末切替不可',
        message: 'お客様の端末は切替不可の機種です。契約後8日以内であればクーリングオフが可能ですが、引き続きご案内をご希望されますか？',
        options: ['はい', 'いいえ'],
        next: {
            'はい': 15,
            'いいえ': 99
        }
    },
    14: {
        title: '非対応機種の注意',
        message: '海外製端末など一部非対応機種がありますのでご了承ください。引き続きご案内をご希望されますか？',
        options: ['はい', 'いいえ'],
        next: {
            'はい': 15,
            'いいえ': 99
        }
    },
    15: {
        title: '料金プランの案内',
        message: 'ここからは簡単にJ:COM MOBILEの料金プランをご案内させていただきます。\nいつもJ:COMをご利用いただき誠にありがとうございます。\n本日は、J:COMをお使いの皆様へ、特別に携帯電話料金プランをご案内させていただきます。\n\n現在のプロモーションでは、**通常料金のままでデータ容量が増量される**内容です。\n\n例えば、1GBプランの場合、月額980円のままで**5GB**までお使いいただけます。\n（※お客様の現在のデータ容量に応じて、適切な価格帯の例を提示）',
        options: ['興味がある', '興味がない'],
        next: {
            '興味がある': 16,
            '興味がない': 99
        }
    },
    16: {
        title: '理解度チェック',
        message: 'ここまでのご案内で、ご不安な点やご不明なことはございますか？',
        options: ['はい', 'いいえ'],
        next: {
            'はい': 17,
            'いいえ': 18
        }
    },
    17: {
        title: 'No消しのQ&A',
        message: 'よくあるご不安にお答えします。次に進みますか？',
        options: ['興味がある', '興味がない'],
        next: {
            '興味がある': 18,
            '興味がない': 99
        }
    },
    18: {
        title: 'マイページへのログイン可否',
        message: 'お電話番号をそのままご利用いただくには、現在のキャリアで「MNP予約番号」の取得が必要となります。\n現在お使いの携帯会社のマイページやアプリにログインできる状態ですか？（IDとパスワードはご記憶でしょうか？）',
        options: ['ログインできる', 'ログインできない'],
        next: {
            'ログインできる': 19,
            'ログインできない': 20
        }
    },
    19: {
        title: 'MNP予約番号取得',
        message: 'マイページにログインし、MNP予約番号発行の項目に進んでください。取得できたらご連絡ください。',
        options: [],
        next: {
            '*': 21
        }
    },
    20: {
        title: 'サポートの提案',
        message: 'ログイン方法や再発行についてはスタッフがサポートいたします。',
        options: [],
        next: {
            '*': 21
        }
    },
    21: {
        title: 'トスアップ',
        message: '情報共有にお時間を頂き、有難うございました。ここからはJ:COMの専任スタッフにおつなぎいたします。  お申し込みやご質問の対応をさせていただきますのでご安心ください。\n\n※湘南センターへ電話を転送してトスアップ：電話番号：0466-77-8847\n無事に転送できたら、JCOMのスタッフに引き継ぎ。',
        options: ['対応終了'],
        next: {
            '対応終了': 99,
            '*': 99
        }
    },
    98: {
        title: '再架電のアポとり',
        message: 'お忙しい中大変失礼いたしました。改めてご案内させていただきますので、ご都合のよろしい日時を教えていただけますか？※土日は言語によって対応不可。JCOMの窓口は18時で終了することに注意。',
        options: ['対応終了'],
        next: {
            '対応終了': 99,
            '*': 99
        }
    },
    99: {
        title: '対応終了',
        message: '本日はお時間をいただき誠に有難うございました。何かご不明な点がございましたら、お気軽にご連絡ください。今後ともJCOMをよろしくお願い申し上げます。',
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
            <h3>JCOMモバイルについて</h3>
            <p>1. 料金プランの詳細は？</p>
            <p>2. 契約後のサポートは？</p>
            <p>3. 端末の対応状況は？</p>
        `;
    }
    // FAQを表示する
    toggleFAQ(true);
}

// メッセージを表示する関数
function showMessage(message) {
    // メッセージ内のリンクを変換
    message = message.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank">$1</a>');
    
    // メッセージ表示前にステップ番号とタイトルを追加
    let displayMessage = message;
    
    if (steps[currentStep]?.title) {
        const stepNumberHtml = `<div class="step-number">質問 ${currentStep}: ${steps[currentStep].title}</div>`;
        displayMessage = stepNumberHtml + displayMessage;
        
        // 対応終了ステップ以外の場合に履歴を記録
        if (currentStep !== 99) {
            // 既に同じステップの記録があるかチェック
            const existingIndex = conversationHistory.findIndex(h => parseInt(h.step) === parseInt(currentStep));
            
            if (existingIndex === -1) {
                // 新しいステップの場合は追加
                conversationHistory.push({
                    step: currentStep.toString(),
                    title: steps[currentStep].title,
                    message: message,
                    selection: null
                });
                console.log(`履歴追加: ステップ ${currentStep}`);
            }
        }
    }
    
    const messageElement = document.querySelector('.message-content');
    if (messageElement) {
        messageElement.innerHTML = displayMessage;
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
    
    // YES/NOボタンの表示制御
    if (yesButton && noButton) {
        // 選択肢が「はい」と「いいえ」のみの場合は組み込みのYES/NOボタンを使用
        const hasOnlyYesNo = options.length === 2 && 
                          options.includes('はい') && 
                          options.includes('いいえ');

        if (hasOnlyYesNo) {
            // YES/NOボタンを表示し、カスタム選択肢は表示しない
            yesButton.style.display = '';
            noButton.style.display = '';
            container.style.display = 'none'; // カスタム選択肢を非表示
        } else if (options.length > 2 || (options.length === 1 && options[0] === '対応終了')) {
            // 複数選択肢がある場合や特定のボタンのみの場合はYES/NOボタンを非表示
            yesButton.style.display = 'none';
            noButton.style.display = 'none';
            
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
            
            // カスタム選択肢を表示
            container.style.display = 'block';
        } else {
            // その他の場合はカスタム選択肢を表示
            yesButton.style.display = 'none';
            noButton.style.display = 'none';
            
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
            
            // カスタム選択肢を表示
            container.style.display = 'block';
        }
    } else {
        // YES/NOボタンがない場合はカスタム選択肢のみ表示
        options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'selection-btn';
            button.textContent = option;
            button.dataset.option = option;
            button.addEventListener('click', handleSelectionClick);
            container.appendChild(button);
            console.log(`選択肢追加: ${option}`);
        });
        
        // カスタム選択肢を表示
        container.style.display = options.length > 0 ? 'block' : 'none';
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
    
    // 現在のステップで選択されたボタンを記録
    // 既存の履歴レコードを探して選択肢を追加
    const historyIndex = conversationHistory.findIndex(h => parseInt(h.step) === parseInt(currentStep));
    if (historyIndex !== -1) {
        conversationHistory[historyIndex].selection = button.textContent;
        console.log(`選択記録: ステップ ${currentStep}, 選択: ${button.textContent}`);
    } else {
        // 履歴に記録がない場合は新規作成
        conversationHistory.push({
            step: currentStep.toString(),
            title: steps[currentStep].title,
            message: steps[currentStep].message,
            selection: button.textContent
        });
        console.log(`新規選択記録: ステップ ${currentStep}, 選択: ${button.textContent}`);
    }
    
    // 対応終了ボタンが押された場合
    if (button.textContent === '対応終了') {
        showHistoryModal();
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
    
    if (currentStep === 15) {
        // ステップ15の場合の特別な処理
        if (button.textContent === '興味がある') {
            // ステップ16に進む
            currentStep = 16;
            showMessage(steps[currentStep].message);
            // Q&Aは表示しない
            toggleFAQ(false);
            // 選択肢を更新
            updateOptions(steps[currentStep].options);
            // 進捗状況を更新
            updateProgressSidebar(currentStep);
        } else if (button.textContent === '興味がない') {
            // 終了ステップに進む
            currentStep = 99;
            showMessage(steps[currentStep].message);
            
            // 対応終了ボタンを表示する
            const customOptions = ['対応終了'];
            updateOptions(customOptions);
            // 進捗状況を更新
            updateProgressSidebar(currentStep);
        }
    } else if (currentStep === 13 && button.textContent === 'いいえ') {
        // ステップ13でいいえを選択した場合
        currentStep = 99;
        showMessage(steps[currentStep].message);
        
        // 対応終了ボタンを表示する
        const customOptions = ['対応終了'];
        updateOptions(customOptions);
        // 進捗状況を更新
        updateProgressSidebar(currentStep);
    } else if (nextStep === 99) {
        // 終了ステップの場合
        currentStep = nextStep;
        showMessage(steps[currentStep].message);
        
        // 対応終了ボタンを表示する
        const customOptions = ['対応終了'];
        updateOptions(customOptions);
        // 進捗状況を更新
        updateProgressSidebar(currentStep);
    } else if (nextStep === 12) {
        // ステップ12（切替可能）の場合、次に進む
        currentStep = nextStep;
        showMessage(steps[currentStep].message);
        // ステップ15に進む
        currentStep = 15;
        showMessage(steps[currentStep].message);
        // 選択肢を更新
        updateOptions(steps[currentStep].options);
        // 進捗状況を更新
        updateProgressSidebar(currentStep);
        // よくある質問を非表示
        toggleFAQ(false);
    } else if (nextStep === 17) {
        // ステップ17（よくある質問）の場合
        currentStep = nextStep;
        showMessage(steps[currentStep].message);
        // よくある質問を表示
        showFAQ();
        // 選択肢を更新
        updateOptions(steps[currentStep].options);
        // 進捗状況を更新
        updateProgressSidebar(currentStep);
    } else if (nextStep === 16) {
        // ステップ16の場合
        currentStep = nextStep;
        showMessage(steps[currentStep].message);
        // Q&Aを非表示
        toggleFAQ(false);
        updateOptions(steps[currentStep].options);
        // 進捗状況を更新
        updateProgressSidebar(currentStep);
    // ステップ13の「はい」の処理は通常の遷移処理で対応する
    } else if (nextStep === 19 || nextStep === 20) {
        // ステップ19（ログインできる）または20（ログインできない）の場合
        currentStep = nextStep;
        showMessage(steps[currentStep].message);
        // 進捗状況を更新
        updateProgressSidebar(currentStep);
        // 次のステップに進む
        currentStep = 21;
        showMessage(steps[currentStep].message);
        // 選択肢を更新（対応終了ボタンを表示）
        updateOptions(steps[currentStep].options);
        // 進捗状況を更新
        updateProgressSidebar(currentStep);
    } else {
        // その他のステップ
        currentStep = nextStep;
        showMessage(steps[currentStep].message);
        
        // ステップ18以降ではQ&Aを非表示にする
        if (currentStep >= 18) {
            toggleFAQ(false);
        }
        
        // ステップ4以降で選択肢を表示
        if (currentStep >= 4) {
            updateOptions(steps[currentStep].options);
        }
        
        // 進捗状況を更新
        updateProgressSidebar(currentStep);
    }
}

// 進捗インジケーターを初期化する関数
function initializeProgressSidebar() {
    const progressIndicator = document.getElementById('progress-indicator');
    if (!progressIndicator) return;
    
    // リストをクリア
    progressIndicator.innerHTML = '';
    
    // 各ステップの丸付き番号を追加
    for (let stepId in steps) {
        // 基本ステップのみ表示、特別なステップは除外
        if (parseInt(stepId) > 0 && parseInt(stepId) <= 21 && steps[stepId].title) {
            const stepElement = document.createElement('div');
            stepElement.className = 'progress-step';
            stepElement.textContent = stepId;
            stepElement.dataset.step = stepId;
            stepElement.title = steps[stepId].title;
            progressIndicator.appendChild(stepElement);
        }
    }
}

// 進捗インジケーターを更新する関数
function updateProgressSidebar(currentStepNum) {
    const progressIndicator = document.getElementById('progress-indicator');
    if (!progressIndicator) return;
    
    // すべてのステップアイテムのクラスを更新
    const steps = progressIndicator.querySelectorAll('.progress-step');
    steps.forEach(step => {
        const itemStep = parseInt(step.dataset.step);
        
        if (itemStep < currentStepNum) {
            step.classList.remove('active');
            step.classList.add('completed');
        } else if (itemStep == currentStepNum) {
            step.classList.add('active');
            step.classList.remove('completed');
        } else {
            step.classList.remove('active');
            step.classList.remove('completed');
        }
    });
}

// 現在のステップ
let currentStep = 1;

// 選択履歴
let conversationHistory = [];
let selections = {};

// 対応履歴モーダルを表示する関数
function showHistoryModal() {
    // 履歴コンテンツの生成
    const historyContent = document.getElementById('historyContent');
    historyContent.innerHTML = '';
    
    // レポートヘッダーを追加
    const now = new Date();
    const headerDiv = document.createElement('div');
    headerDiv.className = 'history-header';
    headerDiv.innerHTML = `
        <h3>対応日時: ${now.toLocaleString('ja-JP')}</h3>
    `;
    historyContent.appendChild(headerDiv);
    
    // すべての質問ステップを取得
    const questionSteps = [];
    for (let stepId in steps) {
        if (parseInt(stepId) > 0 && parseInt(stepId) <= 21 && steps[stepId].title) {
            questionSteps.push({
                step: stepId,
                title: steps[stepId].title
            });
        }
    }
    
    // デバッグ情報
    console.log('保存された対応履歴:', conversationHistory);
    
    // 各質問と回答を追加
    questionSteps.forEach((question) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'history-item';
        
        // 質問部分
        const questionDiv = document.createElement('div');
        questionDiv.className = 'history-question';
        questionDiv.textContent = `質問 ${question.step}: ${question.title}`;
        itemDiv.appendChild(questionDiv);
        
        // 回答部分
        const answerDiv = document.createElement('div');
        answerDiv.className = 'history-answer';
        
        // 対応履歴からこの質問の回答を探す
        const historyItem = conversationHistory.find(item => parseInt(item.step) === parseInt(question.step));
        
        if (historyItem && historyItem.selection) {
            answerDiv.textContent = `回答: ${historyItem.selection}`;
        } else {
            answerDiv.textContent = `回答: -`;
        }
        
        itemDiv.appendChild(answerDiv);
        historyContent.appendChild(itemDiv);
    });
    
    // モーダルを表示
    const modal = document.getElementById('historyModal');
    modal.style.display = 'block';
}

// 履歴モーダルを閉じる関数
function closeHistoryModal() {
    const modal = document.getElementById('historyModal');
    modal.style.display = 'none';
}

// 履歴をPDFで保存する関数
function printHistory() {
    // PDF保存用に一時的なコンテンツを作成
    const printContent = document.getElementById('historyContent').innerHTML;
    const now = new Date();
    const dateStr = now.toLocaleDateString('ja-JP').replace(/\//g, '-');
    const timeStr = now.toLocaleTimeString('ja-JP').replace(/:/g, '-');
    const filename = `対応履歴レポート_${dateStr}_${timeStr}`;
    
    const printWindow = window.open('', '_blank');
    
    printWindow.document.write(`
        <html>
        <head>
            <title>対応履歴レポート</title>
            <style>
                body { font-family: sans-serif; padding: 20px; }
                .history-header { margin-bottom: 20px; border-bottom: 2px solid #FF9800; padding-bottom: 10px; }
                .history-item { margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px solid #eee; }
                .history-question { font-weight: bold; color: #FF9800; margin-bottom: 5px; }
                .history-answer { padding-left: 15px; }
                @media print {
                    body { width: 21cm; height: 29.7cm; margin: 0; }
                    #saveInfo { display: none; }
                }
            </style>
        </head>
        <body>
            <h1>対応履歴レポート</h1>
            <div id="saveInfo" style="background: #f5f5f5; padding: 10px; margin-bottom: 20px;">
                <p>このページをPDFで保存するには、以下の手順に従ってください：</p>
                <ol>
                    <li>ブラウザの印刷メニューを開く(Ctrl+Pまたは⌘+P)</li>
                    <li>出力先を「PDFに保存」や「PDFとして保存」に設定</li>
                    <li>「保存」または「印刷」をクリック</li>
                </ol>
                <button onclick="window.print();" style="padding: 8px 12px; background: #FF9800; color: white; border: none; border-radius: 4px; cursor: pointer;">印刷ダイアログを開く</button>
            </div>
            ${printContent}
        </body>
        </html>
    `);
    
    printWindow.document.close();
    printWindow.focus();
}

// ページ読み込み時の初期化
document.addEventListener('DOMContentLoaded', function() {
    // サイドバーの初期化
    initializeProgressSidebar();
    
    // 初期表示
    currentStep = 1;
    showMessage(steps[currentStep].message);
    updateOptions(steps[currentStep].options);
    updateProgressSidebar(currentStep);
    
    // 履歴モーダルの閉じるボタンのイベントリスナー
    document.querySelector('.close-modal').addEventListener('click', closeHistoryModal);
    document.getElementById('closeHistory').addEventListener('click', closeHistoryModal);
    
    // 印刷ボタンのイベントリスナー
    document.getElementById('printHistory').addEventListener('click', printHistory);
});


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
