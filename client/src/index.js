import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Expense from './Expense'; // Import Expense component
// import Login from './Login'; // Import Login component

ReactDOM.render(<App />, document.getElementById('root'));
const Expense = () => {
    return <>Expense</>;
};
const Login = () => {
    return <>login</>;
};
const Home = () => {
    return <>Home</>;
};
ReactDOM.render(
<Router>
        <Routes>
            <Route exact path="/" element={<Home />} /> {/* Route for the App component */}
            <Route exact path="/expense" element={<Login />} /> {/* Route for the App component */}
            <Route exact path="/expense/:clientId" element={<App />} /> {/* Route for the App component */}
        </Routes>
    </Router>,
    document.getElementById('root')
);

