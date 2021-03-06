import { useState } from "react";
import AccordionCategories from "./AccordionCategories";
import "./AccordionCourse.css";

const AccordionCourse = ({apprentice,courses}) => {
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
            {courses?.map((item,i)=>(
                <div key={item.courseId} className="item">
                    <div className ='title' onClick={()=>toggle(i)}>
                        <h2 className='titleAccordionName'>{item.courseName}</h2>
                        <i className={selected===i?"fas fa-minus-circle":"fas fa-plus-circle"}></i>
                    </div>
                    <h5 className='average'>{apprentice.courseAverageScore[item.courseId]}</h5>

                    <div className= {selected===i?'content show':'content'}>
                    {/*item.categories[0].name*/}
                    {console.log(item)}
                    <AccordionCategories categories={item.categoryScoreList}></AccordionCategories>
                    </div>
                </div>
            )

            
            )}
            </div>
        </div>
    )
};
export default AccordionCourse;
