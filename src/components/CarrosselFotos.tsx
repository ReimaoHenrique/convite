import React, { useState } from "react";

interface CarrosselFotosProps {
  imagens: string[];
  intervalo?: number; // em ms
}

export const CarrosselFotos: React.FC<CarrosselFotosProps> = ({
  imagens,
  intervalo = 3000,
}) => {
  const [indice, setIndice] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndice((prev) => (prev + 1) % imagens.length);
    }, intervalo);
    return () => clearInterval(timer);
  }, [imagens.length, intervalo]);

  return (
    <div
      style={{
        position: "relative",
        width: 350,
        height: 350,
        overflow: "hidden",
        borderRadius: 16,
        boxShadow: "0 2px 16px rgba(0,0,0,0.15)",
        background: "#111",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {imagens.map((img, i) => (
        <img
          key={img + i}
          src={img}
          alt={`Foto ${i + 1}`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: i === indice ? 1 : 0,
            transition: "opacity 0.7s",
          }}
        />
      ))}
      {/* Bolinhas de navegação */}
      <div
        style={{
          position: "absolute",
          bottom: 12,
          left: 0,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: 8,
        }}
      >
        {imagens.map((_, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: i === indice ? "#ffb6e6" : "#fff",
              opacity: i === indice ? 1 : 0.5,
              transition: "background 0.3s, opacity 0.3s",
              cursor: "pointer",
            }}
            onClick={() => setIndice(i)}
          />
        ))}
      </div>
    </div>
  );
};
