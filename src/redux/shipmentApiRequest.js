export const shipmentApiRequest = (key) => {
  return (dispatch) => {
    // Replace 'your-api-endpoint' with the actual API endpoint you want to request
    const apiUrl = `https://tracking.bosta.co/shipments/track/${key}`;

    // Make a GET request to the API
    fetch(apiUrl)
      .then((response) => {
        // Check if the response status is OK (status code 200)
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Parse the response as JSON
        return response.json();
      })
      .then((data) => {
        // Data from the API is available here
        console.log(data);

        dispatch({
          type: "TRACKING_SHIPMENT_REQUEST",
          payload: data,
        });
      })
      .catch((error) => {
        // Handle errors here
        console.error("There was a problem with the fetch operation:", error);
      });
  };
};
