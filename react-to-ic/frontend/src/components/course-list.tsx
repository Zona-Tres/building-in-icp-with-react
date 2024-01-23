import React, { useEffect, useState } from 'react';
import { useActor } from '@bundly/ic-react';
import { Actors } from '../canisters';

type Course = {
    title: string;
    description: string;
}

export default function CourseList() {
    const coursesActor = useActor<Actors>('courses') as Actors["courses"];

    const [courses, setCourses] = useState<Course[] | undefined>();

    useEffect(() => {
        getCourses();
    }, []);

    async function getCourses() {
        try {
            const result = await coursesActor.getAll();

            setCourses(result);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="h-full w-full flex flex-col items-center justify-start">
            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Course List</h2>

            <div className="max-w-md w-full p-8 bg-white shadow-md rounded">
                <div className="bg-white p-4 rounded">
                    <ul>
                        {courses && courses.map((course) => (
                            <li key={course.title} className="mb-4">
                                <h3 className="text-lg font-bold text-black">{course.title}</h3>
                                <p className="text-gray-700">{course.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <button
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={getCourses}
                >
                    Refresh
                </button>
            </div>
        </div>
    );
}
