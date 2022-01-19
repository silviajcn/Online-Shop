import {
    Routes, Route,
    Navigate
} from 'react-router-dom';
import Home from '../pages/Home';

export const DashboardRoutes = () => {
    return (
        <>
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                {/* <Route path='/registerp' element={<RegisterProduct />} /> */}
                {/* <Route path='/products' element={<Listar />} /> */}
                {/* <Route path='/searching' element={<Searching />} /> */}

                <Route path='*' element={<Navigate to="/" />} />
            </Routes>

        </div>
        </>
    )
}