/* eslint-disable react/prop-types */

export default function HouseDetailsSideInfo({house}) {
  return (
    <div className="col-span-1 ">
    <div className="bg-white p-5 rounded-lg flex-col flex gap-y-2">
      <h1 className="text-xl mb-[-5px]">House Info</h1>
      <div>
        <label htmlFor="text-light">Bed Rooms</label>

        <p className="text-md font-semibold">{house?.bedrooms}</p>
      </div>
      <div>
        <label htmlFor="">Bath Rooms</label>
        <p className="text-md font-semibold">{house?.bathrooms} </p>
      </div>
      <div>
        <label htmlFor="">Room Size</label>
        <p className="text-md font-semibold">
          {house?.roomSize}
          {/* 13ft <RxCross1 className="inline" /> 12ft{' '} */}
        </p>
      </div>
      <div>
        <label htmlFor="">Availability Date</label>
        <p className="text-md font-semibold">{house?.availabilityDate}</p>
      </div>
    </div>
    <div className="bg-white p-5 rounded-lg mt-5 flex-col flex gap-y-2">
      <h1 className="text-xl mb-[-5px]">Contact Info</h1>
      <div>
        <label htmlFor="text-light">Address</label>
        <p className="text-sm font-semibold">{house?.address}</p>
      </div>
      <div>
        <label htmlFor="">City</label>
        <p className="text-sm font-semibold">{house?.city} </p>
      </div>
      <div>
        <label htmlFor="">Owner Name</label>
        <p className="text-sm font-semibold">
          {house?.owner?.ownerInfo?.fullName}
        </p>
      </div>
      <div>
        <label htmlFor="">Phone Number</label>
        <p className="text-sm font-semibold">{house?.phoneNumber} </p>
      </div>
    </div>
  </div>
  )
}
