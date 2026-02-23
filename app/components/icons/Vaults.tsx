import { IconProps } from './Icon';
import { IconVariantEnum, VariantIcon } from './VariantIcon';

export const Vaults = ({
  variant = IconVariantEnum.mono,
  ...props
}: IconProps & { variant?: IconVariantEnum }) => (
  <VariantIcon
    {...props}
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    variant={variant}
    monoIcon={
      <g id="type=mono">
        <rect x="4" y="6" width="32" height="28" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
        <line x1="4" y1="14" x2="36" y2="14" stroke="currentColor" strokeWidth="2" />
        <circle cx="20" cy="24" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="20" cy="24" r="1.5" fill="currentColor" />
      </g>
    }
    colorIcon={
      <g id="type=mono">
        <rect x="4" y="6" width="32" height="28" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
        <line x1="4" y1="14" x2="36" y2="14" stroke="currentColor" strokeWidth="2" />
        <circle cx="20" cy="24" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="20" cy="24" r="1.5" fill="currentColor" />
      </g>
    }
  />
);
