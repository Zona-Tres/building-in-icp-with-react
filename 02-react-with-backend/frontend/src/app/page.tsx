"use client";

import { Client } from "@bundly/ic-core-js";
import { IcpConnectContextProvider } from "@bundly/ic-react";

import UserList from "@app/components/user-list";
import CreateUserForm from "@app/components/create-user-form";
import CreateCourseForm from "@app/components/create-course-form";
import CourseList from "@app/components/course-list";

import { canisters } from "../canisters";

export default function Home() {
  const client = Client.create({
    agent: {
      host: process.env.NEXT_PUBLIC_IC_HOST!,
    },
    canisters
  });

  return (
    <IcpConnectContextProvider client={client}>
      <Content />
    </IcpConnectContextProvider>
  );
}

function Content() {
  return (
    <main className="h-screen flex flex-col">
      <section className="h-1/2 flex">
        <div className="w-1/2 h-full flex items-center justify-center">
          <CreateUserForm />
        </div>
        <div className="w-1/2 h-full flex items-center justify-center">
          <UserList />
        </div>
      </section>
      <section className="h-1/2 flex">
        <div className="w-1/2 h-full flex items-center justify-center">
          <CreateCourseForm />
        </div>
        <div className="w-1/2 h-full flex items-center justify-center">
          <CourseList />
        </div>
      </section>
    </main>
  );
}
