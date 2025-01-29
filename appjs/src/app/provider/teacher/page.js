import React from 'react'

function page() {

    const teachers= [
        {
            id:1,
            name:"saman",
            age:30,
            subject:"maths"
        },
        {
            id:2,
            name:"kamal",
            age:30,
            subject:"maths"
        },
        {
            id:3,
            name:"nimal",
            age:30,
            subject:"maths"
        },
    ]
  return (
    <>
    <div>Teacher List</div>

    <ul>
        {teachers.map((teacher)=>{
            return(
                <li><link href={'/provider/teacher/${teacher.teachers}'}>{teacher.teachers}</link></li>
            )
        })}
    </ul>

    </>
  )
}

export default page