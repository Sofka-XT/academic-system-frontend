import { createAsyncThunk } from "@reduxjs/toolkit";

export const getApprenticeInfo = createAsyncThunk('profile/getApprenticeInfo',
    async () => {
      //const response = await fetchCourses();
      return {
        email: "xxxx@gmail.com",
        apprenticeName: "Andres",
        phoneNumber: "xxxx",
        TrainingId: "xxxx",
        courses:[{courseId: "xxxx", 
                courseName: "Introduccion al desarrollo de software",
                average: 86,
                categories: 
                [{  categoryId: "xxxx",
                categoryName: "git",
                score: 78
            },
            {
                categoryId: "yyyy",
                categoryName: "java",
                score: 95
            }]
        },
        {courseId: "yyyy", 
                courseName: "Full Stack",
                average: 70,
                categories: 
                [{  categoryId: "xxxx2",
                categoryName: "spring",
                score: 100
            },
            {
                categoryId: "yyyy2",
                categoryName: "react",
                score: 82
            },
            {
                categoryId: "zzzz2",
                categoryName: "Programacion funcional",
                score: 70
            },
            {
                categoryId: "aaaa2",
                categoryName: "Programacion reactiva",
                score: 30
            }]
        },
        {courseId: "zzzz", 
                courseName: "Arquitectura",
                average: 49,
                categories: 
                [{  categoryId: "xxxx3",
                categoryName: "Capas",
                score: 83
            },
            {
                categoryId: "yyyy3",
                categoryName: "Microservicios",
                score: 15
            }]
        },
    ]
     };
    }
  );