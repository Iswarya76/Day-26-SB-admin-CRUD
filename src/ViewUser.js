import React, { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

function ViewUser() {
  const params=useParams()
  const [searchParams]=useSearchParams();
  useEffect(()=>{
    console.log(searchParams.get('status'))
  },[])
  return (
    <div className="container">
      <div className="row">
        <h1>Id is:{params.id}</h1>
        <h2>ID status:{searchParams.get('status')}</h2>
        <div className="col-lg-6">Username: person 1</div>
        <div className="col-lg-6">Email: person 1</div>
        <div className="col-lg-6">Country: person 1</div>
        <div className="col-lg-6">State: person 1</div>
        <div className="col-lg-6">City: person 1</div>
        <div className="col-lg-6">Phone: person 1</div>
        <div className="col-lg-6">DOB: person 1</div>
        <div className="col-lg-6">Gender: person 1</div>
      </div>
    </div>
  );
}

export default ViewUser;
