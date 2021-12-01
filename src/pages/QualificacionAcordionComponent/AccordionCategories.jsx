import "./AccordionCategories.css"
const AccordionCategories=({categories})=>{
    return (
        <div>
        {
            categories.map((item,i)=>(
                <div className='itemCategory'>
                    <div className='itemCategory-name'>{item.name}</div>
                    <div className='itemCategory-score'>{item.id}</div>
                </div>
            ))
        }
        </div>
    );
}
export default AccordionCategories