import React, { useContext} from "react";
import "../../styles/home.css";
import CardPersonajes from "../component/cardPersonajes.js";
import CardPlanetas from "../component/cardPlanetas.js";
import { Context } from "../store/appContext.js";
import CardVehiculo from "../component/cardVehiculos.js";


export const Home = () => {
	const {store, action}= useContext(Context)

	return (
	<div className="container">
		<h1>Personajes</h1>
		<div className="d-flex row flex-nowrap overflow-auto">
			{store.personajes.map((item)=><CardPersonajes key={item.uid} nombre={item.name} url={item.url} id={item.uid}/>)}		
		</div>
		<h1>Planetas</h1>
		<div className="d-flex row flex-nowrap overflow-auto">  	
			{store.planetas.map((item)=><CardPlanetas key={item.uid} nombre={item.name} url={item.url} id={item.uid}/>)}
		</div>
		<h1>Vehículos</h1>
		<div className="d-flex row flex-nowrap overflow-auto">  		
			{store.vehiculos.map((item)=><CardVehiculo key={item.uid} nombre={item.name} url={item.url} id={item.uid}/>)}		
		</div>
	</div>
);
}