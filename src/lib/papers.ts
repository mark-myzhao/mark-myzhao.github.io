import publicationsRaw from '../data/publications.bib?raw';
import { parseBibtex, type BibEntry } from './bibtex';

const papersCache: BibEntry[] = parseBibtex(publicationsRaw);

export function getAllPapers(): BibEntry[] {
	return papersCache;
}

export function getFeaturedPapers(
	limit = 3,
	papers: BibEntry[] = papersCache,
): BibEntry[] {
	return papers
		.filter((paper) => paper.category === 'Publication' || paper.category === 'Workshop Papers' || paper.category === 'Working Paper')
		.sort((a, b) => Number(b.year ?? 0) - Number(a.year ?? 0))
		.slice(0, limit);
}
