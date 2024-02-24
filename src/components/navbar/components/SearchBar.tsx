import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArticleModel } from '@/components/navbar/NavBar';
import Fuse, { FuseResult } from 'fuse.js';
import Link from 'next/link';

const width0 = { width: 0 };

const SearchBar = ({ articles }: { articles: ArticleModel[] }) => {
  const [searchResults, setSearchResults] = useState<
    FuseResult<{ id: number; title: string }>[]
  >([]);
  const [searchTerm, setSearchTerm] = useState('');

  const [isExtended, setIsExtended] = useState<boolean>(false);

  const searchBarRef = useRef<HTMLInputElement>(null);
  const searchBar = searchBarRef.current;

  const inputAnimate = {
    width: isExtended ? 300 : 0,
    fontSize: isExtended ? '1rem' : 0,
    padding: isExtended ? '0 0 0 1rem' : 0
  };

  const handleMouseEnter = () => {
    setIsExtended(true);
    searchBar?.focus();
  };

  const handleMouseLeave = () => {
    if (searchBar?.value === '') {
      setIsExtended(false);
    }
  };

  const handleSearch = (text: string) => {
    const fuse = new Fuse(articles, {
      keys: ['title', 'parentTitle'],
      threshold: 0.3
    });
    setSearchTerm(text);
    setSearchResults(fuse.search(text).slice(0, 5));
  };

  return (
    <motion.div
      layout
      className='flex border rounded-[10rem] border-solid outline-none relative'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.input
        placeholder='Căutați...'
        className='rounded-[10rem] border-[none] outline-none bg-transparent'
        initial={width0}
        animate={inputAnimate}
        ref={searchBarRef}
        onBlur={handleMouseLeave}
        onChange={(e) => handleSearch(e.target.value)}
        value={searchTerm}
      />
      <div
        onClick={() => {
          setSearchTerm('');
        }}
        className='w-12 h-12 flex justify-center items-center aspect-[1] rounded-[5rem] bg-black cursor-pointer'
      >
        <i
          className={`fa-solid ${searchTerm.length === 0 ? 'fa-search' : 'fa-xmark'} text-lg text-white`}
        ></i>
      </div>
      {searchTerm.length > 0 ? (
        <ul className='absolute left-0 top-14 bg-white w-full py-3 rounded-3xl border-solid border'>
          {searchResults.map((result, index) => (
            <Link
              href={`/article/${result.item.id}`}
              key={index}
              onClick={() => {
                setSearchTerm('');
                setIsExtended(false);
              }}
            >
              <li className='py-1 px-4 hover:bg-gray-200 cursor-pointer'>
                {result.item.title}
              </li>
            </Link>
          ))}
          {searchResults.length === 0 ? (
            <li className='px-4 text-gray-500'>Niciun rezultat</li>
          ) : null}
        </ul>
      ) : null}
    </motion.div>
  );
};

export default SearchBar;
