import React, { useEffect, useState } from 'react';
import { useActor } from '@bundly/ic-react';
import { Actors } from '../canisters';
import Card from './card/card.component';
import { CardHeader } from './card/card-header.component';
import { CardContent } from './card/card-content.component';
import { CardActions } from './card/card-actions.component';

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
        <Card>
            <CardHeader>
                Course List
            </CardHeader>
            <CardContent>
                <ul>
                    {courses && courses.map((course) => (
                        <li key={course.title} className="mb-4">
                            <h3 className="text-lg font-bold text-black">{course.title}</h3>
                            <p className="text-gray-700">{course.description}</p>
                        </li>
                    ))}
                </ul>
            </CardContent>
            <CardActions>
                <button
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={getCourses}
                >
                    Refresh
                </button>
            </CardActions>
        </Card>
    );
}
