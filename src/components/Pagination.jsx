import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pagesToShowBeforeAfter = 1;
    const windowSize = pagesToShowBeforeAfter * 2 + 1;
    const hold = totalPages - windowSize;

    function generatePageNumbers() {
        const pages = [];

        pages.push(1);

        // when we are near the start part
        if(currentPage <= windowSize) {
            for(let i = 2; i <= windowSize + 1; i++) {
                pages.push(i);
            }
            pages.push("...");
        }
        // when we are near the end part
        else if(currentPage >= hold + 1) {
            pages.push("...");
            for(let i = hold + 1; i <= totalPages - 1; i++) {
                pages.push(i);
            }
        }
        // when we are in the middle part
        else {
            pages.push("...");

            for(let i = currentPage - pagesToShowBeforeAfter; i <= currentPage + pagesToShowBeforeAfter; i++) {
                pages.push(i);
            }

            pages.push("...");
        }

        if(totalPages > 1) {
            pages.push(totalPages);
        }

        return pages;
    }

    const pageNumbers = generatePageNumbers();



    return (
        <div className="flex items-center justify-center mt-20">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                className="px-[5px] py-[5px] cursor-pointer disabled:opacity-50"
                disabled={currentPage === 1}
            >
                <LiaAngleLeftSolid size={22} />
            </button>

            <div className="flex gap-[30px] mx-[50px]">
                {pageNumbers.map((page, idx) => (
                    <button
                        key={idx}
                        onClick={() => onPageChange(page)}
                        className={`py-[9px] px-[18px] text-xl font-semibold leading-[30px] font-['Poppins'] rounded-[5px] ${currentPage === page ? "bg-[#FF624C] text-white" : ""} ${page === "..." ? "cursor-default" : "cursor-pointer"}`}
                        disabled={page === "..."}
                    >
                        {page}
                    </button>
                ))}
            </div>

            <button
                onClick={() => onPageChange(currentPage + 1)}
                className="px-[10px] py-[5px] cursor-pointer disabled:opacity-50"
                disabled={currentPage === totalPages}
            >
                <LiaAngleRightSolid size={22} />
            </button>
        </div>
    );
};

export default Pagination;