import React from "react";
import { useState } from "react";
import RenderCourses from "./RenderCourses";
import './CourseComponent.css'

export const Pager= ({itemList,loading,hasErrors})=>{

    const [currentPage, setCurrentPage]=useState(1)

    let paginatorProps=paginator(itemList,currentPage,30)

    function paginator(items, current_page, per_page_items) {
        let page = current_page || 1,
        per_page = per_page_items || 10,
        offset = (page - 1) * per_page,
    
        paginatedItems = items.slice(offset).slice(0, per_page_items),
        total_pages = Math.ceil(items.length / per_page);
    
        return {
            page: page,
            per_page: per_page,
            pre_page: page - 1 ? page - 1 : null,
            next_page: (total_pages > page) ? page + 1 : null,
            total: items.length,
            total_pages: total_pages,
            data: paginatedItems
        };
    }

    const prevPage=()=>{
        setCurrentPage(currentPage-1);
    }
 
    const nextPage=()=>{
        setCurrentPage(currentPage+1);

    }
 
   

    return (<>
    <RenderCourses items={paginatorProps.data} />
    <div className='paginator-buttons'>
    {paginatorProps.pre_page&&<button onClick={prevPage} className="navigation-button">{paginatorProps.pre_page}</button>}
    <button disabled={true} className="navigation-button">{paginatorProps.page}</button>
    {paginatorProps.next_page&&<button onClick={nextPage} className="navigation-button">{paginatorProps.next_page}</button>}
    </div>
    </>
    )
}