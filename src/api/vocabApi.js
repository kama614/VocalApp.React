const vocabApi = axios.create({

  baseURL: "http://localhost:8080/api/vocabs",
  headers: { "Content-Type": "application/json" }
});

// 全単語データの取得
export async function getVocabs(){
    const res =
}
