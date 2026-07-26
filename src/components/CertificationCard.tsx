interface CertificationCardProps {
  icon: string;
  badge: string;
  title: string;
  issuer: string;
}

export default function CertificationCard({ icon, badge, title, issuer }: CertificationCardProps) {
  return (
    <div className="bg-surface-dark p-5 rounded-2xl border border-gray-800 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1">
      <div className="flex items-start justify-between mb-4">
        <span className="material-symbols-outlined text-primary text-3xl">{icon}</span>
        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
          {badge}
        </span>
      </div>
      <h4 className="font-display font-bold text-lg mb-1 group-hover:text-primary transition-colors">
        {title}
      </h4>
      <p className="text-sm text-gray-400">{issuer}</p>
    </div>
  );
}
