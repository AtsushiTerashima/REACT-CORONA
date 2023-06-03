const Card = (props) => {
    return (
        <div className="card-container">
            {/* こういう配列に対してmap()を使った操作はReact開発でよく使われる。
            世界の一覧データが入っている「allCountriesData」を解体して、singleDataに入れて
            国名をh2タグ,新規感染者数と感染者総数をspanタグ内に表示させている。　
            二ヶ所のindexはある意味map()を使うときの決まりごとくらいに考えておけばいいのかも  */}
            {props.allCountriesData.map((singleData, index) =>
                <div key={index} className="card">
                    <div>
                        <h2>{singleData.Country}</h2>
                        <p>新規感染者：<span>{singleData.NewConfirmed.toLocaleString()}</span></p>
                        <p>感染者総数：<span>{singleData.TotalConfirmed.toLocaleString()}</span></p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Card;