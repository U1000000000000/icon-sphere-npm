import React from "react";
export declare const PARTICLE_ICONS: string[];
export declare const VIBRANT_COLORS: string[];
interface CustomIconProps {
    type: string;
    size: number;
    color: string;
    rotation: number;
    animationPhase: number;
    animate?: boolean;
}
export declare const CustomIcon: React.FC<CustomIconProps>;
export {};
