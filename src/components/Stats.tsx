const Stats = () => {
  const stats = [
    { value: "24h", label: "Disponível por dia" },
    { value: "95%", label: "Redução no tempo de atendimento" },
    { value: "+10 horas", label: "Livres por semana para cuidar das clientes" },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary via-[hsl(290,60%,55%)] to-[hsl(300,65%,65%)] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nossos números falam por si</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold mb-3 bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-white/80 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;