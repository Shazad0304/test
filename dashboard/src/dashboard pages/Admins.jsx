import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AiOutlinePlus } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { TbArrowsDownUp } from "react-icons/tb";

const Admins = () => {
  const [AdminsData, setAdminsData] = useState([
    {
      id: 1,
      name: "user admin",
      username: "Admin",
      phonenumber: "	0588509781",
      email: "admin@gmail.com",
      address: " ",
    },
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    username: "",
    phonenumber: "",
    email: "",
    address: "",
  });

  const openModal = () => {
    // Calculate the next available ID
    const nextId = AdminsData.length + 1;
    setIsModalOpen(true);
    setFormData({ ...formData, id: nextId.toString() });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    // Add the new entry to AdminsData
    setAdminsData([...AdminsData, formData]);
    // Close the modal
    closeModal();
  };

  // Prevent modal closure on page refresh
  useEffect(() => {
    window.addEventListener("beforeunload", (e) => {
      if (isModalOpen) {
        e.preventDefault();
        e.returnValue = "";
      }
    });
  }, [isModalOpen]);

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
    // Save the edited data to the AdminsData array
    const updatedAdminsData = AdminsData.map((entry) => {
      if (entry.id === editedEntry.id) {
        return { ...entry, ...editedData };
      }
      return entry;
    });
    setAdminsData(updatedAdminsData);

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
    const storedData = JSON.parse(localStorage.getItem("AdminsData")) || [];
    setAdminsData(storedData);
  }, []);

  useEffect(() => {
    // Update localStorage whenever AdminsData changes
    localStorage.setItem("AdminsData", JSON.stringify(AdminsData));
  }, [AdminsData]);

  const handleDeleteEntry = () => {
    if (entryToDelete !== null) {
      // Remove the selected entry from AdminsData
      const updatedAdminsData = AdminsData.filter(
        (entry) => entry.id !== entryToDelete.id
      );
      setAdminsData(updatedAdminsData);

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

  // Function to handle sorting
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
  let filteredData = [...AdminsData];

  if (searchQuery) {
    // Filter data by name property
    filteredData = filteredData.filter(
      (item) =>
        item.name && item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  if (sortColumn && sortDirection) {
    filteredData.sort((a, b) => {
      // Ensure 'a' and 'b' have valid properties before comparing
      if (a[sortColumn] && b[sortColumn]) {
        const comparison = a[sortColumn].localeCompare(b[sortColumn]);
        return sortDirection === "asc" ? comparison : -comparison;
      }
      return 0; // Handle cases where properties are missing or undefined
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

  return (
    <section className="flex bg-customgrey mx-auto max-w-full">
      <div className="w-[17.5] ">
        <SideBar />
      </div>
      <div className="text-xl text-gray-900 font-jost font-semibold w-full ">
        <Navbar />
        <div className="container p-4 h-fit">
          <div className="flex justify-between items-center ">
            <h1 className="sm:text-xl text-sm">Admins</h1>
            <div className="text-sm text-customicongrey">
              <NavLink to="/">Admin </NavLink> - List
            </div>
          </div>
          <div className="bg-white rounded-lg my-5">
            <div className="sm:flex justify-between items-center px-6 py-3">
              <h3 className="text-customblack font-medium sm:text-lg text-base">
              Admins
              </h3>
              <div className="mt-3 sm:w-auto w-max">
                <button
                  onClick={openModal}
                  className="cursor-pointer bg-btnpurple text-white text-[13px] font-medium px-4 py-[5.5px] flex items-center gap-2"
                >
                  <AiOutlinePlus className="text-white" />
                  Add New
                </button>
              </div>
            </div>
            <hr />
            <div className="px-6 py-4">
              <div className="sm:flex justify-between items-center ">
                <div className="flex items-center gap-1 sm:mb-1 mb-3">
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
              <div className="overflow-x-auto">
                <table className="min-w-full my-2 ">
                  <thead className="">
                    <tr className="border bg-[#fdfdfd]">
                      <th
                        onClick={() => handleSort("title")}
                        className="px-5 pt-[13px] pb-[15px] text-left text-sm font-medium text-customblack tracking-wider"
                      >
                        <div className="flex items-center justify-between">
                          <div>Sr. No</div>
                          <div className="flex gap-0 items-center">
                            <TbArrowsDownUp className="text-customicongrey cursor-pointer" />
                          </div>
                        </div>
                      </th>
                      <th
                        onClick={() => handleSort("name")}
                        className="px-5 pt-[13px] pb-[15px] text-left text-sm font-medium text-customblack tracking-wider"
                      >
                        <div className="flex items-center justify-between">
                          <div>Name</div>
                          <div className="flex gap-0 items-center">
                            <TbArrowsDownUp className="text-customicongrey cursor-pointer" />
                          </div>
                        </div>
                      </th>
                      <th
                        onClick={() => handleSort("username")}
                        className="px-5 pt-[13px] pb-[15px] text-left text-sm font-medium text-customblack tracking-wider"
                      >
                        <div className="flex items-center justify-between">
                          <div>User Name</div>
                          <div className="flex gap-0 items-center">
                            <TbArrowsDownUp className="text-customicongrey cursor-pointer" />
                          </div>
                        </div>
                      </th>
                      <th
                        onClick={() => handleSort("phonenumber")}
                        className="px-5 pt-[13px] pb-[15px] text-left text-sm font-medium text-customblack tracking-wider"
                      >
                        <div className="flex items-center justify-between">
                          <div>Phone Number</div>
                          <div className="flex gap-0 items-center">
                            <TbArrowsDownUp className="text-customicongrey cursor-pointer" />
                          </div>
                        </div>
                      </th>
                      <th
                        onClick={() => handleSort("email")}
                        className="px-5 pt-[13px] pb-[15px] text-left text-sm font-medium text-customblack tracking-wider"
                      >
                        <div className="flex items-center justify-between">
                          <div>Email</div>
                          <div className="flex gap-0 items-center">
                            <TbArrowsDownUp className="text-customicongrey cursor-pointer" />
                          </div>
                        </div>
                      </th>
                      <th
                        onClick={() => handleSort("address")}
                        className="px-5 pt-[13px] pb-[15px] text-left text-sm font-medium text-customblack tracking-wider"
                      >
                        <div className="flex items-center justify-between">
                          <div>Address</div>
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
                  <tbody>
                    {currentItems.map((business) => (
                      <tr key={business.id}>
                        <td className="px-5 pt-[11px] pb-[10px] whitespace-nowrap text-base font-normal text-customblack">
                          {business.id}
                        </td>
                        <td className="px-5 pt-[11px] pb-[10px] whitespace-nowrap text-base font-normal text-customblack">
                          {business.name}
                        </td>
                        <td className="px-5 pt-[11px] pb-[10px] whitespace-nowrap text-base font-normal text-customblack">
                          {business.username}
                        </td>
                        <td className="px-5 pt-[11px] pb-[10px] whitespace-nowrap text-base font-normal text-customblack">
                          {business.phonenumber}
                        </td>
                        <td className="px-5 pt-[11px] pb-[10px] whitespace-nowrap text-base font-normal text-customblack">
                          {business.email}
                        </td>
                        <td className="px-5 pt-[11px] pb-[10px] whitespace-nowrap text-base font-normal text-customblack">
                          {business.address}
                        </td>
                        <td className="px-5 pt-[11px] pb-[10px] whitespace-nowrap text-base font-normal text-customblack">
                          <div className="flex items-center gap-1">
                            <button onClick={() => handleEdit(business)}>
                              {" "}
                              <BiEdit className="text-customicongrey text-2xl rounded-full hover:text-btnpurple hover:bg-customgrey p-1" />
                            </button>{" "}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
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
                      className={`border sm:py-3 sm:px-4 py-1 px-2 text-[#666d92] font-normal sm:text-base text-sm ${
                        index + 1 === currentPage
                          ? "bg-blue-500 text-white"
                          : ""
                      }`}
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
                      Edit Agent Form
                    </p>
                    <hr className="mb-3" />
                    <div className="flex items-center justify-between gap-2">
                      <div className="w-full">
                        <label
                          htmlFor="srno"
                          className="text-sm text-customblack font-medium block mb-[10px]"
                        >
                          Sr. No.:
                        </label>
                        <input
                          type="text"
                          name="srno"
                          disabled
                          id="srno"
                          className="w-full px-3 py-3 border rounded text-black text-sm font-normal focus:outline-none focus:border-btnpurple-500 hover:border-btnpurple"
                          value={editedData.id || ""}
                          onChange={(e) =>
                            setEditedData({
                              ...editedData,
                              id: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full">
                        <label
                          htmlFor="name"
                          className="text-sm text-customblack font-medium block mb-[10px]"
                        >
                          Name:
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="w-full px-3 py-3 border rounded text-black text-sm font-normal focus:outline-none focus:border-btnpurple-500 hover:border-btnpurple"
                          value={editedData.name || ""}
                          onChange={(e) =>
                            setEditedData({
                              ...editedData,
                              name: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-2 my-3">
                      <div className="w-full">
                        <label
                          htmlFor="username"
                          className="text-sm text-customblack font-medium block mb-[10px]"
                        >
                          User Name:
                        </label>
                        <input
                          type="text"
                          id="username"
                          name="username"
                          className="w-full px-3 py-3 border rounded text-black text-sm font-normal focus:outline-none focus:border-btnpurple-500 hover:border-btnpurple"
                          value={editedData.username || ""}
                          onChange={(e) =>
                            setEditedData({
                              ...editedData,
                              username: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full">
                        <label
                          htmlFor="phonenumber"
                          className="text-sm text-customblack font-medium block mb-[10px]"
                        >
                          Phone Number:
                        </label>
                        <input
                          type="text"
                          name="phonenumber"
                          id="phonenumber"
                          className="w-full px-3 py-3 border rounded text-black text-sm font-normal focus:outline-none focus:border-btnpurple-500 hover:border-btnpurple"
                          value={editedData.phonenumber || ""}
                          onChange={(e) =>
                            setEditedData({
                              ...editedData,
                              phonenumber: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="w-full">
                        <label
                          htmlFor="email"
                          className="text-sm text-customblack font-medium block mb-[10px]"
                        >
                          Email:
                        </label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="w-full px-3 py-3 border rounded text-black text-sm font-normal focus:outline-none focus:border-btnpurple-500 hover:border-btnpurple"
                          value={editedData.email || ""}
                          onChange={(e) =>
                            setEditedData({
                              ...editedData,
                              email: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full">
                        <label
                          htmlFor="address"
                          className="text-sm text-customblack font-medium block mb-[10px]"
                        >
                          Address:
                        </label>
                        <input
                          type="text"
                          name="address"
                          id="address"
                          className="w-full px-3 py-3 border rounded text-black text-sm font-normal focus:outline-none focus:border-btnpurple-500 hover:border-btnpurple"
                          value={editedData.address || ""}
                          onChange={(e) =>
                            setEditedData({
                              ...editedData,
                              address: e.target.value,
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
            {/* Existing code... */}
            {isModalOpen && (
              <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
                <div className="bg-white rounded-lg shadow-lg w-[620px]">
                  <div className="modal p-7">
                    <p className="text-customblack font-normal text-lg">
                      Add New Agent
                    </p>
                    <hr className="mb-3" />
                    <div className="flex items-center justify-between gap-2">
                    <div className="w-full">
                      <label
                        htmlFor="id"
                        className="text-sm text-customblack font-medium block mb-[10px]"
                      >
                        ID:
                      </label>
                      <input
                        type="text"
                        name="id"
                        id="id"
                        disabled
                        className="w-full px-3 py-3 border rounded text-black text-sm font-normal focus:outline-none focus:border-btnpurple-500 hover:border-btnpurple"
                        value={formData.id}
                      />
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="name"
                        className="text-sm text-customblack font-medium block mb-[10px]"
                      >
                        Name:
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="w-full px-3 py-3 border rounded text-black text-sm font-normal focus:outline-none focus:border-btnpurple-500 hover:border-btnpurple"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                    <div className="w-full">
                      <label
                        htmlFor="username"
                        className="text-sm text-customblack font-medium block mb-[10px]"
                      >
                        User Name:
                      </label>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        className="w-full px-3 py-3 border rounded text-black text-sm font-normal focus:outline-none focus:border-btnpurple-500 hover:border-btnpurple"
                        value={formData.username}
                        onChange={(e) =>
                          setFormData({ ...formData, username: e.target.value })
                        }
                      />
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="phonenumber"
                        className="text-sm text-customblack font-medium block mb-[10px]"
                      >
                        Phone Number:
                      </label>
                      <input
                        type="text"
                        name="phonenumber"
                        id="phonenumber"
                        className="w-full px-3 py-3 border rounded text-black text-sm font-normal focus:outline-none focus:border-btnpurple-500 hover:border-btnpurple"
                        value={formData.phonenumber}
                        onChange={(e) =>
                          setFormData({ ...formData, phonenumber: e.target.value })
                        }
                      />
                    </div>
                    </div>
                     <div className="flex items-center justify-between gap-2">
                    <div className="w-full">
                      <label
                        htmlFor="email"
                        className="text-sm text-customblack font-medium block mb-[10px]"
                      >
                        Email:
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="w-full px-3 py-3 border rounded text-black text-sm font-normal focus:outline-none focus:border-btnpurple-500 hover:border-btnpurple"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="address"
                        className="text-sm text-customblack font-medium block mb-[10px]"
                      >
                        Address:
                      </label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        className="w-full px-3 py-3 border rounded text-black text-sm font-normal focus:outline-none focus:border-btnpurple-500 hover:border-btnpurple"
                        value={formData.address}
                        onChange={(e) =>
                          setFormData({ ...formData, address: e.target.value })
                        }
                      />
                    </div>
                    </div>
                    {/* Add fields for User Name, Phone Number, Email, and Address here */}
                    <div className="mt-4 flex justify-end gap-2">
                      <button
                        onClick={handleSubmit}
                        className="bg-btnpurple text-white py-3 px-4 text-sm font-medium rounded hover:bg-btnpurple transition duration-300 focus:outline-none"
                      >
                        Create
                      </button>
                      <button
                        onClick={closeModal}
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

export default Admins;

