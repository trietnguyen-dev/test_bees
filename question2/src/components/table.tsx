import React, { useState } from 'react';
import "../styles/tables.css"
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPaginate from 'react-paginate';
import { formatDate } from '../utils/helpers';

interface TUser {
   id?: string;
   name?: string;
   balance?: number;
   email?: string;
   registerAt?: Date;
   active?: boolean;
   formattedBalance?: string
}
interface TableProps {
   data: TUser[];

}
const ITEMS_PER_PAGE = 10;

const Table: React.FC<TableProps> = ({ data }) => {
   const users = data;
   const [currentPage, setCurrentPage] = useState(0);
   const handlePageChange = (selectedPage: { selected: number }) => {
      setCurrentPage(selectedPage.selected);
   };

   const offset = currentPage * ITEMS_PER_PAGE;
   const currentItems = users.slice(offset, offset + ITEMS_PER_PAGE);
   return (
      <>
         <div className="table">
            <div className="row row__header">
               <div className="cell">
                  <input type="checkbox" value="" name="name" />
                  Name</div>
               <div className="cell">Balance($)</div>
               <div className="cell">Email</div>
               <div className="cell">Registration</div>
               <div className="cell">STATUS</div>
               <div className="cell">ACTION</div>
            </div>
            {currentItems.map((user, index) => (< div className="row">
               <div className="cell" data-title="Full Name">
                  <input type="checkbox" value="" name="name" />
                  {user.name}
               </div>
               <div className="cell" data-title="Balance">
                  {user.formattedBalance}
               </div>
               <div className="cell" data-title="Email">
                  <a href='#'> {user.email}</a>
               </div>
               <div className="cell" data-title="Registration" title={user.registerAt ? formatDate(user.registerAt) : ''}>
                  {user.registerAt ? user.registerAt.toISOString().split('T')[0] : ''}
               </div>
               <div className="cell" data-title="STATUS">
                  <button className="btn btn-status">Status</button>
               </div>
               <div className="cell" data-title="ACTION">
                  <FontAwesomeIcon icon={faPen} style={{ color: "#bdc2cc", paddingRight: " 10px" }} />
                  <FontAwesomeIcon icon={faTrash} style={{ color: "#bdc2cc" }} />
               </div>
            </div>))}
         </div >
         <div className="pagination-container">
            <ReactPaginate
               previousLabel={'Previous'}
               nextLabel={'Next'}
               breakLabel={'...'}
               breakClassName={'break-me'}
               pageCount={10}
               marginPagesDisplayed={4}
               pageRangeDisplayed={2}
               onPageChange={handlePageChange}
               containerClassName={'pagination'}
               pageLinkClassName='page-num'
               previousLinkClassName='page-num'
               nextLinkClassName='page-num'
               activeClassName={'active'}
            />
         </div>
      </>


   )
}
export default Table;
