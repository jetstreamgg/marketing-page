import { ExternalLink } from '../ExternalLink';
import { PopoverInfo } from '../PopoverInfo';
import { Heading, Text, List, ListVariant, TextVariant } from '../Typography';
import { SafeMarkdownRenderer } from './SafeMarkdownRenderer';

// TODO: Remove what we don't use and add List component
export const FAQMarkdownRenderer = ({
  markdown,
  ulVariant = 'unordered',
  pVariant = 'p1'
}: {
  markdown: string;
  ulVariant?: ListVariant;
  pVariant?: TextVariant;
}) => (
  <SafeMarkdownRenderer
    markdown={markdown}
    components={{
      h1: ({ children, ...props }) => (
        <Heading tag="h1" className="pb-3" {...props}>
          {children}
        </Heading>
      ),
      h2: ({ children, ...props }) => (
        <Heading tag="h2" className="pb-3" {...props}>
          {children}
        </Heading>
      ),
      h3: ({ children, ...props }) => (
        <Heading tag="h3" className="pb-3" {...props}>
          {children}
        </Heading>
      ),
      // h4: ({ children, ...props }) => (
      //   <Heading tag="h4" variant="small" className="pb-3" {...props}>
      //     {children}
      //   </Heading>
      // ),
      p: ({ children, ...props }) => (
        <Text variant={pVariant} className="pb-3" {...props}>
          {children}
        </Text>
      ),
      span: ({ children, ...props }) => (
        <Text tag="span" {...props}>
          {children}
        </Text>
      ),
      a: ({ children, href, ...props }) => {
        // Handle tooltip syntax: [text](#tooltip-type)
        if (href?.startsWith('#tooltip-')) {
          const tooltipId = href.replace('#tooltip-', '') as
            | 'str'
            | 'ssr'
            | 'psm'
            | 'srr'
            | 'stusds'
            | 'sky-savings-rate'
            | 'liquidation-price-staking';
          return (
            <span className="inline-flex items-center gap-1">
              {children}
              <PopoverInfo type={tooltipId} />
            </span>
          );
        }

        // Handle regular links
        return (
          <ExternalLink className="text-[#947EFF] hover:underline" href={href || ''} {...props}>
            <Text tag="span">{children}</Text>
          </ExternalLink>
        );
      },
      ul: ({ children, ...props }) => (
        <List className="pb-3" variant={ulVariant} {...props}>
          {children}
        </List>
      ),
      ol: ({ children, ...props }) => (
        <List variant="ordered" tag="ol" className="pb-3" {...props}>
          {children}
        </List>
      )
    }}
  />
);

const plainText: React.ComponentType<React.HTMLAttributes<HTMLElement>> = ({ children }) => (
  <Text tag="span" variant="ui-medium" className="text-gray-400">
    {children}
  </Text>
);

export const FAQSearchResultMarkdownRenderer = ({ markdown }: { markdown: string }) => (
  <SafeMarkdownRenderer
    markdown={markdown}
    components={{
      h1: plainText,
      h2: plainText,
      h3: plainText,
      h4: plainText,
      p: plainText,
      span: plainText,
      a: plainText,
      strong: plainText,
      em: plainText,
      li: plainText,
      ul: plainText,
      ol: plainText,
      br: () => null
    }}
  />
);
