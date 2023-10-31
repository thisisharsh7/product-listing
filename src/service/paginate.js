export function getVisiblePageNumbers(currentPage, totalPages) {

    const startPage = Math.max(1, currentPage - 1);
    const endPage = Math.min(totalPages, currentPage + 1);

    const pageNumbers = startPage > 1 ? ["..."] : [];

    for (let i = startPage; i < endPage; i++) {
        pageNumbers.push(i);
    }

    if (endPage < totalPages) {
        pageNumbers.push("...");
    }

    return pageNumbers;
}