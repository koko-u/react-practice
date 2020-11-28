import './App.css';
import Link from './components/Link'

function App() {

    const logo = '/images/logo.png';

    const checkIn = () => {
        let pass = prompt('パスワードを入力してください。');
        if (pass) {
            window.location.href = `https://yu-sei-m.github.io/${pass}`;
        }
    };
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    <b>フィットネス・エンジニア勉強会</b>
                </p>
                <Link text='初めて学ぶReact' onClick={checkIn}/>
            </header>
        </div>
    );
}

export default App;
