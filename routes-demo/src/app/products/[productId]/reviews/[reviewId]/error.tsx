"use client";
function ErrorBoundry({error,reset}:{
    error:Error
    reset : ()=> void
}) {
  return (
    <div>{error.message} <button onClick={reset} className="border p-1 ml-3 rounded-xl" >Try again</button> </div>
  )
}

export default ErrorBoundry