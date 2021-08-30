import React from "react"


class Error extends React.Component {

  
render(){
  return (
    <div className="error container center">
        <h5>OOPS!</h5>
        <p>Currently you are offline</p>
        <a href="/" class="btn light-blue lighten-2">Go to Homepage</a>
    </div>
  );
}
}

export default Error;
