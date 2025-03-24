import { useQuery } from "@tanstack/react-query";
import { getVocabs } from "../api/vocabApi";
import VocabListTable from "../components/VocabListTable";
import VocabRegistrationForm from "../components/VocabRegistrationForm";

/*
単語リストページ
単語登録フォーム、単語の種類(絞り込み用)、単語リストを表示
⇒絞り込み条件に応じて、単語リストを取得する
*/

export default function HomePage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["vocabs"],
    queryFn: getVocabs
  });

  // 単語リストテーブル
  let vocabData;
  if (isError) {
    vocabData = <div className="alert alert-danger">エラーが発生しました</div>;
  } else if (isLoading) {
    vocabData = <p>Loading...</p>;
  } else if (data.length === 0) {
    vocabData = (
      <div className="alert alert-warning">単語情報が存在しません</div>
    );
  } else {
    vocabData = <VocabListTable vocabList={data} />;
  }
  return (
    <div>
      <VocabRegistrationForm />
      {/*絞り込みメニューの配置*/}
      {vocabData}
    </div>
  );
}
