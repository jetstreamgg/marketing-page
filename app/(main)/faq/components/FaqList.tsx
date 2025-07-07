import { useSearchFaq } from '../hooks/useSearchFaq';
import { useCallback, useEffect, useState, useRef } from 'react';
import { useDebounce } from '@/app/hooks/useDebounce';
import { EmphasisHeading } from '@/app/components/EmphasisHeading';
import SearchHistory from './SearchHistory';
import SearchResult from './SearchResult';
import { CustomPagination } from '@/app/components/CustomPagination';
import { Accordion } from '@/app/components/ui/accordion';
import { Heading, Text } from '@/app/components/Typography';
import { ChevronRight } from '@/app/components/icons';
import SearchHeader from './SearchHeader';
import { Socials } from '@/app/components/Socials';
import { categories, ALL_FAQS } from '../faqData/types';

const PAGE_SIZE = 10;

export default function FaqList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState(ALL_FAQS);
  const debouncedSearchTerm = useDebounce(searchTerm.trim(), 500);
  const [page, setPage] = useState(1);
  const [openItems, setOpenItems] = useState<string[]>([]);
  const { items: results, totalItems } = useSearchFaq({
    searchTerm: searchTerm ? debouncedSearchTerm : '',
    category: category === ALL_FAQS ? '' : category,
    page,
    pageSize: PAGE_SIZE
  });

  // TODO: Add an empty array if we don't want this defaults
  const [searchedTerms, setSearchedTerms] = useState([
    'Sky Protocol & Ecosystem',
    'Sky Tokens',
    'Upgrade',
    'Trade',
    'Sky Savings Rate',
    'Sky Token Rewards'
  ]);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value ? '' : ALL_FAQS);
    setSearchTerm(e.target.value);
    setPage(1);
  }, []);
  const handleCategoryClick = useCallback((selectedCategory: string) => {
    setSearchTerm('');
    setCategory(selectedCategory);
    setPage(1);
  }, []);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const titleParts = getTitleParts(
    category,
    totalItems,
    searchTerm ? debouncedSearchTerm : searchTerm,
    isSearchFocused
  );

  const showResults = !isSearchFocused || debouncedSearchTerm !== '';
  const noResults = searchTerm && results.length === 0;

  useEffect(() => {
    if (debouncedSearchTerm) {
      setSearchedTerms(prev => {
        const uniqueTerms = new Set([debouncedSearchTerm, ...prev]);
        return Array.from(uniqueTerms).slice(0, 5);
      });
    }
  }, [debouncedSearchTerm]);

  const searchHeaderRef = useRef<HTMLDivElement>(null);

  // Scroll to SearchHeader when the category changes and is not ALL_FAQS
  useEffect(() => {
    if (category !== ALL_FAQS && searchHeaderRef.current) {
      searchHeaderRef.current.scrollIntoView({ block: 'start' });
      window.scrollBy({ top: -16 }); //16px buffer above the header
    }
  }, [category]);

  // Scroll to SearchHeader when the page changes and is not 1
  useEffect(() => {
    if (page !== 1 && searchHeaderRef.current) {
      searchHeaderRef.current.scrollIntoView({ block: 'start' });
      window.scrollBy({ top: -16 }); //16px buffer above the header
    }
  }, [page]);

  return (
    <div className="mt-10 text-left">
      <div ref={searchHeaderRef}>
        <SearchHeader
          category={category}
          categories={categories}
          isSearchFocused={isSearchFocused}
          searchTerm={searchTerm}
          onCategoryClick={handleCategoryClick}
          onSearchChange={handleSearchChange}
          onInputFocus={() => {
            setIsSearchFocused(true);
            setCategory('');
          }}
          onCloseClick={() => {
            setIsSearchFocused(false);
            setSearchTerm('');
            setCategory(ALL_FAQS);
          }}
          onClearClick={() => {
            setSearchTerm('');
          }}
        />
      </div>
      <div className="flex flex-col desktop:flex-row desktop:justify-between">
        <div className="w-full">
          <EmphasisHeading
            tag="h2"
            text={titleParts.text}
            emphasisText={titleParts.emphasis}
            textClassName="desktop:tracking-[-3.28px]"
            emphasisClassName="text-highlightDarkBG"
          />
          {noResults && (
            <>
              <Text className="mt-6">Please try searching again or explore the Technical Documentation.</Text>
              <button
                onClick={() => {
                  handleCategoryClick(ALL_FAQS);
                  setSearchTerm('');
                  setIsSearchFocused(false);
                }}
                className="mt-6 flex items-center gap-2"
              >
                See All FAQs
                <ChevronRight />
              </button>
            </>
          )}
          <div className="mt-10">
            {showResults ? (
              <>
                <Accordion
                  key={results[0]?.item.question}
                  type="multiple"
                  defaultValue={[]}
                  className={!!results[0] ? 'border-t border-black pt-8' : ''}
                  onValueChange={setOpenItems}
                >
                  {results.map((result, index) => (
                    <SearchResult
                      key={`${category}-${result.item.question}`}
                      item={result.item}
                      showPreview={!!searchTerm && !openItems.includes(result.item.question)}
                      onCategorySelected={cat => {
                        setCategory(cat);
                        setSearchTerm('');
                        setIsSearchFocused(false);
                      }}
                      isLast={index === results.length - 1}
                    />
                  ))}
                </Accordion>
                <CustomPagination
                  key={`${category}-${searchTerm}`}
                  dataLength={totalItems}
                  itemsPerPage={PAGE_SIZE}
                  onPageChange={setPage}
                />
              </>
            ) : (
              <SearchHistory terms={searchedTerms} setSearchTerm={setSearchTerm} />
            )}
          </div>
        </div>
        {noResults && (
          <div className="flex w-full flex-col rounded-[16px] bg-ui px-4 pb-7 pt-6 tablet:flex-row tablet:items-center tablet:justify-between tablet:p-6 desktop:ml-20 desktop:h-[224px] desktop:w-[342px] desktop:flex-col desktop:items-start">
            <Heading
              tag="h5"
              className="text-center text-white tablet:w-1/3 tablet:text-left desktop:w-full desktop:text-center"
            >
              Consider asking the community.
            </Heading>
            <Socials variant="glass-dark" className="mt-6 justify-center gap-3 tablet:mt-0 desktop:w-full" />
          </div>
        )}
      </div>
    </div>
  );
}

const getTitleParts = (
  category: string,
  resultsCount: number,
  searchTerm: string,
  isSearchFocused: boolean
) => {
  if (category && category !== ALL_FAQS) {
    return { text: category, emphasis: '' };
  }

  if (isSearchFocused && searchTerm === '') {
    return { text: 'Search', emphasis: 'all FAQs' };
  }

  if (searchTerm && resultsCount === 0) {
    return { text: 'No answers matching your request were found.', emphasis: '' };
  }

  if (searchTerm && resultsCount > 0) {
    const answerText = resultsCount === 1 ? 'answer' : 'answers';
    return { text: `${resultsCount} ${answerText} containing`, emphasis: `'${searchTerm}'` };
  }

  return { text: 'Crypto is hard.', emphasis: 'Sky.money makes it easier.' };
};
