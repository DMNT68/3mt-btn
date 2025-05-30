import { Route, Routes } from 'react-router';
import { ThreeMTPage } from '../pages/ThreeMTPage';
import { WorkShopCityPage } from '../pages/WorkShopCityPage';
import { SellMyCarPage } from '../pages/SellMyCarPage';
import { AiConnectPage } from '../pages/AiConnectPage';
import { AiConnectRealEstatePage } from '../pages/AiConnectRealEstatePage';

export const AppRouter = () => {
	return (
		<Routes>
			<Route index path="3mt" element={<ThreeMTPage />} />
			<Route path="workshopcity" element={<WorkShopCityPage />} />
			<Route path="sellMyCar" element={<SellMyCarPage />} />
			<Route path="aiconnect" element={<AiConnectPage />} />
			<Route path="realestate" element={<AiConnectRealEstatePage />} />
		</Routes>
	);
};
