import Navbar from '../components/Navbar'; // Importa el componente Navbar

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <section className="hero min-h-screen bg-blue-200 flex items-center justify-center">
        <h1 className="text-5xl font-bold text-gray-800">Bienvenido a mi Sitio Web</h1>
      </section>
    </div>
  );
};

export default Home;
