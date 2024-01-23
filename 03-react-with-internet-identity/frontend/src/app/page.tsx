"use client";

import { Client, InternetIdentity } from "@bundly/ic-core-js";
import { IcpConnectContextProvider, useAuth } from "@bundly/ic-react";

import UserList from "@app/components/user-list";
import CreateUserForm from "@app/components/create-user-form";
import CreateCourseForm from "@app/components/create-course-form";
import CourseList from "@app/components/course-list";
import LoginButton from "@app/components/login-button";

import { canisters } from "../canisters";

export default function Home() {
  const internetIdentity = new InternetIdentity({
    providerUrl: process.env.NEXT_PUBLIC_INTERNET_IDENTITY_URL,
  });

  const client = Client.create({
    agent: {
      host: process.env.NEXT_PUBLIC_IC_HOST!,
    },
    canisters,
    identityProviders: {
      "internet-identity": internetIdentity,
    },
  });

  return (
    <IcpConnectContextProvider client={client}>
      <main className="h-screen flex flex-col">
        <Content />
      </main>
    </IcpConnectContextProvider>
  );
}

function Content() {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <PrivateContent /> : <PublicContent />;
}

function PrivateContent() {
  return <>
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
  </>
}

function PublicContent() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Para acceder a este sitio primero debes estar logueado</h2>
      <div className="p-4">
        <LoginButton />
      </div>
    </div>
  );
}
