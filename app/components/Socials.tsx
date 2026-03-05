import { IconButton } from './ui/button';
import { Chat, Discord, Twitter } from './icons';
import { cn } from '../lib/utils';
import { ExternalLink } from './ExternalLink';

export function Socials({
  variant = 'glass-dark',
  className
}: {
  variant?: 'glass-dark' | 'outline';
  className?: string;
}) {
  const socials = [
    {
      icon: Twitter,
      href: 'https://x.com/SkyDotMoney'
    },
    {
      icon: Discord,
      href: 'https://discord.gg/skyecosystem'
    },
    {
      icon: Chat,
      href: 'https://forum.makerdao.com/'
    }
  ];
  return (
    <div className={cn('flex gap-2', className)}>
      {socials.map(({ icon, href }) => (
        <ExternalLink key={icon.name} href={href} noStyle>
          <IconButton icon={icon} variant={variant} />
        </ExternalLink>
      ))}
    </div>
  );
}
