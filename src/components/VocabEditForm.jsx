/*
単語の編集フォーム
プロップス: 単語、編集モード更新関数
*/

import useCreateEditMutation from "../hooks/useCreateEditMutation";

export default function VocabEditForm({
  vocab: { id, word, meaning, vocabType, registeredAt, updatedAt },
  setIsEditMode
}) {
  // ミューテーション関数の取得
  const { updateMutation, deleteMutation } = useCreateEditMutation(id);

  // フォーム入力
  const wordRef = useRef();
  const meaningRef = useRef();
  const { getValuesAndValidate } = useVocabFormInputs({ wordRef, meaningRef });

  // 単語の種別はステートで管理
  const [typeId, setTypeId] = useState(vocabType.id);

  // バリデーションエラー表示用
  const [showValidationError, setShowValidationError] = useState(false);

  // 変更確定ボタン
  const handleUpdate = async () => {
    // 入力値の取得(種類はステートから取得)
    const { word, meaning, isValid } = getValuesAndValidate();

    // バリデーション(未入力チェック)
    if (!isValid) {
      setShowValidationError(true);
      return;
    }

    // データの更新
    const vocabType = { id: typeId };
    await updateMutation.mutateAsync({ id, word, meaning, vocabType });

    // 編集モードを解除
    setShowValidationError(false);
    setIsEditMode(false);
  };

  // 削除ボタン
}
