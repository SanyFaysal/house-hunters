const BookingModal = () => {
  return (
    <>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box ">
          <h3 className="font-bold text-lg">
            Book The House <br />
            <span className="text-orange-500 font-semibold">
              Amader Sopno Vila
            </span>
          </h3>
          <div className="my-5 grid-cols-1  my-5 ">
            <div>
              <label htmlFor="">Name</label>
              <br />
              <input
                type="text"
                readOnly
                value={'Abu Sani Faysal'}
                className="px-3 py-2 bg-slate-100 rounded w-full"
              />
            </div>
            <div className="my-2">
              <label htmlFor="">Email</label>
              <br />
              <input
                readOnly
                type="text"
                value={'abu.faysal002@gmail.com'}
                className="px-3 py-2 bg-slate-100 rounded w-full"
              />
            </div>
            <div>
              <label htmlFor="">Phone Number</label>
              <br />
              <input
                type="text"
                className="px-3 py-2 bg-slate-100 rounded w-full"
              />
            </div>
          </div>
          <div className="modal-action">
            <label
              htmlFor="my_modal_6"
              className="py-2 px-3 bg-red-100 text-red-500 my-auto rounded-lg"
            >
              Close
            </label>
            <label
              htmlFor="my_modal_6"
              className="py-2 px-3 bg-blue-100 text-blue-500 my-auto rounded-lg"
            >
              Book
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
