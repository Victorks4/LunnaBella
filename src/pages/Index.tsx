
const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Redirecionamento para o HTML estático */}
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="font-playfair text-6xl font-bold mb-6 text-warm">
            Elegância Atemporal
          </h1>
          <div className="w-24 h-1 bg-soft-pink mx-auto mb-6"></div>
          <p className="text-xl text-warm mb-8 font-inter">
            Seu catálogo de moda feminina está sendo preparado com todo carinho e elegância que você merece.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="font-playfair text-xl font-semibold mb-3 text-warm">Elegância Atemporal</h3>
              <p className="text-gray-600">Peças clássicas para mulheres sofisticadas</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="font-playfair text-xl font-semibold mb-3 text-warm">Estilo Jovem</h3>
              <p className="text-gray-600">Tendências atuais com toque de classe</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="font-playfair text-xl font-semibold mb-3 text-warm">Moda Modesta</h3>
              <p className="text-gray-600">Elegância e modéstia em harmonia</p>
            </div>
          </div>
          <p className="text-warm font-inter">
            <span className="font-semibold">Navegue pelo arquivo HTML</span> para visualizar o catálogo completo criado especialmente para você.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
