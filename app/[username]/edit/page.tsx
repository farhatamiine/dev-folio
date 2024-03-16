import React from 'react';

interface usernameProps {
    params: {
        username: string
    }
}

function DashboardPage({params}: usernameProps) {

    return (
        <div>
            {params.username} Dashboard
        </div>
    );
}

export default DashboardPage;