import Navbar from '../components/Navbar';

export default function Landing() {
  return (
    <div>
      <Navbar />
      <section className="min-h-screen bg-green-200 flex items-center justify-center">
      <section className="hero min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
  <div className="text-center">
    <h1 className="text-6xl font-extrabold text-white">¡Hola! Soy un experto en Marketing</h1>
    <p className="text-lg mt-4 text-gray-200">Transforma tu negocio con estrategias digitales.</p>
    <button className="mt-6 bg-white text-purple-500 px-4 py-2 rounded shadow-lg hover:bg-purple-500 hover:text-white">
      Ver más
    </button>
  </div>
</section>
      </section>
    </div>
  );
}
