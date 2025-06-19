// import CallButton from '../components/CallButton';
import { useCall } from '../hooks/useCall';
import '../assets/styles.css';
import { ClientAiConnect } from '../types';
import CallButton from '../components/CallButton';
import {
	MapPin,
	Settings,
	Star,
	Phone,
	Mail,
	Facebook,
	Instagram,
	Twitter,
	Clock,
	Gavel,
	TrendingUp,
	Shield,
	Zap,
	Home,
	Wrench,
	Shirt,
	Laptop,
} from 'lucide-react';
import ChatWidget from '../components/ChatBot';

const agentId = 'agent_23e56d47885bbe708e1d108e46';
const client: ClientAiConnect = 'aiconnect';

export const Comprauto = () => {
	const { isCalling, toggleCall, isLoading } = useCall(agentId, client);

	const activeAuctions = [
		{
			id: 1,
			title: 'Toyota Corolla 2020 - Siniestrado',
			currentBid: '$8,500',
			timeLeft: '2h 45m',
			bids: 12,
			condition: 'Siniestrado',
			location: 'Quito',
			image:
				'data:image/jpeg;base64,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',
			category: 'Autos',
		},
		{
			id: 2,
			title: 'iPhone 14 Pro Max 256GB',
			currentBid: '$650',
			timeLeft: '1h 20m',
			bids: 8,
			condition: 'Usado',
			location: 'Guayaquil',
			image:
				'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQDw8PDRAPEA0PDQ0PDQ8NEQ8PDQ8NFhEWFhUVFRYYHSggGBomHRUVITIhJSkrLi8uGB8zRDM4OiguMysBCgoKDg0OFxAQFy0dHR0rLS03LSsrKy0tKy0tNy0tLSstKy0tLS0rKysrLTctKy0tNSstKy0tLSstKysrLS03N//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwIDBAUGAQj/xABUEAACAQMABQQJDA8GBwEAAAAAAQIDBBEFBhIhYQcxQVETMlVxdIGSsbMUFSIkYmWRk6HB0dIIFyMzNDVSVHJ1gqOytMI2QnOi4fAmQ1NWZKTxJf/EABoBAQEBAQEBAQAAAAAAAAAAAAABAgMEBQb/xAAnEQEBAAIBBAAGAgMAAAAAAAAAAQIRAwQSITETQVFhcYEyMwUUI//aAAwDAQACEQMRAD8AnEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMTSukadtSlWrPEI9C7aUnzRS6WwMsEX32ud3WcuxSjb0lv8AYqDcV7uctxrXrNcPf64PxVYY+SODXZV0mIEPLWS47oP4yP1SpayV+6D+Ngv6S9lNJfBE8dM3bw/VdfD5pRnCUX3mlgq9drz87r+VH6B2U7UrAhvTOtde1pSq1ry4UVuSTi5Sk+ZJY3t/M+os2FbWa6iqlOpCzoy3w9WVKjuHF8zcYrC7zSZO2rMLfSagRE9G6y91bbyan1Sn1u1l7q23k1Pql+Hl9G/g5/RL4IMvdJaYoTdOvrBo2nVjjahUnszjnmymsosev+k/+49FfGr6B2Vn4eSegQdYX+mbifY7fT+jatTDahSntzaXO0kss2S0drL3VtvJqfVHw8vos4s76iXwREtGay91bbyan1SmppzWXRy7NcxttIWsN9X1Pns0YLnlhpPdv5kxcMp8i8Wc9xL4NLqlrLb6Sto3Ns9z3Tg+3pz6UzdGHMAAAAAAAAAAAAACPeVG7lt21Fc2zUq4655UI+dkhEZ8qD9uW3+DH0xrH2s9oh1r09KM3Spv2NOTjHPM5rc5vrfzYNHQ09dU3tSltxzvhNR2Xw3cxXp6g5VJSW/2cvP/AKIwKtarUSjJNpNc6xjEVFb+9FFt8pa7m2u41IRqR7WcU0n0daOy1OsbatSqusqcqi2k1UaTgsbnh9HPvI70PFqEKafMsZe5LpbfA9q6ftovELepcJbnUlUVGL69iOG8d83b4XboleRoXE+xS2rfsrjJJ5jKGcZXFdDOmOAhcUq9KVW3247DSrUauOyUm+1aa3Si+bJ3FvPMYv3MfMg1Gt0dbRu9OWlKqtqjbW9W82HvjKqp9jjlcGov/wCksSZFup7/AOIJ/qmp/MRJKq1cHbhx3Ht6bHcVTmWpVTFrXJhVbw9mPE9+PGizT/Jje1Lq4q0alCdOrWqVYyqTlCpicnLElsves9ZrnyWaR67X42X1SWp3vEo9XcTH+jjXG9Bx36uA1V5N7yheW1avUoU6dCtCtKVKcpVZbLzsLdzPmfBsmONU5+F7xMqleG503ZPDph02PHNYt5CZdizVUbkzqVTJyzw0xnhpx2ocFZax6RsqXsbe4owuoU12sJuKlLC6N7fiSRLZEmiv7Xy/Vi8xLZ87Oayr5HJNZUABlgAAAAAAAAAAAjDlSfty1/wl6ZEnkXcq7xd2r6qGf3qNY+1iILnZzPbaS258/fZjUuwt4jOLfVmPzPz4MHTc26jg3iO3JP4f9fkLNzaRjGcoTi3CpGMdl737BSz3svGTW0tbys3sVIx3SdOcV38Gitq0EkpJ5T6OrHNj/fObS2quVOEn22N5TUt6UnmpBNvncZOGe/gv3LNq9W390uqiWKatJ02+janOOxHi8rP7LJKspfc4/ox8yI/hJKKhCMYU1vUIc211t9L4ndaOl9zj3l5hPDWK3qpLGnpv3pqfzETuby7wR9oOqlpuTXclrx9mjk32kb7n3n0+h4u7Hf3fU6KTs/bJur/iayvpDiai7v8AiayvfcT6s4pHtvJI31TSPEt+uPE5md9xLfq7iNRzvPHX09I8TMoaQ4nEU77iZlC/4l7JWpzSu/tb/ibqzuskd2l/xOi0bfc2848vBuLlZYq0JLOtzfvWvMiXiGtWJ7WtbfvYvMiZT83yzWdj4PN/Zl+QAHNzAAAAAAAAAAAIt5WY5uqC67WfpCUiKuVOrm9orHa28lnrzJP5y4+1iHtPaOe25NPe8trofWaVWjziUm11Yx85JU6cZdskyx62085xjvHTUasclRWEkU1aUpNbG/O7B20bboU6mOE5FatuudR/tyFm07XO6O0fPMdtNYxsxaxKT73QuJ2FtDZhGPUvlLFCjGHarx9JkKRVk00ltU2NLt9ejH8tbJd0nf73vNVpKvsaUg+vR6j/AJm/mNbpG93vefd/xmpwW/evVw83bhpfub3ia2recTAr3JiTrm+bqZGM+otbGV2U+qzVuqU9lPDer8uXxa3MLoyaV5xOfVUu06514+rWc1jrbW94nRaLv963keULo3mjb3et59Pj5JnHpw6l32otXa1nb97sf5UTgfPnJhdbWscpc/tXsfwxhvPoM/LdV/dn+a8fJd5WgAODAAAAAAAAAAABEvKm/b1P/A+eJLREfKtlX1LqdB4470XH2scpFlxMx0ytSOjW19MrTLCkVqQNr6ZVtFhSKtoptxOt9Xsd/Rl/48M/tSn9Jprq4y2bDX+Xtqnj81pfDtTNC5ZWfE++ezpOo7MMuP8AbFeTmW2w2Unm5eS2oZB4Dh3KqyeplB6amehfhMz7O4w0atMubWFnr3I+n03U9nm/JNpF5Fq23pvb66c8d7aikfS58w8hC/8A144/6M/g2on08fKzyuVuV+agAMgAAAAAAAAAABE/K+/bdr4NP0hLBE3LE/bdr4NU9Ii4+1jiFIrUiwpFSZ0VfUitSMdSMTSl3KEUovEpN7+lJc+PhAz7q6VODm1nmSS6W+ZF22qScIua2ZNZcVnd1fJg5WN5UW5Tlv6235+Y2Og5Tk5Nzk4LC2W28yff5gOf15/CKfg8fSVDQ0KiT3rMXukunHDib3Xf8Ip+Dx9JUOdMbsu4yybm2cUpL2VKXaTXM+D6pcDGMmyvZUm8KMoSwp06i2qc10ZXzrDXWZ8LW1r/AHqqrWq/+VdNug3v7Sslu700sflM1bMvMXTTg3FTVe9S2oW9StDnVS1xc08de1SckYnrRdZx6muM9XYqmfMY1TVYQNxDVi8xtVKEqEN2Z3bjawx15qtZ8WTyVC0odvU9V1Vn7nQ24WyfuqjSlLvRS/SLIaYNvb5TnL2NKLxKXXL8mPXItVqm09ywluiupFy8vJ1WnLCUd0IQSjThHqjFcxjlyy8aiJL+x+/HK8Fr/wBJ9MHzP9j9+OV4LX/pPpgwAAAAAAAAAAAAAARJyyP23a+DVPSIlsiLlnftu08GqfxouPtY4RMqUiypFSZ0VeTMLTFNuCkv7jef0Xz/ADGQpFWQObybDQtaSqbMVmMlmeehLp/31mdCzpLPsI7+vf8ABnmL1ChCGdiOM8/O2/hA5TXX7/T8Hj6Soc8dBrn9/peDx9JUNHQpbTxlJLfKT5ox6Wc77ZVWtrOrLYpRcpYb3YSSXO23uS4s2EaVpR++yldVF/coS7Hbp9TqtbU/2Ul7pmJXu/Y9ipLYo5W1+XVa5nN9PBcy+UxCDcx1hnDHqahaUNl+xcaEKtRft1tuWeKaMp69aUxh3lbZ/JexsY72MHOAuxuHp+U8+qLe0r5eZN0IUKnl0dh54vJTKha1vvE5W9Xf9yuZKVGXCNZJbPekkvdGpBBdubedOThUi4zXOpefiuJaMyld7UFSrZlTX3uXPOi/c+56483jMatTcXh44Nb010NcAJI+x/8AxyvBa/8ASfTB8z/Y/wD45Xgtf+k+mAAAAAAAAAAAAAAARBy1P23aeDVP40S+Q9y2P23aeDVf40XH2sR+mVKRa2ipM6KuqRUpFnaPVIC8mVKRZUipSA5fXH79S8Hj6SoamcXGKj14cu/0LxG81hpbd1bx66EW+8qlRvzGBe0d5rjw3LXLLLV01TR4XZwLbRysaeA9wCaV4D3B6kNDxIvqO1HHTHLj3ulfOUQgbKxob0duPDfhzzy07T7H/wDHK8Fr/MfTB82chNLY05KP5NvcLxbsH0mcbNeHSXYACAAAAAAAAAAABDvLf+F2ng1X0iJiIc5cPwuz8Gq+kRcfaxHSZ6mW8nqZ0VcUipSLWT1MC8meplpMqTAxZUdu9o8LGUv3k185a0hZb3uNroWlt6Qive2b/fs2mkdG8D0cX8P28fJf+qPa1oYs7c7C40dwMCpYcDnlHWVzToM87Cb+VjwKfUPA56b20aosuQtjdRsOBfpWHAsiWtTQtTdaOs96My20dwN7o7RvA9HHHDky8LnJLR2NY5rrtJy+GED6EIL5P6OxrO173t/5Yk6Hk5f5134/4T8AAMNgAAAAAAAAAAEN8uP4VZ+DVfSImQhrly/CrPwar/Giz2sRvk9yUZPUzaq8nuSjJ7koryeplGRkDd6lUtvSkV71VH/7J3F5o3PQclyaw2tLpe89T+aRKta0z0HTjz1NPJy47z2j250XwNbW0XwJFr6PXUYNXRnAtpEfS0ZwKPWzgd1PRfAt+tXAje3GR0XwMujovgdZDRfAy6WjOAiWuattF8243Vno7HQbmho/HQZ9K0wamenLLHbh9V6ezrW172/MiZyItEQxre172LzIl082d3lXqwmsZAAGWgAAAAAAAAAACGeXP8Ls/BqnpETMRFy62r27Kt/c2a1Fv3WVJfIn8BZ7IiwIA209B4AKsnuSkAddyV79ML9TVf5qJMsoEJ8m93Glpe0c2kriyurSL6OzKs6qj39nY8pE4kjnlPLGlRLUrZGaeYLtnTXO0XUeeo0bHB5sl2aYKtEXI2yMvB6kNmliNEuqBWek2uke2P8AbF/qtfwkskT6ryVzrXf16fsqdpawt5SW9dk2VGS8UtpeIlgxWwAEAAAAAAAAAAADU6z6BpX9tO2rblLDhNdtTqLmkjbAD5103qFpG1nJOhOtTXa1bdbcZL9Fb0+Bpnoe66ba4+KqfQfUYNdy7fLnrRdfm1x8VU+getF1+bXHxVT6D6jA7jb5c9aLr82uPiqn0D1ouvza4+KqfQfUYHcbfLktD3LjsyoXccTjUp1KdKoqtGtHtZw5vGsrO7flI7fRevulqMIwu9H+rcJJXFvJ0Ks1jnnSlHOfFFE2Am0RGuUu47i33lr6g+2Vcdxb7y19QlwDaaRH9sm47i33lr6g+2Tcdxb7y19QlwDa6RH9sm47i33lr6g+2Vcdxb7y19QlwDZpEf2ybnuLfeWvqFutrBp/SC7DYaNdjGfsZXVzPanCL53FNJRfHDJgA2acxqDqhT0VbdijLslepLbuaz56lTp8R04BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//Z',
			category: 'Tecnología',
		},
		{
			id: 3,
			title: 'Refrigeradora LG 18 pies',
			currentBid: '$320',
			timeLeft: '4h 15m',
			bids: 5,
			condition: 'Usado',
			location: 'Cuenca',
			image:
				'data:image/jpeg;base64,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',
			category: 'Electrodomésticos',
		},
		{
			id: 4,
			title: 'Chevrolet Aveo 2019 - Usado',
			currentBid: '$12,800',
			timeLeft: '6h 30m',
			bids: 15,
			condition: 'Usado',
			location: 'Ambato',
			image:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzsR9DsYQSUUtHHB075yvaSotu7_xeuoiRcg&s',
			category: 'Autos',
		},
	];

	const categories = [
		{
			name: 'Autos Siniestrados',
			icon: Settings,
			count: '2,500+',
			color: 'bg-red-100 text-red-600',
		},
		{ name: 'Autos Usados', icon: Settings, count: '1,800+', color: 'bg-blue-100 text-blue-600' },
		{ name: 'Tecnología', icon: Laptop, count: '950+', color: 'bg-purple-100 text-purple-600' },
		{ name: 'Mobiliario', icon: Home, count: '650+', color: 'bg-orange-100 text-orange-600' },
		{
			name: 'Equipos Industriales',
			icon: Wrench,
			count: '420+',
			color: 'bg-gray-100 text-gray-600',
		},
		{ name: 'Electrodomésticos', icon: Zap, count: '780+', color: 'bg-yellow-100 text-yellow-600' },
		{ name: 'Ramos Generales', icon: Star, count: '1,200+', color: 'bg-green-100 text-green-600' },
		{ name: 'Moda y Accesorios', icon: Shirt, count: '340+', color: 'bg-pink-100 text-pink-600' },
	];

	return (
		<>
			<div className="min-h-screen bg-white">
				{/* Header */}
				<header className="border-b bg-white sticky top-0 z-50">
					<div className="container mx-auto px-4">
						<div className="flex items-center justify-between h-16">
							<a href="#" className="flex items-center space-x-2">
								<div className="w-8 h-8 bg-[#5bcdb4] rounded-lg flex items-center justify-center">
									<Gavel className="w-4 h-4 text-white" />
								</div>
								<span className="text-xl font-bold text-gray-900">Compra Automática</span>
							</a>

							<nav className="hidden md:flex items-center space-x-8">
								<a href="#" className="text-gray-700 hover:text-[#5bcdb4] font-medium">
									Subastas Activas
								</a>
								<a href="#" className="text-gray-700 hover:text-[#5bcdb4] font-medium">
									Categorías
								</a>
								<a href="#" className="text-gray-700 hover:text-[#5bcdb4] font-medium">
									Cómo Funciona
								</a>
								<a href="#" className="text-gray-700 hover:text-[#5bcdb4] font-medium">
									Vender
								</a>
							</nav>

							<div className="flex items-center space-x-4">
								<button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5bcdb4]">
									Iniciar Sesión
								</button>
								<button className="px-4 py-2 text-sm font-medium text-white bg-[#5bcdb4] border border-transparent rounded-md hover:bg-[#4db5a0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5bcdb4]">
									Registrarse
								</button>
							</div>
						</div>
					</div>
				</header>

				{/* Hero Section */}
				<section className="bg-gradient-to-r from-[#5bcdb4] to-[#4db5a0] text-white py-16">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto text-center">
							<h1 className="text-4xl md:text-5xl font-bold mb-6">
								Subastas y Ventas de Autos Siniestrados, Usados y Más
							</h1>
							<p className="text-xl mb-8 text-teal-100">
								La plataforma líder en Ecuador para subastas de vehículos, tecnología, mobiliario y
								productos diversos
							</p>
							{/* call button */}
							<CallButton
								className={
									isCalling
										? 'btn-startCall-comprauto px-6 py-3 text-lg font-medium text-white bg-[#f44336] border border-red-900 rounded-md hover:bg-[#e53935] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f44336]'
										: 'btn-startCall-comprauto px-6 py-3 text-lg font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#000]'
								}
								isCalling={isCalling}
								label={
									isLoading
										? 'Llamando...'
										: isCalling
										? 'Detener llamada'
										: 'Pregunta a un experto'
								}
								onClick={isLoading ? () => {} : toggleCall}
							/>

							{/* Search Form */}
							{/* <div className="bg-white rounded-lg p-6 shadow-xl">
							<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
								<select className="w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5bcdb4] focus:border-transparent">
									<option value="">Categoría</option>
									<option value="autos-siniestrados">Autos Siniestrados</option>
									<option value="autos-usados">Autos Usados</option>
									<option value="tecnologia">Tecnología</option>
									<option value="mobiliario">Mobiliario</option>
									<option value="equipos-industriales">Equipos Industriales</option>
									<option value="electrodomesticos">Electrodomésticos</option>
									<option value="ramos-generales">Ramos Generales</option>
									<option value="moda-accesorios">Moda y Accesorios</option>
								</select>

								<select className="w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5bcdb4] focus:border-transparent">
									<option value="">Ciudad</option>
									<option value="quito">Quito</option>
									<option value="guayaquil">Guayaquil</option>
									<option value="cuenca">Cuenca</option>
									<option value="ambato">Ambato</option>
									<option value="machala">Machala</option>
								</select>

								<input
									type="text"
									placeholder="Buscar productos..."
									className="w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5bcdb4] focus:border-transparent"
								/>
							</div>

							<div className="flex flex-col sm:flex-row gap-3">
								<button className="flex-1 flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-[#5bcdb4] border border-transparent rounded-md hover:bg-[#4db5a0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5bcdb4]">
									<Search className="w-5 h-5 mr-2" />
									Buscar Subastas
								</button>
								<button className="flex-1 flex items-center justify-center px-6 py-3 text-lg font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5bcdb4]">
									<Gavel className="w-5 h-5 mr-2" />
									Ver Subastas Activas
								</button>
							</div>
						</div> */}
						</div>
					</div>
				</section>

				{/* Stats Section */}
				<section className="py-12 bg-gray-50">
					<div className="container mx-auto px-4">
						<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
							<div>
								<div className="text-3xl font-bold text-[#5bcdb4] mb-2">8,500+</div>
								<div className="text-gray-600">Productos en Subasta</div>
							</div>
							<div>
								<div className="text-3xl font-bold text-[#5bcdb4] mb-2">150+</div>
								<div className="text-gray-600">Subastas Diarias</div>
							</div>
							<div>
								<div className="text-3xl font-bold text-[#5bcdb4] mb-2">25,000+</div>
								<div className="text-gray-600">Compradores Activos</div>
							</div>
							<div>
								<div className="text-3xl font-bold text-[#5bcdb4] mb-2">95%</div>
								<div className="text-gray-600">Satisfacción</div>
							</div>
						</div>
					</div>
				</section>

				{/* Active Auctions */}
				<section className="py-16">
					<div className="container mx-auto px-4">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold text-gray-900 mb-4">Subastas Activas</h2>
							<p className="text-gray-600 max-w-2xl mx-auto">
								Participa en nuestras subastas en tiempo real y encuentra las mejores ofertas
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							{activeAuctions.map((auction) => (
								<div
									key={auction.id}
									className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
								>
									<div className="relative">
										<img
											src={auction.image || '/placeholder.svg'}
											alt={auction.title}
											width={300}
											height={200}
											className="w-full h-48 object-cover"
										/>
										<span className="absolute top-2 left-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#5bcdb4] text-white">
											{auction.category}
										</span>
										<span
											className={`absolute top-2 right-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-white ${
												auction.condition === 'Siniestrado' ? 'bg-red-500' : 'bg-blue-500'
											}`}
										>
											{auction.condition}
										</span>
									</div>
									<div className="p-4">
										<h3 className="font-semibold text-lg mb-2 line-clamp-2">{auction.title}</h3>

										<div className="flex items-center justify-between mb-3">
											<div>
												<div className="text-sm text-gray-500">Oferta actual</div>
												<div className="text-2xl font-bold text-[#5bcdb4]">
													{auction.currentBid}
												</div>
											</div>
											<div className="text-right">
												<div className="text-sm text-gray-500">Tiempo restante</div>
												<div className="text-lg font-semibold text-red-600 flex items-center">
													<Clock className="w-4 h-4 mr-1" />
													{auction.timeLeft}
												</div>
											</div>
										</div>

										<div className="space-y-2 text-sm text-gray-600 mb-4">
											<div className="flex items-center justify-between">
												<span className="flex items-center">
													<TrendingUp className="w-4 h-4 mr-1" />
													{auction.bids} ofertas
												</span>
												<span className="flex items-center">
													<MapPin className="w-4 h-4 mr-1" />
													{auction.location}
												</span>
											</div>
										</div>

										<button className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-[#5bcdb4] border border-transparent rounded-md hover:bg-[#4db5a0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5bcdb4]">
											<Gavel className="w-4 h-4 mr-2" />
											Ofertar Ahora
										</button>
									</div>
								</div>
							))}
						</div>

						<div className="text-center mt-8">
							<button className="mr-4 px-6 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5bcdb4]">
								Ver Todas las Subastas
							</button>
							<button className="px-6 py-3 text-base font-medium text-white bg-[#5bcdb4] border border-transparent rounded-md hover:bg-[#4db5a0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5bcdb4]">
								<Gavel className="w-5 h-5 mr-2 inline" />
								Crear Alerta de Subasta
							</button>
						</div>
					</div>
				</section>

				{/* Categories Section */}
				<section className="py-16 bg-gray-50">
					<div className="container mx-auto px-4">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestras Categorías</h2>
							<p className="text-gray-600">
								Explora todas las categorías disponibles en nuestras subastas
							</p>
						</div>

						<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
							{categories.map((category) => (
								<div
									key={category.name}
									className="bg-white rounded-lg shadow-sm text-center group cursor-pointer hover:shadow-lg transition-shadow"
								>
									<div className="p-6">
										<div
											className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}
										>
											<category.icon className="w-8 h-8" />
										</div>
										<h3 className="font-semibold text-lg mb-2">{category.name}</h3>
										<p className="text-[#5bcdb4] font-medium">{category.count}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* How it Works */}
				<section className="py-16">
					<div className="container mx-auto px-4">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold text-gray-900 mb-4">¿Cómo Funciona?</h2>
							<p className="text-gray-600">Participa en nuestras subastas en 3 simples pasos</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<div className="text-center">
								<div className="w-16 h-16 bg-[#5bcdb4] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
									1
								</div>
								<h3 className="text-xl font-semibold mb-3">Regístrate</h3>
								<p className="text-gray-600">
									Crea tu cuenta gratuita y verifica tu identidad para participar en las subastas
								</p>
							</div>

							<div className="text-center">
								<div className="w-16 h-16 bg-[#5bcdb4] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
									2
								</div>
								<h3 className="text-xl font-semibold mb-3">Explora y Oferta</h3>
								<p className="text-gray-600">
									Busca productos de tu interés y realiza ofertas en tiempo real durante las
									subastas
								</p>
							</div>

							<div className="text-center">
								<div className="w-16 h-16 bg-[#5bcdb4] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
									3
								</div>
								<h3 className="text-xl font-semibold mb-3">Gana y Compra</h3>
								<p className="text-gray-600">
									Si tu oferta es la ganadora, completa el pago y coordina la entrega del producto
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Trust Section */}
				<section className="py-16 bg-[#5bcdb4] text-white">
					<div className="container mx-auto px-4">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold mb-4">¿Por Qué Elegirnos?</h2>
							<p className="text-teal-100 max-w-2xl mx-auto">
								Somos la plataforma de subastas más confiable de Ecuador
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<div className="text-center">
								<Shield className="w-12 h-12 mx-auto mb-4" />
								<h3 className="text-xl font-semibold mb-3">Transacciones Seguras</h3>
								<p className="text-teal-100">
									Todas las transacciones están protegidas con tecnología de encriptación avanzada
								</p>
							</div>

							<div className="text-center">
								<Star className="w-12 h-12 mx-auto mb-4" />
								<h3 className="text-xl font-semibold mb-3">Productos Verificados</h3>
								<p className="text-teal-100">
									Cada producto pasa por un proceso de verificación antes de ser subastado
								</p>
							</div>

							<div className="text-center">
								<Phone className="w-12 h-12 mx-auto mb-4" />
								<h3 className="text-xl font-semibold mb-3">Soporte Especializado</h3>
								<p className="text-teal-100">
									Nuestro equipo de expertos te acompaña durante todo el proceso
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Footer */}
				<footer className="bg-gray-900 text-white py-12">
					<div className="container mx-auto px-4">
						<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
							<div>
								<div className="flex items-center space-x-2 mb-4">
									<div className="w-8 h-8 bg-[#5bcdb4] rounded-lg flex items-center justify-center">
										<Gavel className="w-4 h-4 text-white" />
									</div>
									<span className="text-xl font-bold">Compra Automática</span>
								</div>
								<p className="text-gray-400 mb-4">
									La plataforma líder en Ecuador para subastas de autos siniestrados, usados y
									productos diversos
								</p>
								<div className="flex space-x-4">
									<Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
									<Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
									<Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
								</div>
							</div>

							<div>
								<h4 className="font-semibold mb-4">Categorías</h4>
								<ul className="space-y-2 text-gray-400">
									<li>
										<a href="#" className="hover:text-white">
											Autos Siniestrados
										</a>
									</li>
									<li>
										<a href="#" className="hover:text-white">
											Autos Usados
										</a>
									</li>
									<li>
										<a href="#" className="hover:text-white">
											Tecnología
										</a>
									</li>
									<li>
										<a href="#" className="hover:text-white">
											Electrodomésticos
										</a>
									</li>
								</ul>
							</div>

							<div>
								<h4 className="font-semibold mb-4">Servicios</h4>
								<ul className="space-y-2 text-gray-400">
									<li>
										<a href="#" className="hover:text-white">
											Subastas en Vivo
										</a>
									</li>
									<li>
										<a href="#" className="hover:text-white">
											Evaluación de Productos
										</a>
									</li>
									<li>
										<a href="#" className="hover:text-white">
											Financiamiento
										</a>
									</li>
									<li>
										<a href="#" className="hover:text-white">
											Logística
										</a>
									</li>
								</ul>
							</div>

							<div>
								<h4 className="font-semibold mb-4">Contacto</h4>
								<div className="space-y-2 text-gray-400">
									<div className="flex items-center">
										<Phone className="w-4 h-4 mr-2" />
										<span>1800-SUBASTA</span>
									</div>
									<div className="flex items-center">
										<Mail className="w-4 h-4 mr-2" />
										<span>info@compraautomatica.com.ec</span>
									</div>
									<div className="flex items-center">
										<MapPin className="w-4 h-4 mr-2" />
										<span>Quito, Ecuador</span>
									</div>
								</div>
							</div>
						</div>

						<div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
							<p>
								&copy; {new Date().getFullYear()} Compra Automática. Todos los derechos reservados.
							</p>
						</div>
					</div>
				</footer>
			</div>
			<ChatWidget
				webhookUrl="https://iaconnectsolution.app.n8n.cloud/webhook/0a8a95d7-cd0a-4335-abbd-365a983716a7/chat"
				route="general"
				logo="https://aiconnect.flec-ec.com/aiconnect.jpg"
				name="Compra Automática"
				welcomeText="Empecemos un Chat con Compra automática AI"
				subtitleWelcome="¿Tienes alguna pregunta? ¡Hablemos! Te ayudaremos en segundos."
				responseTimeText="Hola!. ¿Estás listo para chatear con Compra automática AI?"
				poweredByText="Powered by AI Connect Solutions"
				poweredByLink="https://aiconnectsolutions.io/"
				primaryColor="#5acbb2"
				secondaryColor="#5acbb2"
				backgroundColor="#fff"
				backgroundColorSecondary="#fff"
				fontColor="#000"
			/>
		</>
	);
};
