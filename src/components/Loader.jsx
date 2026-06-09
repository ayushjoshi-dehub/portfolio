import React from "react";
import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  const formattedProgress = Math.floor(progress);

  return (
    <Html center>
      {/* Complete animation keyframes injected directly via scoped style element */}
      <style>{`
        @keyframes quantumSpinClockwise {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes quantumSpinCounter {
          0% { transform: translate(-50%, -50%) rotate(360deg); }
          100% { transform: translate(-50%, -50%) rotate(0deg); }
        }
        @keyframes pulseCore {
          0%, 100% { transform: translate(-50%, -50%) scale(0.9); opacity: 0.8; filter: drop-shadow(0 0 15px #33c2cc); }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; filter: drop-shadow(0 0 35px #00ff15); }
        }
        @keyframes matrixGlitch {
          0%, 100% { text-shadow: 0 0 8px rgba(51,194,204,0.6); }
          50% { text-shadow: 0 0 18px rgba(51,194,204,0.9), -1px -1px 0 #9900ff, 1px 1px 0 #00ff15; }
        }
        
        .ring-outer {
          animation: quantumSpinClockwise 4s linear infinite;
        }
        .ring-inner {
          animation: quantumSpinCounter 2.5s linear infinite;
        }
        .energy-core {
          animation: pulseCore 2s ease-in-out infinite;
        }
        .glitch-text {
          animation: matrixGlitch 3s infinite;
        }
      `}</style>

      <div 
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
          userSelect: "none",
          pointerEvents: "none",
          fontFamily: "monospace",
          backgroundColor: "rgba(3, 3, 6, 0.4)",
          backdropFilter: "blur(4px)"
        }}
      >
        {/* Portal Animation Ring Box */}
        <div style={{ position: "relative", width: "220px", height: "220px", marginBottom: "2rem" }}>
          
          {/* Outer Segmented Orbital Ring */}
          <div 
            className="ring-outer"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              border: "3px dashed rgba(51, 194, 204, 0.4)",
              borderTopColor: "#33c2cc",
              borderBottomColor: "#9900ff",
              boxShadow: "0 0 20px rgba(51, 194, 204, 0.15)"
            }}
          />

          {/* Inner Fast Velocity Tracker Ring */}
          <div 
            className="ring-inner"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "130px",
              height: "130px",
              borderRadius: "50%",
              border: "2px dotted rgba(0, 255, 21, 0.3)",
              borderLeftColor: "#00ff15",
              borderRightColor: "transparent"
            }}
          />

          {/* Central Pulsing Plasma Node */}
          <div 
            className="energy-core"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "55px",
              height: "55px",
              borderRadius: "50%",
              background: "radial-gradient(circle, #ffffff 0%, #33c2cc 60%, #0d0d13 100%)",
            }}
          />
        </div>

        {/* Digital Value Matrix Display Panel */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "260px" }}>
          
          {/* Main Percentage Heading */}
          <span 
            className="glitch-text"
            style={{
              fontSize: "2.2rem",
              fontWeight: "900",
              color: "#ffffff",
              letterSpacing: "3px",
              marginBottom: "0.5rem",
              transition: "all 0.1s ease"
            }}
          >
            {formattedProgress}%
          </span>

          <span 
            style={{
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "4px",
              color: "rgba(255, 255, 255, 0.4)",
              marginBottom: "1rem"
            }}
          >
            Initializing Engine
          </span>

          {/* Linear Progress Underbar Track */}
          <div 
            style={{
              width: "100%",
              height: "4px",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              borderRadius: "9px",
              overflow: "hidden",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              boxShadow: "inset 0 1px 3px rgba(0,0,0,0.5)"
            }}
          >
            <div 
              style={{
                width: `${progress}%`,
                height: "100%",
                background: "linear-gradient(90deg, #9900ff 0%, #33c2cc 50%, #00ff15 100%)",
                boxShadow: "0 0 10px #33c2cc",
                transition: "width 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
              }}
            />
          </div>
        </div>

      </div>
    </Html>
  );
};

export default Loader;