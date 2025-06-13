import Fuse from 'fuse.js';
import { faqDataset } from '../faqData';
import { useMemo } from 'react';

const unrankedFaqItems = faqDataset.map(item => ({ item, score: 0, matches: [] }));

export const useSearchFaq = ({
  searchTerm,
  category,
  page = 1,
  pageSize = 10
}: {
  searchTerm?: string;
  category?: string;
  page?: number;
  pageSize?: number;
}) => {
  const fuse = useMemo(
    () =>
      new Fuse(faqDataset, {
        keys: category ? ['categories'] : searchTerm?.length ? ['question', 'answer'] : [],
        ignoreLocation: !category,
        threshold: category ? 0 : 0.3,
        includeMatches: true
      }),
    [category, searchTerm]
  );

  const results = useMemo(() => {
    if (searchTerm) return fuse.search(searchTerm);
    if (category) return fuse.search(category);
    return unrankedFaqItems;
  }, [fuse, searchTerm, category]);

  const totalItems = results.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedResults = results.slice(startIndex, endIndex);

  return {
    items: paginatedResults,
    page,
    pageSize,
    totalItems,
    totalPages
  };
};
