const program = {
    id: "61a7b1d4e55519213a98564f",
    name: "Todos Daniela DEV",
    courses: [{
        courseId:"61a7b172e55519213a98564d",
        courseName: "Prueba Training 1 Dec",
        categories: [
            {
                categoryId: "f513bb51-bc7a-4f25-8a74-b0d58b01eec3",
                days: 1,
                categoryName: "Java"
            },
            {
                categoryId: "9904c41f-b1b0-4790-9c19-fb324dabc567",
                days: 3,
                categoryName: "JS"
            }
        ]
    },{
        courseId:"61a7b172e55519213a98564d",
        courseName: "Prueba Training 1 Dec",
        categories: [
            {
                categoryId: "f513bb51-bc7a-4f25-8a74-b0d58b01eec3",
                days: 4,
                categoryName: "Java"
            },
            {
                categoryId: "9904c41f-b1b0-4790-9c19-fb324dabc567",
                days: 5,
                categoryName: "JS"
            }
        ]
    }]
}
const training = {
    name: "cualquier cosa",
    program: "61a7b1d4e55519213a98564f",
    startingDate: "2021-12-06",
    apprentices: [{
        name: "Santiago",
        emailAddress: "santiago@gmail.com",
        phoneNumber: "3002568794"
    }, 
    {
        name: "Alejandro",
        emailAddress: "alejandro@gmail.com",
        phoneNumber: "3215648794"
    }],
    coaches: [{
        name: "Raul",
        emailAddress: "Raul@gmail.com",
        phoneNumber: "3002568794"
    }, 
    {
        name: "Oscar",
        emailAddress: "Oscar@gmail.com",
        phoneNumber: "3215648794"
    }]
}

const createCalendar = (formValues, programSelected)=>{
  const categories = []; 
  programSelected.courses.map(course => course.categories.map((category) => 
  categories.push({categoryId: category.categoryId,
                     courseId: course.courseId,
                     duration: category.days})));
  console.log("Categorias aplanadas");
  console.log(categories);
  console.log(categories.length);
  //const map = [['key1', 'value1'], ['key2', 'value2'], ['key3', 'vale3']]
  //lunes = 2, martes=3, miercoles=4, jueves=5, viernes=6, sabado=0, domingo=1
  const calendar = {};
  const startingDate = new Date(formValues.startingDate);
  
  for(let n = 0; n < categories.length; n++) {
      for(let i = categories[n].duration; i > 0; i--){
        let day = startingDate.getDay();
        console.log(`asignacion day: ${day}`)
        if(day === 5){
          console.log(`sabado day: ${startingDate}`)
          startingDate.setDate(startingDate.getDate() + 2);
          
          i++;
        }else if(day === 6){
          console.log(`domingo day: ${day}`)
          startingDate.setDate(startingDate.getDate() + 1);
          i++;
        }else{
          console.log(`cualquier dia de semana day: ${startingDate}`)
          const property = startingDate.toISOString().split('T')[0]
          if(calendar.hasOwnProperty(property)){
            calendar[property] = [...calendar[property], categories[n]]
          }else{
            calendar[property] = [categories[n]]
          }
          if(i === 1){
            let startingDateToGrade = new Date(property);
            startingDateToGrade.setDate(startingDateToGrade.getDate() + 1)
            for(let y = 0; y<8; y++){
              let dayGrade = startingDateToGrade.getDay();
              console.log(`asignacion day calificacion: ${day}`)
              if(dayGrade === 5){
                console.log(`sabado day calificacion: ${startingDate}`)
                startingDateToGrade.setDate(startingDateToGrade.getDate() + 2);
                y--;
              }else if(dayGrade === 6){
                console.log(`domingo day calificacion: ${day}`)
                startingDateToGrade.setDate(startingDateToGrade.getDate() + 1);
                y--;
              }else{
                const propertyGrading = startingDateToGrade.toISOString().split('T')[0]
                if(calendar.hasOwnProperty(propertyGrading)){
                  calendar[propertyGrading] = [...calendar[propertyGrading], categories[n]]
                }else{
                  calendar[propertyGrading] = [categories[n]]
                }
                startingDateToGrade.setDate(startingDateToGrade.getDate() + 1)
              }
            }
          }
          startingDate.setDate(startingDate.getDate() + 1);   
        }
      }
  }
  console.log('calendario creado:')
  console.log(calendar)
}

createCalendar(training, program);

// export default createCalendar;
