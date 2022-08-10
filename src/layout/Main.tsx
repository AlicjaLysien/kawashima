import { Route, Routes } from 'react-router-dom';
import Calculations from '../components/Calculations';
import MainPage from '../components/MainPage';

function Main() {

    return (
        <>
            <Routes>
                <Route path="" element={<MainPage />} />
                <Route path="/calculations:number"  element={<Calculations />} />
                <Route element={<MainPage />} />
            </Routes>
        </>
    );
}

export default Main;
