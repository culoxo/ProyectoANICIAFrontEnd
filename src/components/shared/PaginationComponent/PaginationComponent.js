import React from "react";
import styles from './PaginationComponent.module.css';
import {
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";

const PaginationComponent = (props) => {

  const buildPagination = () => {
    let pages = [];

    pages.push(<PaginationItem key={-2} disabled={props.pageIndex === 0}>
      <PaginationLink className={styles.paginationPrevious} first onClick={() => props.onPageIndexChange(0)} />
    </PaginationItem>);

    pages.push(<PaginationItem key={-1} disabled={props.pageIndex === 0}>
      <PaginationLink className={styles.paginationPrevious} previous onClick={() => props.onPageIndexChange(props.pageIndex - 1)} />
    </PaginationItem>);

    let firstPage = 0;
    let lastPage = 4;
    if (props.totalPages > 5) {
      // se calculan la primera y última página que aparecerán en la paginación 
      firstPage = props.pageIndex - 2;
      lastPage = props.pageIndex + 2;

      if (firstPage < 0) {
        lastPage = 4;
        while (firstPage < 0) {
          firstPage++;
        }
      }

      if (lastPage > props.totalPages - 1) {
        // se calcula la última página
        while (lastPage > props.totalPages - 1) {
          lastPage--;
          firstPage--;
        }
      }
    }

    for (let i = firstPage; i <= (props.totalPages < 5 ? props.totalPages - 1 : lastPage); i++) {
      pages.push(<PaginationItem key={i} active={props.pageIndex === i} >
        <PaginationLink className={styles.paginationItem} onClick={() => props.onPageIndexChange(i)}>{i + 1}</PaginationLink>
      </PaginationItem>);
    }

    pages.push(<PaginationItem key={props.totalPages + 1} disabled={props.pageIndex === props.totalPages - 1}>
      <PaginationLink className={styles.paginationNext} next onClick={() => props.onPageIndexChange(props.pageIndex + 1)} />
    </PaginationItem>);

    pages.push(<PaginationItem key={props.totalPages + 2} disabled={props.pageIndex === props.totalPages - 1}>
      <PaginationLink last className={styles.paginationNext} onClick={() => props.onPageIndexChange(props.totalPages - 1)} />
    </PaginationItem>);
    return pages;
  }


  return (
    props.items && props.items.length > 0 && <div className="d-flex justify-content-center pagination-padding-top">
      <Pagination aria-label="Page navigation example">
        {buildPagination()}
      </Pagination>
    </div>

  )
}

export default PaginationComponent;