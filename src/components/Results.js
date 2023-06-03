const Results = (props) => {
    return (
        <div className="results-container">
            <div>
                {/* App.js → TopPage.js → Results.jsとpropsで降りてきた国の感染データをそれぞれ表示している
                セレクトタグで選択された国の情報をそれぞれのpタグで表示させている */}
                <p>日付：<span>{props.countryData.date}</span></p>{/*dateの後にこれ入れたいけどエラーになっちゃう.slice(0,10)*/}
                <p>新規感染者：<span>{props.countryData.newConfirmed.toLocaleString()}</span></p>
                <p>感染者総数：<span>{props.countryData.totalConfirmed.toLocaleString()}</span></p>
                <p>新規回復者：<span>{props.countryData.newRecovered.toLocaleString()}</span></p>
                <p>回復者総数：<span>{props.countryData.totalRecovered.toLocaleString()}</span></p>
            </div>
        </div>
    );
};

export default Results;