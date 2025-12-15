import React from "react";
import styled, { css, keyframes } from "styled-components";

function cn(...classes: (string | undefined | false | null)[]) {
     return classes.filter(Boolean).join(" ");
}

const pulse = keyframes`
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
`;

const SkeletonDiv = styled.div<{ className?: string }>`
     border-radius: 0.375rem; /* equivalente a rounded-md */
     background-color: #e5e7eb; /* bg-muted */
     animation: ${pulse} 1.5s ease-in-out infinite;

     ${({ className }) =>
          className &&
          css`
               ${className}
          `}
`;

type SkeletonProps = React.HTMLAttributes<HTMLDivElement>;

const Skeleton: React.FC<SkeletonProps> = ({ className, ...props }) => {
     return <SkeletonDiv className={cn(className)} {...props} />;
};

export { Skeleton };
