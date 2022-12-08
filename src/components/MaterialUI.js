import React from 'react';
import MaterialUICard from './MaterialUICard';
import MaterialUIDrawer from './MaterialUIDrawer';

//TODO: En este componentes de muestra otro componente llamado 'MaterialUICard' el cual lanza una Card creada con el
//TODO: componente Card del framework Material UI.

export default function MaterialUI() {
	return (
		<>
			<h2>Material UI en React</h2>
			<MaterialUICard></MaterialUICard>
			<MaterialUIDrawer></MaterialUIDrawer>
		</>
	);
}
