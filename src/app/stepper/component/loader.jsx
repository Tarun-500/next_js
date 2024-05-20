import Loader from "react-js-loader";

function OverlayLoader() {
  return (
    <>
      <div className="modal-backdrop fade show"></div>
      <div
        className="modal fade show"
        aria-modal="true"
        role="dialog"
        tabIndex="-1"
        style={{ display: "block" }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-transparent border-0">
            <Loader
              type="bubble-spin"
              bgColor={`var(--white)`}
              title={"Loading..."}
              color={`var(--white)`}
              size={150}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default OverlayLoader;
