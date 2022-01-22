import {
    Routes, Route,
    Navigate
} from 'react-router-dom';
import DayProduct from '../pages/DayProduct';
import MenuDay from '../components/MenuDay';
import GiftRecipe from '../pages/GiftRecipe';

export const DashboardRoutes = () => {
    return (
        <>
        <div>
            <Routes>
                <Route path='/productday' element={<DayProduct />} />
                <Route path='/gift' element={<GiftRecipe />} />

                <Route path='*' element={<Navigate to="/" />} />
            </Routes>

        </div>
        </>
    )
}