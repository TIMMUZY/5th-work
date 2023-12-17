
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Main, NavBar, Posts, } from './pages';
import { Suspense, lazy } from 'react';
import UsersDetails from './pages/UsersDetails/UsersDetails';

const UsersLazy = lazy(() => import("./pages/Users/Users"))

const App = () => {
    return (
       <Router>
        <Routes>
            <Route path='/' element={<NavBar/>}>
            <Route path='/' element={<Main/>}></Route>
            <Route path='/posts' element={<Posts/>}></Route>
            <Route path='/users' element={
                <Suspense fallback ={<div>loading...</div>}>
                <UsersLazy/>
                </Suspense>
            }></Route>
            </Route>
            <Route path='/users/:id' element={<UsersDetails/>}></Route>

        </Routes>
       </Router>
    );
}

export default App;