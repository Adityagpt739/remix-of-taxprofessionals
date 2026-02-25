
import React from "react";

interface AboutHeaderProps {
  title: string;
  description: string;
}

const AboutHeader = ({ title, description }: AboutHeaderProps) => {
  return (
    <div className="text-center pt-10 pb-16 md:py-20 px-6 bg-gradient-to-b from-secondary/40 to-background">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 reveal-on-scroll">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mx-auto leading-relaxed reveal-on-scroll" style={{ transitionDelay: "0.2s" }}>
          {description}
        </p>
        <div className="w-24 h-1 bg-primary/30 mx-auto mt-8 rounded-full reveal-on-scroll" style={{ transitionDelay: "0.3s" }}></div>
      </div>
    </div>
  );
};

export default AboutHeader;
