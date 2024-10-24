// src/App.tsx
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserForm from "./components/userform";

const queryClient = new QueryClient();

const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <UserForm />
        </QueryClientProvider>
    );
};

export default App;
