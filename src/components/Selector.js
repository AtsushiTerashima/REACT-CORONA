const Selector = (props) => {
    return (
        <div className="selector-container">
            {/* onchangeは入力欄や選択肢が変更された時に発生するイベントで
            (e)でデータにアクセスし、propsで渡されてきたsetCountryにデータの中のvalueを書き込んでいる  */}
            <select onChange={(e) => props.setCountry(e.target.value)}> 
            {/* propsで下ろしてきた表示させる国とslugのデータをmap()で{}ごとに解体しcountryという名前をつけている  */}
            {/* map()で自動的に生成されたindexをキーとして使うために引数として記述している。
                二ヶ所のindexはある意味map()を使うときの決まりごとくらいに考えておけばいいのかも  */}
                {props.countriesJson.map((country, index) => 
                    <option key={index} value={country.Slug}>{country.Country}</option>
                )}
            </select>
            <button onClick={props.getCountryData}>Get Data</button>
        </div>
    );
}

export default Selector;