/*var original_Query;
var modified_Query;
var original_Endpoint;
var modified_Endpoint;
var conn; //connection string

//var modifiedString = replaceDoubleQuotesWithSingleQuotes(originalString);

//console.log(modifiedString);
function string_Builder() {
  // Sets up the iri and query to be used;
}
function exec_Query() {
  console.log("Start of exec_query");

  const sparqlEndpoint = modified_Endpoint.value;
  const sparqlQuery = modified_Query.value;
  fetch(
    `http://localhost:3000/sparql?query=${encodeURIComponent(
      sparqlQuery
    )}&endpoint=${encodeURIComponent(sparqlEndpoint)}`
  )
    .then((response) => response.json())
    .then((data) => {
      // Log the data to the console
      console.log("Query Results:", data);
    })
    .catch((error) => {
      console.error("Error executing query:", error);
    });

  console.log("end of exec_Query");
}

function changeFrom_SingleToDouble(inputString) {
  //changes "" to '. Needed for literal in query

  const resultString = inputString.replace(/"/g, "'");

  return resultString;
}
function start_Procedures() {
  original_Endpoint_ele = document.getElementById("Iri_id");
  original_Endpoint = original_Endpoint_ele.value;
  modified_Endpoint = changeFrom_SingleToDouble(original_Endpoint);
  original_Query_ele = document.getElementById("Sparql_query");
  original_Query = original_Query_ele.value;
  modified_Query = changeFrom_SingleToDouble(original_Query);
  exec_Query(modified_Endpoint, modified_Query);
}

function activate_Graph_Area() {
  //change visibility of graph area when there is a graph to be shown.
}

async function executeQuery() {
  const sparqlEndpoint = document.getElementById("sparqlEndpoint").value;
  const sparqlQuery = document.getElementById("sparqlQuery").value;

  try {
    // Make an HTTP POST request using axios with async/await
    const response = await axios.post("http://localhost:3000/sparql", {
      query: sparqlQuery,
      endpoint: sparqlEndpoint,
    });

    // Log the data to the console
    console.log("Query Results:", response.data);

    // Display the results on the frontend
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = JSON.stringify(response.data, null, 2);
  } catch (error) {
    console.error("Error executing query:", error);
  }
}
function Hello() {}*/
async function executeQuery() {
  const sparqlEndpoint = document.getElementById("sparqlEndpoint").value;
  const sparqlQuery = document.getElementById("sparqlQuery").value;

  try {
    // Make an HTTP POST request using axios with async/await
    const response = await axios.post(
      "http://localhost:3000/sparql",
      {
        query: sparqlQuery,
        endpoint: sparqlEndpoint,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Log the data to the console
    console.log("Query Results:", response.data);
  } catch (error) {
    console.error("Error executing query:", error);
  }
}
