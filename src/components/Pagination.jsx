import { Icon } from "@iconify/react";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SETPAGE } from "../state/reducers";
import { getVisiblePageNumbers } from "../service/paginate";
import styled from "styled-components";



const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  color: #333; 
  margin-top: auto;
`;

const Button = styled.button`
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  border: 0;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

const DottedButton = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
`;




const Pagination = () => {
    const { cPage, tPage } = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();

    const visiblePageNumbers = useMemo(() => {
        return getVisiblePageNumbers(cPage, tPage);
    }, [cPage, tPage]);


    const prevPage = () => {
        if (cPage > 0) {
            dispatch(SETPAGE(cPage - 1));
        }
        else {
            alert('No prev Page.');
        }

    }

    const nextPage = () => {
        if (cPage != tPage) {
            dispatch(SETPAGE(cPage + 1));
        } else {
            alert('No next Page.');
        }
    }

    const btwPage = (page) => {
        dispatch(SETPAGE(page));
    }

    return (
        <ButtonContainer>
            <Button onClick={prevPage}><Icon icon="ooui:previous-ltr" /></Button>
            {visiblePageNumbers.map((page, index) => (
                (page !== "...") ? (
                    <Button key={index} onClick={() => btwPage(page)}>
                        {page}
                    </Button>
                ) : (
                    <DottedButton key={index}>...</DottedButton>
                )
            ))}
            <Button onClick={nextPage}><Icon icon="ooui:previous-rtl" /></Button>
        </ButtonContainer>
    )
}

export default Pagination