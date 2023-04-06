import { useState } from "react";

function Form() {
  // hardware field
  const [hardware, setHardware] = useState([
    {
      sno: "1",
      description: "Computer, Dell XPS",
      quantity: "5",
    },
    {
      sno: "2",
      description: "Printer, HP LaserJet",
      quantity: "3",
    },
  ]);

  const handleAddRowHardware = () => {
    setHardware([...hardware, { sno: "", description: "", quantity: "" }]);
  };

  const handleRemoveRowHardware = (index) => {
    const newHardware = [...hardware];
    newHardware.splice(index, 1);
    setHardware(newHardware);
    console.log(hardware)
  };
  
  const handleInputChangeHardware = (event, index) => {
    const { name, value } = event.target;
    const newHardware = [...hardware];
    newHardware[index][name] = value;
    setHardware(newHardware);
  };

  // software field
  const [software, setSoftware] = useState([
    {
      "sno":"1",
      "description":"Microsoft Office, 2022",
      "quantity":"6"
    },
    {
      "sno":"2",
      "description":"Autodesk AutoCAD, 2019",
      "quantity":"5"
    }
  ]);
  const handleAddRowSoftware = () => {
    setSoftware([...software, { sno: "", description: "", quantity: "" }]);
  };

  const handleRemoveRowSoftware = (index) => {
    const newSoftware = [...software];
    newSoftware.splice(index, 1);
    setSoftware(newSoftware);
    console.log(software)
  };

  const handleInputChangeSoftware = (event, index) => {
    const { name, value } = event.target;
    const newSoftware = [...software];
    newSoftware[index][name] = value;
    setSoftware(newSoftware);
  };


  // text input data
  const [formData, setFormData] = useState({
    other_features: "",
    name_and_designation_of_technical_staff: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };


  // form data
  const [labUse, setLabUse] = useState({
    "1": ["Mon", "", "", "", "", "", "", "", ""],
    "2": ["Tue", "", "", "", "", "", "", "", ""],
    "3": ["Wed", "", "", "", "", "", "", "", ""],
    "4": ["Thu", "", "", "", "", "", "", "", ""],
    "5": ["Fri", "", "", "", "", "", "", "", ""],
    "6": ["Sat", "", "", "", "", "", "", "", ""],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const [day, time] = name.split("-");
    const newValue = parseInt(value) || "";

    setLabUse((prevLabUse) => {
      const newLabUse = { ...prevLabUse };
      newLabUse[time][day] = newValue;
      return newLabUse;
    });
  };

  //research activities test boxes
  const [researchActivities, setResearchActivities] = useState({
    candidate_name: "",
    supervisor: "",
  });

  const handleInputChangeResearchActivities = (event) => {
    const { name, value } = event.target;
    setResearchActivities({
      ...researchActivities,
      [name]: value,
    });
  };

  // consultancy
  const [consultancy, setConsultancy] = useState([
    {
      sno: 1,
      client: "ABC Company",
      nature_of_work: "Software development",
      revenue_generated: "10,000",
    },
    {
      sno: 2,
      client: "XYZ Corporation",
      nature_of_work: "IT consulting",
      revenue_generated: "20,000",
    },
  ]);

  const handleAddRowConsultancy = () => {
    const newConsultancy = [
      ...consultancy,
      { sno: "", client: "", nature_of_work: "", revenue_generated: "" },
    ];
    setConsultancy(newConsultancy);
  };

  const handleRemoveRowConsultancy = (index) => {
    const newConsultancy = [...consultancy];
    newConsultancy.splice(index, 1);
    setConsultancy(newConsultancy);
  };

  const handleInputChangeConsultancy = (event, index) => {
    const { name, value } = event.target;
    const newConsultancy = [...consultancy];
    newConsultancy[index][name] = value;
    setConsultancy(newConsultancy);
  };

  // final text boxes
  const [formFields, setFormFields] = useState({
    totalCourses: "",
    totalParticipants: "",
    revenueGenerated: "",
  });

  const handleInputChangeForm = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    console.log(hardware);
    console.log(software);
    console.log(formData);
    console.log(labUse);
    console.log(researchActivities);
    console.log(consultancy);
    console.log(formFields);
    // do something with form data, such as submit to backend
  };

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmitForm}>
        <div className="py-4">
          <label className="font-bold">Hardware</label>
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">SNo</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {hardware.map((item, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">
                    <input
                      type="text"
                      name="sno"
                      value={item.sno}
                      onChange={(event) => handleInputChangeHardware(event, index)}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="text"
                      name="description"
                      value={item.description}
                      onChange={(event) => handleInputChangeHardware(event, index)}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="text"
                      name="quantity"
                      value={item.quantity}
                      onChange={(event) => handleInputChangeHardware(event, index)}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <button
                      type="button"
                      className="bg-red-500 text-white py-1 px-2 rounded"
                      onClick={() => handleRemoveRowHardware(index)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="py-2">
            <button
              type="button"
              className="bg-blue-500 text-white py-1 px-2 rounded"
              onClick={handleAddRowHardware}
            >
              Add Row
            </button>
          </div>
        </div>

        <div className="py-4">
          <label className="font-bold">Software</label>
          <table className="table-auto">
            <thead>
            <tr>
              <th className="px-4 py-2">Sno</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2"></th>
            </tr>
            </thead>
            <tbody>
            {software.map((item, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">
                    <input
                        type="text"
                        name="sno"
                        value={item.sno}
                        onChange={(event) => handleInputChangeSoftware(event, index)}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                        type="text"
                        name="description"
                        value={item.description}
                        onChange={(event) => handleInputChangeSoftware(event, index)}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                        type="text"
                        name="quantity"
                        value={item.quantity}
                        onChange={(event) => handleInputChangeSoftware(event, index)}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <button
                        type="button"
                        className="bg-red-500 text-white py-1 px-2 rounded"
                        onClick={() => handleRemoveRowSoftware(index)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
          <div className="py-2">
            <button
                type="button"
                className="bg-blue-500 text-white py-1 px-2 rounded"
                onClick={handleAddRowSoftware}
            >
              Add Row
            </button>
          </div>
        </div>

        <div className="container mx-auto">
            <div className="py-4">
              <label className="font-bold">Other Features:</label>
              <input
                  type="text"
                  name="other_features"
                  value={formData.other_features}
                  onChange={handleInputChange}
                  className="border rounded-md px-4 py-2 w-full"
              />
            </div>
            <div className="py-4">
              <label className="font-bold">
                Name and Designation of Technical Staff:
              </label>
              <input
                  type="text"
                  name="name_and_designation_of_technical_staff"
                  value={formData.name_and_designation_of_technical_staff}
                  onChange={handleInputChange}
                  className="border rounded-md px-4 py-2 w-full"
              />
            </div>
        </div>

        <div className="flex justify-center my-8">
      <table className="border border-gray-400 shadow-lg rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Time</th>
            <th className="py-3 px-6 text-left">(8.30-9.20)</th>
            <th className="py-3 px-6 text-left">(9.20-10.10)</th>
            <th className="py-3 px-6 text-left">(10.30-11.20)</th>
            <th className="py-3 px-6 text-left">(11.20-12.10)</th>
            <th className="py-3 px-6 text-left">(1.40-12.10)</th>
            <th className="py-3 px-6 text-left">(2.30-3.20)</th>
            <th className="py-3 px-6 text-left">(3.30-4.20)</th>
            <th className="py-3 px-6 text-left">(4.20-5.10)</th>
            <th className="py-3 px-6 text-left">(5.30-6.20)</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {Object.entries(labUse).map(([time, dayValues]) => (
            <tr key={time}>
              <td className="py-3 px-6 text-left">{dayValues[0]}</td>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((day) => (
                <td key={day} className="py-3 px-6 text-left">
                  <input
                    type="number"
                    className="border rounded-lg p-2 w-full"
                    name={`${day}-${time}`}
                    value={dayValues[day]}
                    onChange={handleChange}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

        <div className="container mx-auto">
          <form>
            <div className="py-4">
              <label className="font-bold">Research Activities</label>
              <div className="py-2">
                <label className="block">Candidate Name</label>
                <input
                    type="text"
                    name="candidate_name"
                    value={researchActivities.candidate_name}
                    onChange={handleInputChangeResearchActivities}
                    className="border rounded px-4 py-2 w-full"
                />
              </div>
              <div className="py-2">
                <label className="block">Supervisor</label>
                <input
                    type="text"
                    name="supervisor"
                    value={researchActivities.supervisor}
                    onChange={handleInputChangeResearchActivities}
                    className="border rounded px-4 py-2 w-full"
                />
              </div>
            </div>
          </form>
        </div>

        <div className="container mx-auto">
          <div className="py-4">
            <label className="font-bold">Consultancy Activities</label>
            <table className="table-auto">
              <thead>
              <tr>
                <th className="px-4 py-2">SNo</th>
                <th className="px-4 py-2">Client</th>
                <th className="px-4 py-2">Nature of Work</th>
                <th className="px-4 py-2">Revenue Generated</th>
                <th className="px-4 py-2"></th>
              </tr>
              </thead>
              <tbody>
              {consultancy.map((item, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">
                      <input
                          type="text"
                          name="sno"
                          value={item.sno}
                          onChange={(event) => handleInputChangeConsultancy(event, index)}
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <input
                          type="text"
                          name="client"
                          value={item.client}
                          onChange={(event) => handleInputChangeConsultancy(event, index)}
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <input
                          type="text"
                          name="nature_of_work"
                          value={item.nature_of_work}
                          onChange={(event) => handleInputChangeConsultancy(event, index)}
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <input
                          type="text"
                          name="revenue_generated"
                          value={item.revenue_generated}
                          onChange={(event) => handleInputChangeConsultancy(event, index)}
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <button
                          type="button"
                          className="bg-red-500 text-white py-1 px-2 rounded"
                          onClick={() => handleRemoveRowConsultancy(index)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
              ))}
              </tbody>
            </table>
            <div className="py-2">
              <button
                  type="button"
                  className="bg-blue-500 text-white py-1 px-2 rounded"
                  onClick={handleAddRowConsultancy}
              >
                Add Row
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col min-h-screen">
          <h1 className="text-3xl font-bold mb-8">Course Form</h1>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="totalCourses">
                Total number of courses conducted
              </label>
              <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="totalCourses"
                  type="number"
                  name="totalCourses"
                  value={formFields.totalCourses}
                  onChange={handleInputChangeForm}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="totalParticipants">
                Total number of participants
              </label>
              <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="totalParticipants"
                  type="number"
                  name="totalParticipants"
                  value={formFields.totalParticipants}
                  onChange={handleInputChangeForm}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="revenueGenerated">
                Revenue generated
              </label>
              <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="revenueGenerated"
                  type="number"
                  name="revenueGenerated"
                  value={formFields.revenueGenerated}
                  onChange={handleInputChangeForm}
              />
            </div>
        </div>

        <div className="py-2">
          <button
              type="submit"
              className="bg-blue-500 text-white py-1 px-2 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;