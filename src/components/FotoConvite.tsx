import React from "react";

interface FotoConviteProps {
  src: string;
  nome: string;
  idade: number;
  data: string;
  hora: string;
}

export const FotoConvite: React.FC<FotoConviteProps> = ({
  src,
  nome,
  idade,
  data,
  hora,
}) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: 520,
        borderRadius: 20,
        overflow: "hidden",
        boxShadow: "0 4px 32px rgba(0,0,0,0.3)",
        background: "#222",
        color: "#fff",
        fontFamily: "sans-serif",
      }}
    >
      <img
        src={src}
        alt={nome}
        style={{
          width: "100%",
          height: 260,
          objectFit: "cover",
          filter: "brightness(0.85)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 180,
          left: 0,
          width: "100%",
          padding: "24px 0 0 0",
          background: "linear-gradient(180deg, rgba(0,0,0,0.0) 0%, #222 60%)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 35,
            fontWeight: 700,
            letterSpacing: 2,
            color: "#fff",
            textShadow: "0 2px 8px #000",
            marginBottom: 15,
          }}
        >
          Comemoração{" "}
        </div>
        <div
          style={{
            fontSize: 24,
            fontWeight: 700,
            color: "#ffb6e6",
            marginBottom: 8,
          }}
        >
          {nome.toUpperCase()}
        </div>
        <div
          style={{
            fontSize: 18,
            marginBottom: 16,
          }}
        >
          FAZ {idade} ANOS
        </div>
        <div
          style={{
            borderTop: "1px solid #444",
            width: 80,
            margin: "0 auto 16px auto",
          }}
        />
        <div
          style={{
            fontSize: 16,
            letterSpacing: 1,
          }}
        >
          SBADO, {data.toUpperCase()} ÀS {hora}
        </div>
      </div>
    </div>
  );
};
