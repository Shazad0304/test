import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import { BiEdit } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const FormFees = () => {
  // Initial data for the form fees
  const initialData = [
    {
      srNo: 1,
      formName: "Business Registration",
      type: "Business",
      formFees: 500,
    },
    {
      srNo: 2,
      formName: "Business Renewal",
      type: "Business",
      formFees: 200,
    },
    {
      srNo: 3,
      formName: "Labour Card",
      type: "Business",
      formFees: 200,
    },
    {
      srNo: 4,
      formName: "Ejari Application",
      type: "Business",
      formFees: 0,
    },
  ];
  // Initial data for the form fees
  const initialDataForLabourVisa = [
    {
      srNo: 1,
      formName: "Offer Letter",
      type: "Person",
      formFees: 700,
    },
    {
      srNo: 2,
      formName: "Labour Insurance",
      type: "Person",
      formFees: 200,
    },
    {
      srNo: 3,
      formName: "Labour Fee",
      type: "Person",
      formFees: 200,
    },
    {
      srNo: 5,
      formName: "Change Status",
      type: "Person",
      formFees: 200,
    },
    {
      srNo: 6,
      formName: "Health Insurance",
      type: "Person",
      formFees: 200,
    },
    {
      srNo: 7,
      formName: "Medical Examination Typing",
      type: "Person",
      formFees: 200,
    },
    {
      srNo: 8,
      formName: "Emirates ID Typing",
      type: "Person",
      formFees: 200,
    },
    {
      srNo: 9,
      formName: "Stamping Visa",
      type: "Person",
      formFees: 200,
    },
    {
      srNo: 10,
      formName: "Final Contract Submission",
      type: "Person",
      formFees: 200,
    },
  ];
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(initialData[0]);
  const [editedValues, setEditedValues] = useState(
    initialData.map((data) => ({
      id: data.srNo,
      value:
        localStorage.getItem(`editedValue_${data.srNo}`) ||
        data.formFees.toString(),
    }))
  );

  const handleEditClick = (data) => {
    setModalOpen(true);
    setSelectedData(data);
  };

  const handleSaveClick = () => {
    editedValues.forEach((editedValue) => {
      localStorage.setItem(`editedValue_${editedValue.id}`, editedValue.value);
    });
    setModalOpen(false);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  //
  const [modaltwoOpen, setModalTwoOpen] = useState(false);
  const [selectedDataTwo, setSelectedDataTwo] = useState(
    initialDataForLabourVisa[0]
  );
  const [editedValuesTwo, setEditedValuesTwo] = useState(
    initialDataForLabourVisa.map((data) => ({
      id: data.srNo,
      value:
        localStorage.getItem(`editedValue_${data.srNo}`) ||
        data.formFees.toString(),
    }))
  );
  const handleEditClickTwo = (data) => {
    setModalTwoOpen(true);
    setSelectedDataTwo(data);
  };
  const handleSaveClickTwo = () => {
    editedValues.forEach((editedValue) => {
      localStorage.setItem(`editedValue_${editedValue.id}`, editedValue.value);
    });
    setModalTwoOpen(false);
  };
  const closeModalTwo = () => {
    setModalTwoOpen(false);
  };
  return (
    <section className="flex bg-customgrey mx-auto max-w-full">
      <div className="w-[17.5] ">
        <SideBar />
      </div>
      <div className="text-xl text-gray-900 font-jost font-semibold w-full ">
        <Navbar />
        <div className="container p-4 ">
          <div className="flex justify-between items-center ">
            <h1 className="sm:text-xl text-sm">Form Fees</h1>
            <div className="text-sm text-customicongrey">
              <NavLink to="/">Form </NavLink> - Fees
            </div>
          </div>
          <div className="bg-white rounded-lg my-5">
            <h3 className="text-customblack font-medium sm:text-lg text-base px-6 py-4">
              Business Registration
            </h3>
            <hr />
            <div className="px-6 py-4">
              <table className="min-w-full">
                <thead className="">
                  <tr className="border bg-[#fdfdfd]">
                    <th className="px-5 pt-[13px] pb-[15px] text-left text-sm font-medium text-customblack tracking-wider">
                      Sr. No.
                    </th>
                    <th className="px-5 pt-[13px] pb-[15px] text-left text-sm font-medium text-customblack tracking-wider">
                      Form Name
                    </th>
                    <th className="px-5 pt-[13px] pb-[15px] text-left text-sm font-medium text-customblack tracking-wider">
                      Type
                    </th>
                    <th className="px-5 pt-[13px] pb-[15px] text-left text-sm font-medium text-customblack tracking-wider">
                      Form Fees
                    </th>
                    <th className="px-5 pt-[13px] pb-[15px] text-left text-sm font-medium text-customblack tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {initialData.map((data) => (
                    <tr key={data.srNo}>
                      <td className="px-5 pt-[11px] pb-[10px] whitespace-nowrap text-base font-normal text-customblack">
                        {data.srNo}
                      </td>
                      <td className="px-5 pt-[11px] pb-[10px] whitespace-nowrap text-base font-normal text-customblack">
                        {data.formName}
                      </td>
                      <td className="px-5 pt-[11px] pb-[10px] whitespace-nowrap text-base font-normal text-customblack">
                        {data.type}
                      </td>
                      <td className="px-5 pt-[11px] pb-[10px] whitespace-nowrap text-base font-normal text-customblack">
                        <div id={`value_${data.srNo}`}>
                          {editedValues.find((v) => v.id === data.srNo).value}
                        </div>
                      </td>
                      <td className="px-5 pt-[11px] pb-[10px] whitespace-nowrap text-lg font-light text-[#747474] hover:text-[#5AAAFF] cursor-pointer">
                        <BiEdit onClick={() => handleEditClick(data)} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Modal for business registration */}
              {modalOpen && (
                <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
                  <div className="bg-white rounded-lg shadow-lg w-[620px]">
                    <div className="modal">
                      <div className="flex items-center justify-between px-7 py-[18px]">
                        <h2 className="text-lg font-semibold">Form Fees</h2>
                        <button
                          onClick={closeModal}
                          className="text-customblack text-base hover:text-gray-700"
                        >
                          {" "}
                          <AiOutlineClose />{" "}
                        </button>
                      </div>
                      <hr />
                      <form className="p-7">
                        <label
                          htmlFor="setamount"
                          className="text-sm text-customblack font-medium block mb-[10px]"
                        >
                          Fees
                        </label>
                        <input
                          type="number"
                          name="Fees"
                          id="Fees"
                          className="w-full px-3 py-3 border rounded text-black text-sm font-normal focus:outline-none focus:border-btnpurple-500 hover:border-btnpurple"
                          value={
                            editedValues.find((v) => v.id === selectedData.srNo)
                              .value
                          }
                          onChange={(e) => {
                            const newValue = e.target.value;
                            setEditedValues((prevValues) =>
                              prevValues.map((v) =>
                                v.id === selectedData.srNo
                                  ? { ...v, value: newValue }
                                  : v
                              )
                            );
                          }}
                        />
                        <div className="mt-4 flex justify-end gap-2">
                          <button
                            onClick={handleSaveClick}
                            className="bg-btnpurple text-white py-3 px-4 text-sm font-medium rounded hover:bg-btnpurple transition duration-300 focus:outline-none"
                          >
                            Confirm
                          </button>
                          <button
                            onClick={closeModal}
                            className="bg-[#5840FF] text-white py-3 px-4 text-sm font-medium rounded hover:bg-btnpurple transition duration-300 focus:outline-none"
                          >
                            Close
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="bg-white rounded-lg my-5">
            <h3 className="text-customblack font-medium sm:text-lg text-base px-6 py-4">
              Labour Visa
            </h3>
            <hr />
            <div className="px-6 py-4">
              <table className="min-w-full">
                <thead className="">
                  <tr className="border bg-[#fdfdfd]">
                    <th className="px-5 pt-[13px] pb-[15px] text-left text-sm font-medium text-customblack tracking-wider">
                      Sr. No.
                    </th>
                    <th className="px-5 pt-[13px] pb-[15px] text-left text-sm font-medium text-customblack tracking-wider">
                      Form Name
                    </th>
                    <th className="px-5 pt-[13px] pb-[15px] text-left text-sm font-medium text-customblack tracking-wider">
                      Type
                    </th>
                    <th className="px-5 pt-[13px] pb-[15px] text-left text-sm font-medium text-customblack tracking-wider">
                      Form Fees
                    </th>
                    <th className="px-5 pt-[13px] pb-[15px] text-left text-sm font-medium text-customblack tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {initialDataForLabourVisa.map((data) => (
                    <tr key={data.srNo}>
                      <td className="px-5 pt-[11px] pb-[10px] whitespace-nowrap text-base font-normal text-customblack">
                        {data.srNo}
                      </td>
                      <td className="px-5 pt-[11px] pb-[10px] whitespace-nowrap text-base font-normal text-customblack">
                        {data.formName}
                      </td>
                      <td className="px-5 pt-[11px] pb-[10px] whitespace-nowrap text-base font-normal text-customblack">
                        {data.type}
                      </td>
                      <td className="px-5 pt-[11px] pb-[10px] whitespace-nowrap text-base font-normal text-customblack">
                        <div id={`value_${data.srNo}`}>
                          {
                            editedValuesTwo.find((v) => v.id === data.srNo)
                              .value
                          }
                        </div>
                      </td>
                      <td className="px-5 pt-[11px] pb-[10px] whitespace-nowrap text-lg font-light text-[#747474] hover:text-[#5AAAFF] cursor-pointer">
                        <BiEdit onClick={() => handleEditClickTwo(data)} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Modal for business registration */}
              {modaltwoOpen && (
                <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
                  <div className="bg-white rounded-lg shadow-lg w-[620px]">
                    <div className="modal">
                      <div className="flex items-center justify-between px-7 py-[18px]">
                        <h2 className="text-lg font-semibold">Form Fees</h2>
                        <button
                          onClick={closeModalTwo}
                          className="text-customblack text-base hover:text-gray-700"
                        >
                          {" "}
                          <AiOutlineClose />{" "}
                        </button>
                      </div>
                      <hr />
                      <form className="p-7">
                        <label
                          htmlFor="setamount"
                          className="text-sm text-customblack font-medium block mb-[10px]"
                        >
                          Fees
                        </label>
                        <input
                          type="number"
                          name="Fees"
                          id="Fees"
                          className="w-full px-3 py-3 border rounded text-black text-sm font-normal focus:outline-none focus:border-btnpurple-500 hover:border-btnpurple"
                          value={
                            editedValuesTwo.find(
                              (v) => v.id === selectedDataTwo.srNo
                            ).value
                          }
                          onChange={(e) => {
                            const newValue = e.target.value;
                            setEditedValuesTwo((prevValues) =>
                              prevValues.map((v) =>
                                v.id === selectedDataTwo.srNo
                                  ? { ...v, value: newValue }
                                  : v
                              )
                            );
                          }}
                        />
                        <div className="mt-4 flex justify-end gap-2">
                          <button
                            onClick={handleSaveClickTwo}
                            className="bg-btnpurple text-white py-3 px-4 text-sm font-medium rounded hover:bg-btnpurple transition duration-300 focus:outline-none"
                          >
                            Confirm
                          </button>
                          <button
                            onClick={closeModalTwo}
                            className="bg-[#5840FF] text-white py-3 px-4 text-sm font-medium rounded hover:bg-btnpurple transition duration-300 focus:outline-none"
                          >
                            Close
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default FormFees;
