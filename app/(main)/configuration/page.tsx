import React from "react";

interface usernameProps {
  params: {
    username: string;
  };
}

function DashboardPage({ params }: usernameProps) {
  return (
    //generate a dashboard for each username
    <div>
      <h2 className="font-bold text-2xl">Configuration</h2>
    </div>
  );
}

export default DashboardPage;
