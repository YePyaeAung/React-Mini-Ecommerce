const Loader = () => {
    return (
        <div className="d-flex justify-content-center align-items-center p-5">
            <div className="spinner-border text-danger" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}
 
export default Loader;