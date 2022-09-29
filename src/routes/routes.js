import HomePage from '../pages/homepage';
import MapPage from '../pages/mappage';
import PaymentPage from '../pages/payment';
import LoginSignUp from '../pages/loginsignup';

export const allRoutes = [
    {path:'/login/', exact:true, elements:<LoginSignUp/>},
    {path:'/payment/', exact:true, elements:<PaymentPage/>},
    {path:'/map/', exact:true, elements:<MapPage/>},
    {path:'/', exact:true, elements:<HomePage/>},
]