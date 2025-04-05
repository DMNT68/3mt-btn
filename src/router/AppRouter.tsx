import React from 'react';
import { Route, Routes } from 'react-router';
import { ThreeMTPage } from '../pages/ThreeMTPage';
import { WorkShopCityPage } from '../pages/WorkShopCityPage';

export const AppRouter = () => {
	return (
		<Routes>
			<Route index path="3mt" element={<ThreeMTPage />} />
			<Route path="workshopcity" element={<WorkShopCityPage />} />
		</Routes>
	);
};
