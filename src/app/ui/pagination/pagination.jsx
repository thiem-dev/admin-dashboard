'use client';
import styles from './pagination.module.css';

const Pagination = () => {
  // const page = searchParams.get("page") || 1;
  const handleChangePage = (type) => {
    console.log(type);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        // disabled={!hasPrev}
        onClick={() => handleChangePage('prev')}
      >
        Previous
      </button>
      <button
        className={styles.button}
        // disabled={!hasNext}
        onClick={() => handleChangePage('next')}
      >
        Next
      </button>
    </div>
  );
};
export default Pagination;
