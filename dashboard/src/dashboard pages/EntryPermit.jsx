import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  AiOutlineDelete,
  AiOutlineFileText,
  AiOutlinePlus,
  AiOutlineUser,
} from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { TbArrowsDownUp } from "react-icons/tb";
import { CSVLink } from "react-csv";
import * as XLSX from "xlsx";
import { useReactToPrint } from "react-to-print";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BsBag } from "react-icons/bs";

const EntryPermit = () => {
  const componentPDF = useRef();
  const [EntryPermitData, setEntryPermitData] = useState([
    // {
    //   id: 1,
    //   title: "Anwar key",
    //   price: 3000,
    //   users: "active",
    //   users2: "Anwar technologhy",
    // },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortColumn, setSortColumn] = useState("title");
  const [sortDirection, setSortDirection] = useState("asc");
  const [entryToDelete, setEntryToDelete] = useState(null);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editedEntry, setEditedEntry] = useState(null);
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    // Initialize editedData with the selected entry's data
    if (editedEntry) {
      setEditedData(editedEntry);
    }
  }, [editedEntry]);

  const handleEdit = (entry) => {
    // Open the edit modal and set the selected entry
    setEditedEntry(entry);
    setEditModalVisible(true);
  };

  const handleSave = () => {
    // Save the edited data to the EntryPermitData array
    const updatedEntryPermitData = EntryPermitData.map((entry) => {
      if (entry.id === editedEntry.id) {
        return { ...entry, ...editedData };
      }
      return entry;
    });
    setEntryPermitData(updatedEntryPermitData);

    // Close the edit modal
    setEditModalVisible(false);
  };

  const handleCancel = () => {
    // Close the edit modal without saving changes
    setEditModalVisible(false);
    setEditedEntry(null);
    setEditedData({});
  };

  useEffect(() => {
    // Retrieve data from localStorage on component mount
    const storedData =
      JSON.parse(localStorage.getItem("EntryPermitData")) || [];
    setEntryPermitData(storedData);
  }, []);

  useEffect(() => {
    // Update localStorage whenever EntryPermitData changes
    localStorage.setItem(
      "EntryPermitData",
      JSON.stringify(EntryPermitData)
    );
  }, [EntryPermitData]);

  const handleDeleteEntry = () => {
    if (entryToDelete !== null) {
      // Remove the selected entry from EntryPermitData
      const updatedEntryPermitData = EntryPermitData.filter(
        (entry) => entry.id !== entryToDelete.id
      );
      setEntryPermitData(updatedEntryPermitData);

      // Clear the entryToDelete state
      setEntryToDelete(null);
    }
  };

  // Function to handle pagination
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // Function to handle the "Next" button
  const handleNextPage = () => {
    if (currentPage < Math.ceil(filteredData.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to handle the "Previous" button
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  // Function to handle search filtering
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSort = (column) => {
    if (sortColumn === column) {
      // Toggle sorting direction if the same column is clicked again
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      // Set a new column for sorting
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  // Function to handle changing the number of items per page
  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(1); // Reset to the first page when changing items per page
  };

  // Apply sorting and filtering to the data
  let filteredData = [...EntryPermitData];
  if (searchQuery) {
    filteredData = filteredData.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  if (sortColumn) {
    filteredData.sort((a, b) => {
      const comparison = a[sortColumn].localeCompare(b[sortColumn]);
      return sortDirection === "asc" ? comparison : -comparison;
    });
  }

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate the range of items currently displayed
  const firstItemIndex = (currentPage - 1) * itemsPerPage + 1;
  const lastItemIndex = Math.min(
    currentPage * itemsPerPage,
    filteredData.length
  );

  // Create a label for "Showing X to Y of Z entries"
  const paginationLabel = `Showing ${firstItemIndex} to ${lastItemIndex} of ${filteredData.length} entries`;

  //Export Excel
  const handleExportExcel = () => {
    const ws = XLSX.utils.json_to_sheet(EntryPermitData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "EntryPermitData");
    XLSX.writeFile(wb, "EntryPermitData.xlsx");
  };

  //Export PDF generatePrint
  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "EntryPermitData",
  });
  const generatePrint = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "EntryPermitDataPrint",
  });

  const handleCopyToClipboard = () => {
    // Convert EntryPermitData to a JSON string to copy it to the clipboard
    const jsonString = JSON.stringify(EntryPermitData);
    // Perform the copy operation
    navigator.clipboard
      .writeText(jsonString)
      .then(() => {
        // Handle success or show a notification
        alert("Data copied to clipboard!");
      })
      .catch((error) => {
        // Handle error or show a notification
        console.error("Copy to clipboard failed:", error);
      });
  };
  return (
    <section className="flex bg-customgrey mx-auto max-w-full">
      <div className="w-[17.5] ">
        <SideBar />
      </div>
      <div className="text-xl text-gray-900 font-jost font-semibold w-full ">
        <Navbar />
        <div className="container p-4 h-fit">
          <div className="flex justify-between items-center ">
            <h1 className="sm:text-xl text-sm">Entry Permit</h1>
            <div className="text-sm text-customicongrey">
              <NavLink to="/">Entry Permit</NavLink> - List
            </div>
          </div>
          <div className="bg-white rounded-lg my-5">
            <div className="sm:flex justify-between items-center px-6 py-4">
              <h3 className="text-customblack font-medium sm:text-lg text-base">
              Entry Permit
              </h3>
              <div className="mt-3 sm:w-auto w-max">
                <NavLink
                  to="/dashboard/business-registration-form"
                  className="cursor-pointer bg-btnpurple text-white text-[13px] font-medium px-4 py-[5.5px] flex items-center gap-2"
                >
                  <AiOutlinePlus className="text-white" />
                  Apply For Entry Permit
                </NavLink>
              </div>
            </div>
            <hr />
            <div className="px-6 py-4">
              <div className="buttons-export sm:flex items-center gap-1 mb-2 grid grid-cols-3">
                <CopyToClipboard text={JSON.stringify(EntryPermitData)}>
                  <button
                    onClick={handleCopyToClipboard}
                    className="csv-button border bg-btnpurple text-white font-normal text-base px-4 py-1 hover:bg-white hover:text-btnpurple hover:border-btnpurple"
                  >
                    Copy
                  </button>
                </CopyToClipboard>
                <button className="csv-button border bg-btnpurple text-white font-normal text-base px-4 py-1 hover:bg-white hover:text-btnpurple hover:border-btnpurple">
                  <CSVLink data={EntryPermitData}>CSV</CSVLink>
                </button>
                <button
                  onClick={handleExportExcel}
                  className="csv-button border bg-btnpurple text-white font-normal text-base px-4 py-1 hover:bg-white hover:text-btnpurple hover:border-btnpurple"
                >
                  Excel
                </button>
                <button
                  onClick={generatePDF}
                  className="csv-button border bg-btnpurple text-white font-normal text-base px-4 py-1 hover:bg-white hover:text-btnpurple hover:border-btnpurple"
                >
                  PDF
                </button>
                <button
                  onClick={generatePrint}
                  className="csv-button border bg-btnpurple text-white font-normal text-base px-4 py-1 hover:bg-white hover:text-btnpurple hover:border-btnpurple"
                >
                  Print
                </button>
              </div>
              <div className="sm:flex justify-between items-center ">
                <div className="flex items-center gap-1 sm:mb-0 mb-3">
                  <label className="text-[#666d92] text-base font-normal">
                    Show{" "}
                  </label>
                  <select
                    onChange={handleItemsPerPageChange}
                    value={itemsPerPage}
                    className="border text-[#666d92] text-sm font-normal outline-none focus:outline-none"
                  >
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                  </select>
                  <p className="text-[#666d92] text-base font-normal">
                    {" "}
                    entries
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <label className="text-[#666d92] text-base font-normal">
                    Search:{" "}
                  </label>
                  <input
                    type="text"
                    placeholder=" "
                    value={searchQuery}
                    onChange={handleSearch}
                    className="sm:w-auto w-full outline-none py-1 px-2 border rounded text-black text-sm font-normal focus:outline-none focus:border-btnpurple-500 hover:border-btnpurple"
                  />
                </div>
              </div>
              <div
                ref={componentPDF}
                style={{ width: "100%" }}
                className="overflow-x-auto"
              >
                <table className="min-w-full my-2 ">
                  <thead className="">
                    <tr className="border bg-[#fdfdfd]">
                      <th
                        onClick={() => handleSort("title")}
                        className="px-5 pt-[13px] pb-[15px] text-left text-sm font-medium text-customblack tracking-wider"
                      >
                        <div className="flex items-center justify-between">
                          <div>Title</div>
                          <div className="flex gap-0 items-center">
                            <TbArrowsDownUp className="text-customicongrey cursor-pointer" />
                          </div>
                        </div>
                      </th>
                      <th
                        onClick={() => handleSort("price")}
                        className="px-5 pt-[13px] pb-[15px] text-left text-sm font-medium text-customblack tracking-wider"
                      >
                        <div className="flex items-center justify-between">
                          <div>Price</div>
                          <div className="flex gap-0 items-center">
                            <TbArrowsDownUp className="text-customicongrey cursor-pointer" />
                          </div>
                        </div>
                      </th>
                      <th
                        onClick={() => handleSort("status")}
                        className="px-5 pt-[13px] pb-[15px] text-left text-sm font-medium text-customblack tracking-wider"
                      >
                        <div className="flex items-center justify-between">
                          <div>Users</div>
                          <div className="flex gap-0 items-center">
                            <TbArrowsDownUp className="text-customicongrey cursor-pointer" />
                          </div>
                        </div>
                      </th>
                      <th className="px-5 pt-[13px] pb-[15px] text-left text-sm font-medium text-customblack tracking-wider">
                        <div className="flex items-center justify-between">
                          <div>Actions</div>
                          <div className="flex gap-0 items-center">
                            <TbArrowsDownUp className="text-customicongrey cursor-pointer" />
                          </div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  {EntryPermitData.length === 0 ? (
                    <tbody className="h-6">
                      <tr className="text-center text-customblack text-base font-normal relative">
                        <td className="absolute right-0 left-0">
                          No data available in table
                        </td>
                      </tr>
                    </tbody>
                  ) : (
                    <tbody>
                      {currentItems.map((business) => (
                        <tr key={business.id}>
                          <td className="px-5 pt-[11px] pb-[10px] whitespace-nowrap text-base font-normal text-customblack">
                            <div className="flex items-center gap-2">
                              <p className="text-btnpurple font-medium">
                                {business.title}
                              </p>
                              <div className="flex items-center gap-[2px] text-[#FA8B0C] bg-[#f5f3f0] py-1 px-2 rounded-full">
                                <AiOutlineFileText className="text-xs font-medium" />
                                <p className="text-xs font-medium">Pending</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-5 pt-[11px] pb-[10px] whitespace-nowrap text-base font-normal text-customblack">
                            <div className="flex items-center gap-2">
                              <p className="text-customblack font-medium">
                                AED {business.price}
                              </p>
                              <div className="flex items-center gap-[2px] text-[#FA8B0C] bg-[#f5f3f0] py-1 px-2 rounded-full">
                                <AiOutlineFileText className="text-xs font-medium" />
                                <p className="text-xs font-medium">Pending</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-5 pt-[11px] pb-[10px] whitespace-nowrap text-base font-normal text-customblack">
                            <div className="flex flex-col gap-2">
                              <div className="flex w-max items-center gap-2 cursor-pointer text-btnpurple border py-1.5 px-2 rounded-full hover:text-white hover:bg-btnpurple">
                                <AiOutlineUser className="text-sm font-medium" />
                                <p className="text-sm font-medium">
                                  {business.users}
                                </p>
                              </div>
                              <div className="flex w-max items-center gap-2 cursor-pointer text-[#FA8B0C] border py-1.5 px-2 rounded-full hover:text-white hover:bg-[#FA8B0C]">
                                <BsBag className="text-sm font-medium" />
                                <p className="text-sm font-medium">
                                  {business.users2}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-5 pt-[11px] pb-[10px] whitespace-nowrap text-base font-normal text-customblack">
                            <div className="flex items-center gap-1">
                              <button onClick={() => handleEdit(business)}>
                                {" "}
                                <BiEdit className="text-customicongrey text-2xl rounded-full hover:text-btnpurple hover:bg-customgrey p-1" />
                              </button>{" "}
                              <button
                                onClick={() => setEntryToDelete(business)}
                              >
                                <AiOutlineDelete className="text-customicongrey text-2xl rounded-full hover:text-[#FF0F0F] hover:bg-customgrey p-1" />
                              </button>{" "}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  )}
                </table>
              </div>
              <div className="sm:flex items-center justify-between">
                <p className="text-[#666d92] font-normal sm:text-base text-sm sm:mb-0 mb-3">
                  {paginationLabel}
                </p>
                <div>
                  <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className="border sm:py-3 sm:px-4 py-1 px-2 text-[#666d92] font-normal sm:text-base text-sm"
                  >
                    Previous
                  </button>
                  {Array.from({
                    length: Math.ceil(filteredData.length / itemsPerPage),
                  }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => paginate(index + 1)}
                      className="border sm:py-3 sm:px-4 py-1 px-2 text-[#666d92] font-normal sm:text-base text-sm"
                    >
                      {index + 1}
                    </button>
                  ))}
                  <button
                    onClick={handleNextPage}
                    disabled={
                      currentPage ===
                      Math.ceil(filteredData.length / itemsPerPage)
                    }
                    className="border sm:py-3 sm:px-4 py-1 px-2 text-[#666d92] font-normal sm:text-base text-sm"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
            {editModalVisible && (
              <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
                <div className="bg-white rounded-lg shadow-lg w-[620px]">
                  <div className="modal p-7">
                    <p className="text-customblack font-normal text-lg">
                      Edit Form
                    </p>
                    <hr className="mb-3" />
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="w-full">
                        <label
                          htmlFor="businessName"
                          className="text-sm text-customblack font-medium block mb-[10px]"
                        >
                          Business Name:
                        </label>
                        <input
                          type="text"
                          disabled
                          name="businessName"
                          id="businessName"
                          className="w-full px-3 py-3 border rounded text-black text-sm font-normal focus:outline-none focus:border-btnpurple-500 hover:border-btnpurple"
                          value={editedData.businessName || ""}
                          onChange={(e) =>
                            setEditedData({
                              ...editedData,
                              businessName: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="w-full">
                        <label
                          htmlFor="contactNumber"
                          className="text-sm text-customblack font-medium block mb-[10px]"
                        >
                          Price:
                        </label>
                        <input
                          type="text"
                          name="price"
                          id="price"
                          className="w-full px-3 py-3 border rounded text-black text-sm font-normal focus:outline-none focus:border-btnpurple-500 hover:border-btnpurple"
                          value={editedData.price || ""}
                          onChange={(e) =>
                            setEditedData({
                              ...editedData,
                              price: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full">
                        <label
                          htmlFor="users"
                          className="text-sm text-customblack font-medium block mb-[10px]"
                        >
                          Users:
                        </label>
                        <input
                          type="text"
                          name="Users"
                          id="Users"
                          className="w-full px-3 py-3 border rounded text-black text-sm font-normal focus:outline-none focus:border-btnpurple-500 hover:border-btnpurple"
                          value={editedData.users || ""}
                          onChange={(e) =>
                            setEditedData({
                              ...editedData,
                              users: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end gap-2">
                      <button
                        onClick={handleSave}
                        className="bg-btnpurple text-white py-3 px-4 text-sm font-medium rounded hover:bg-btnpurple transition duration-300 focus:outline-none"
                      >
                        Save
                      </button>
                      <button
                        onClick={handleCancel}
                        className="bg-btnpurple text-white py-3 px-4 text-sm font-medium rounded hover:bg-btnpurple transition duration-300 focus:outline-none"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/*  */}
            {entryToDelete && (
              <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
                <div className="bg-white rounded-lg shadow-lg w-96">
                  <div className="modal p-5">
                    <p className="text-customblack font-normal text-lg text-center pb-5">
                      Are you sure you want to delete this entry?
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={handleDeleteEntry}
                        className="bg-btnpurple text-white py-3 px-4 text-sm font-medium rounded hover:bg-btnpurple transition duration-300 focus:outline-none"
                      >
                        Confirm
                      </button>
                      <button
                        onClick={() => setEntryToDelete(null)}
                        className="bg-btnpurple text-white py-3 px-4 text-sm font-medium rounded hover:bg-btnpurple transition duration-300 focus:outline-none"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default EntryPermit;


