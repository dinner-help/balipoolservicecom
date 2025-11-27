interface HeroBackgroundProps {
  image: string;
  overlayOpacity?: number;
  className?: string;
  children: React.ReactNode;
}

export function HeroBackground({ 
  image, 
  overlayOpacity = 50, 
  className = "",
  children 
}: HeroBackgroundProps) {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${image})` }}
      />
      {/* White Overlay for text readability */}
      <div 
        className="absolute inset-0" 
        style={{ backgroundColor: `rgba(255, 255, 255, ${overlayOpacity / 100})` }}
      />
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}
