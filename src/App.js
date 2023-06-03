import { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom'; //これは3つで一つのセット
import countriesJson from './countries.json';
import TopPage from './pages/TopPage';
import WorldPage from'./pages/WorldPage';
import './App.css';


function App() {
  const [country, setCountry] = useState('');

  // 世界のデータを一覧するためデータを「setAllCountriesData」にデータを入れ
  // それが「allCountriesData」に入り、return内のpropsでWorldPage → Card.jsへと送っている
  const [allCountriesData, setAllCountriesData] = useState([]);
  // 表示させたいそれぞれのコンテンツの空箱を用意している
  const [countryData, setCountryData] = useState({
    data: "",
    newConfirmed: "",
    totalConfirmed: "",
    newRecovered: "",
    totalRecovered: "",
  });

  // 上で作った空箱の中にmonotein-booksから取ってきたデータをばらして
  // dateやnewConfirmedといった名前でそれぞれのデータを格納しようとしている。
  // なのでそれぞれ先頭のdateやnewConfirmedなどは上で作った空箱のこと
  // setCountryDateにはSelector.jsのセレクトタグで入力された値が入ってきている。
  // fetchでとってきたURLの末尾にslugを当てはめている
  const getCountryData = () => {
      fetch(`https://monotein-books.vercel.app/api/corona-tracker/country/${country}`)
      .then(res => res.json())
      .then(data => {
          setCountryData({
              date: data[data.length - 1].Date,
              newConfirmed: data[data.length - 1].Confirmed - data[data.length - 2].Confirmed,
              totalConfirmed: data[data.length - 1].Confirmed,
              newRecovered: data[data.length - 1].Recovered - data[data.length - 2].Recovered,
              totalRecovered: data[data.length - 1].Recovered,
          });
      })
  }

  // 操作とは関係なくページが表示された時に実行する仕組みが「useEffect」
  // 世界のデータを一覧するためデータを「setAllCountriesData」にデータを入れ込んでいる。
  useEffect(() => {
      fetch("https://monotein-books.vercel.app/api/corona-tracker/summary")
      .then(res => res.json())
      .then(data => setAllCountriesData(data.Countries))
  // リロードを抑制するために追加した「,[]」の意味は何？
  },[]);

  return (
    <BrowserRouter>
      <Routes>
        {/* countriesJsonは各国のデータ */}
        {/* setCountryはセレクターで選択された値をgetCountryDataの末尾countryにデータを入れる働き */}
        {/* getCountryDataは入力された値に沿って「apiに接続」 → 「データを取得してsetCountryDataでcountryDataに入れる」という働きをする関数 */}
        {/* countryDataはsetCountryで更新された値の入れ物 */}
        {/* pathのURLにアクセスすることでelement内に記述されたページにアクセスされるようになっている */}
        {/* コードが長くなっているけどelement内にはTopPageやWorldPageのコンポーネントを丸々入れているだけ */}
        <Route path="/" element={<TopPage countriesJson={countriesJson} setCountry={setCountry} getCountryData={getCountryData} countryData={countryData}/>}/>
        <Route path="/world" element={<WorldPage allCountriesData={allCountriesData} />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
