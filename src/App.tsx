import './App.css';
import ProductList from './domain/products/productList';

function App() {
    return (
        <div className="App">
            <header>
                <div className="logo">
                    <h3>LOGO</h3>
                </div>
                <div>
                    <ul className="navigation-list">
                        <li className="navigation-item">Search</li>
                        <li className="navigation-item">Login</li>
                    </ul>
                </div>
            </header>
            <main>
                <ProductList />
            </main>
            <footer>
                <p>e-shop 2021</p>
            </footer>
        </div>
    );
}

export default App;

//https://app.pluralsight.com/guides/hierarchy-of-components-and-how-to-get-async-data
//https://www.digitalocean.com/community/tutorials/how-to-handle-async-data-loading-lazy-loading-and-code-splitting-with-react
//https://www.robinwieruch.de/react-folder-structure
//https://dev.to/larswaechter/how-i-structure-my-react-projects-jii
//https://www.carlrippon.com/fetch-with-async-await-and-typescript/
//https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example/
//https://nainacodes.com/blog/create-an-accessible-and-reusable-react-modal
//https://stackoverflow.com/questions/62538217/reusable-modal-component-react-typescript
//https://medium.com/risan/react-component-with-dot-notation-7a9853dbf33b