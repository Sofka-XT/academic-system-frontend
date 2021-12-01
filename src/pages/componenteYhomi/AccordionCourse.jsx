import { useState } from "react";
import AccordionCategories from "./AccordionCategories";
import "./AccordionCourse.css";

const AccordionCourse = ({courses}) => {
    const [selected,setSelected]=useState(null)
    const toggle=(i)=>{
        if(selected===i){
            return setSelected(null)
        }
        setSelected(i)
    }


    return(
        <div className='wrapper'>
            <div className='accordion'> 
            {courses.map((item,i)=>(
                <div className="item">
                    <div className ='title' on onClick={()=>toggle(i)}>
                        <h2 className='titleAccordionName'>{item.name}</h2>
                        <i className={selected===i?"fas fa-minus-circle":"fas fa-plus-circle"}></i>
                    </div>
                    <div className= {selected===i?'content show':'content'}>
                    {/*item.categories[0].name*/}
                    <AccordionCategories categories={item.categories}></AccordionCategories>
                    </div>
                </div>
            )

            
            )}
            </div>
        </div>
    )
};
export default AccordionCourse;
