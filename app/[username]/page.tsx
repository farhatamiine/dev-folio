import React from 'react';
import Template1 from "@/components/template1/template1";

interface usernameProps {
    params: {
        username: string
    }
}

function UsernamePage({params}: usernameProps) {

    return (
       <Template1 username={params.username}/>
    );
}

export default UsernamePage;