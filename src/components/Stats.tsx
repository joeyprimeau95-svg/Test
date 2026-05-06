const stats = [
  { value: '40+', label: 'Clients Served' },
  { value: '72h', label: 'Avg. First Draft' },
  { value: '4.9★', label: 'Average Rating' },
  { value: '100%', label: 'On-Time Delivery' },
];

export default function Stats() {
  return (
    <div className="bg-sky-500">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(s => (
            <div key={s.label} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-white mb-1.5">{s.value}</div>
              <div className="text-sm font-bold text-white/70 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
