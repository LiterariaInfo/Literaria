import { motion } from 'framer-motion';
import NavBarCategoryList from '@/components/navbar/components/NavBarCategoryList';
import { CategoryModel } from '@/components/navbar/NavBar';
import { Dispatch, SetStateAction, useState } from 'react';
import Link from 'next/link';

const opacity0 = {
  opacity: 0
};

const opacity1 = {
  opacity: 1
};

const exit = {
  opacity: 0,
  transition: {
    duration: 0.2
  }
};

const NavBarListExpanded = ({
  categories,
  generalCategories,
  setActiveCategory,
  setExpanded
}: {
  categories: CategoryModel[];
  generalCategories: CategoryModel[];
  setActiveCategory: Dispatch<SetStateAction<number>>;
  setExpanded: Dispatch<SetStateAction<boolean>>;
}) => {
  const [onCategory, setOnCategory] = useState<boolean>(false);

  return (
    <>
      <motion.div
        layout
        className='flex gap-16 pl-32 py-8 laptop:pl-20 tablet:pl-12 mobile:hidden'
      >
        {categories.map((category, index) => (
          <NavBarCategoryList category={category} key={index} setExpanded={setExpanded} />
        ))}
      </motion.div>
      <motion.div
        layout
        className='hidden flex-col gap-4 mobile:flex py-6 overflow-auto h-[100svh] pb-12 [scrollbar-width:none]'
      >
        {onCategory ? (
          <>
            {categories.map((category, index) => (
              <motion.label
                initial={opacity0}
                animate={opacity1}
                transition={{
                  delay: index * 0.04
                }}
                exit={exit}
                className='title-label'
                key={index}
              >
                {category.title}
                <div className='flex flex-col'>
                  {category.children?.map((child, index) => (
                    <Link
                      href={`/article/${child.id}`}
                      onClick={() => {
                        setExpanded(false);
                      }}
                      className='small-title'
                      key={index}
                    >
                      {child.title}
                    </Link>
                  ))}
                </div>
              </motion.label>
            ))}
          </>
        ) : (
          <>
            {generalCategories.map((category, index) => (
              <motion.label
                initial={opacity0}
                animate={opacity1}
                transition={{
                  delay: index * 0.04
                }}
                exit={exit}
                className='small-title'
                onClick={() => {
                  setActiveCategory(index);
                  setOnCategory(true);
                }}
                key={index}
              >
                {category.title}
              </motion.label>
            ))}
            <motion.label
              initial={opacity0}
              animate={opacity1}
              transition={{
                delay: generalCategories.length * 0.04
              }}
              exit={exit}
              className='small-title'
              onClick={() => {
                setExpanded(false);
              }}
            >
              <Link href={`/gallery`}>Galerie</Link>
            </motion.label>
            <motion.label
              initial={opacity0}
              animate={opacity1}
              transition={{
                delay: (generalCategories.length + 1) * 0.04
              }}
              exit={exit}
              className='small-title'
              onClick={() => {
                setExpanded(false);
              }}
            >
              <Link href={`/about`}>Despre noi</Link>
            </motion.label>
          </>
        )}
      </motion.div>
    </>
  );
};
export default NavBarListExpanded;
