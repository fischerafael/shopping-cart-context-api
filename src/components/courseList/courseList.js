import React from 'react'

import Course from '../course/course'

function CourseList() {
    const courseData = [
        {name: 'ReactJs', price: 19.90, id: 1},
        {name: 'MongoDB', price: 11.90, id: 2},
        {name: 'HTML5', price: 1.75, id: 3},
    ]
    return (
        <div>
            {courseData.map(course=><Course name={course.name} price={course.price} key={course.id}/>)}
        </div>
    )
}

export default CourseList
