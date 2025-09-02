export function EmptyState() {
  return (
    <div className="text-center py-16">
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 max-w-md mx-auto">
        <h3 className="text-xl font-medium text-white/90 mb-3">
          Nenhuma criptomoeda encontrada
        </h3>
        <p className="text-white/60">
          Tente buscar por outro termo ou verifique a ortografia.
        </p>
      </div>
    </div>
  );
}