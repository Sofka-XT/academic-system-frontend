import "./AccordionCategories.css"
const AccordionCategories=({categories})=>{
    return (
        <div>
        {
            categories.map((item,i)=>(
                <div className='itemCategory'>
                    <div className='itemCategory-name'>{item.categoryName}</div>
                    <div className='itemCategory-score'>{item.score}</div>
                </div>
            ))
        }
        </div>
    );
}
export default AccordionCategories